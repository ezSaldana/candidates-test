import types from '../../../Types';

export const setActiveMapCandidate = (active) => ({
  type: types.mapSetActiveCandidate,
  payload: active
});