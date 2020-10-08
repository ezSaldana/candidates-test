import types from '../../Types';

const initialState = {
  mapOpts: {
    coords: [-95.712891, 37.09024],
    zoom: [3],
  },
  activeCandidate: {
    id: '',
    coords: [],
    zoom: []
  }
}

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.mapSetActiveCandidate:
      return {
        ...state,
        activeCandidate: action.payload
      }
    default:
      return state;
  }
}