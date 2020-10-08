import types from '../../Types';

const initialState = {
  addCandidate: {
    location: {
      lat: '',
      lng: '',
      address: '',
      country: '',
      region: '',
      city: '',
      postCode: '',
      shortCode: '',
    },
    selects: {
      degrees: {
        opts: [],
        selected: '0',
      },
      positions: {
        opts: [],
        selected: '0',
      },
      industries: {
        opts: [],
        selected: '0',
      },
    },
  },
  candidatesList: [],
}
export const candidatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.candidateAdd:
      return {
        ...state,
        candidatesList: [
          action.payload,
          ...state.candidatesList
        ]
      };
    case types.candidatesSetList:
      return {
        ...state,
        candidatesList: action.payload
      };
    case types.candidateAddSetSelectsOpts:
      return {
        ...state,
        addCandidate: {
          ...state.addCandidate,
          selects: action.payload
        }
      };
    case types.candidatesAddSetSelectSelected:
      const { select, selected } = action.payload;
      return {
        ...state,
        addCandidate: {
          ...state.addCandidate,
          selects: {
            ...state.addCandidate.selects,
            [select]: {
              ...state.addCandidate.selects[select],
              selected
            }
          }
        }
      };
    case types.candidatesAddSetSelectClearSelected:
      return {
        ...state,
        addCandidate: {
          ...state.addCandidate,
          selects: {
            degrees: {
              ...state.addCandidate.selects.degrees,
              selected: initialState.addCandidate.selects.degrees.selected,
            },
            positions: {
              ...state.addCandidate.selects.positions,
              selected: initialState.addCandidate.selects.positions.selected,
            },
            industries: {
              ...state.addCandidate.selects.industries,
              selected: initialState.addCandidate.selects.industries.selected,
            }
          }
        }
      };
    case types.candidatesAddSetLocation:
      return {
        ...state,
        addCandidate: {
          ...state.addCandidate,
          location: action.payload
        }
      };
    case types.candidatesAddClearLocation:
      return {
        ...state,
        addCandidate: {
          ...state.addCandidate,
          location: {
            ...initialState.addCandidate.location
          }
        }
      };
    default:
      return state;
  }
}
