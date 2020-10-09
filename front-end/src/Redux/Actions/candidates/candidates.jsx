import types from '../../../Types';

const addCandidate = (candidate) => ({
  type: types.candidateAdd,
  payload: candidate
});

const setCandidatesList = (candidatesList) => ({
  type: types.candidatesSetList,
  payload: candidatesList
});

const setAddSelectsOpts = (selects) => ({
  type: types.candidateAddSetSelectsOpts,
  payload: selects
});

export const setAddSelectSelected = (select, id) => ({
  type: types.candidatesAddSetSelectSelected,
  payload: {
    select: select,
    selected: id,
  }
});

const setAddSelectClearSelected = () => ({
  type: types.candidatesAddSetSelectClearSelected,
})

export const setAddLocation = (location) => ({
  type: types.candidatesAddSetLocation,
  payload: location
})

export const setAddClearLocation = () => ({
  type: types.candidatesAddClearLocation
})

export const setAddCandidateToInitState = () => {
  return (dispatch) => {
    dispatch(setAddSelectClearSelected());
    dispatch(setAddClearLocation());
  }
}

/***************************************
 * HELPERS
 ***************************************/

export const loadCandidatesState = () => {
  return async (dispatch) => {
    const candidatesList = await dispatch(loadCandidatesList());
    await dispatch(loadAddSelectsOpts());
    return candidatesList;
  }
}

const loadCandidatesList = () => {
  return async (dispatch) => {
    const res = await fetch(process.env.REACT_APP_GPAC_API_CANDIDATES)
      .then(res => res.json());
    if (res.ok) dispatch(setCandidatesList(res.candidates));
    return res;
  }
}

const loadAddSelectsOpts = () => {
  return async (dispatch) => {
    const { degrees } = await fetch(process.env.REACT_APP_GPAC_API_DEGREES)
      .then(res => res.json());
    const { positions } = await fetch(process.env.REACT_APP_GPAC_API_POSITIONS)
      .then(res => res.json());
    const { industries } = await fetch(process.env.REACT_APP_GPAC_API_INDUSTRIES)
      .then(res => res.json());
    const selects = {
      degrees: { opts: degrees, selected: '0' },
      positions: { opts: positions, selected: '0' },
      industries: { opts: industries, selected: '0' },
    };
    dispatch(setAddSelectsOpts(selects));
  }
}

export const locationCleanup = (mapboxFeature) => {
  return () => {
    try {
      const { center, place_name, place_type, context, text, properties } = mapboxFeature;
      let sepContext = {};

      if (context !== undefined) {
        context.map(c => {
          switch (c.id.split('.')[0]) {
            case 'country':
              sepContext = { ...sepContext, country: c.text }
              break;
            case 'region':
              sepContext = { ...sepContext, region: c.text, short_code: c.short_code || '' }
              break;
            case 'place':
              sepContext = { ...sepContext, city: c.text }
              break;
            case 'postcode':
              sepContext = { ...sepContext, postcode: c.text }
              break;
            default:
              break;
          }
          return 0;
        });
      } else {
        return 'NO_CONTEXT';
      }
      switch (place_type[0]) {
        case 'country':
          sepContext = { ...sepContext, country: text };
          break;
        case 'region':
          sepContext = { ...sepContext, region: text, short_code: properties.short_code };
          break;
        case 'place':
          sepContext = { ...sepContext, city: text };
          break;
        default:
          break;
      }
      return ({
        ...sepContext,
        address: place_name,
        lng: center[0],
        lat: center[1],
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const startAddingCandidate = (candidate) => {
  return async (dispatch) => {
    try {
      const { avatar, position } = candidate;
      avatar !== undefined && avatar !== null
        ? candidate = { ...candidate, avatar: await fileUpload(avatar) }
        : delete candidate.avatar;
      if (position === '0') delete candidate.position;
      const addedCandidate = await fetch(process.env.REACT_APP_GPAC_API_CANDIDATES, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(candidate),
      }).then(res => res.json());
      if (addedCandidate.ok) {
        dispatch(addCandidate(addedCandidate.candidate));
        return { ok: true, severity: 'success', message: addedCandidate.msg };
      } else {
        return {
          ok: false, severity: 'error',
          message: addedCandidate.error.message || addedCandidate.message
        };
      }
    } catch (err) {
      throw err;
    }
  }
}

const fileUpload = async (file) => {
  const formData = new FormData();
  formData.append('upload_preset', 'gpac-test');
  formData.append('file', file);

  try {
    const res = await fetch(process.env.REACT_APP_CLOUDINARY_API, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      const { secure_url } = await res.json();
      return secure_url;
    } else {
      throw await res.json();
    }
  } catch (err) {
    throw err;
  }
}