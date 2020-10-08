import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCandidatesState } from '../Redux/Actions/candidates';

export const useLoadCandidates = (setLoading) => {
  const dispatch = useDispatch();
  // TODO: Si los datos ya se cargaron, no volver a disparar el dispatch, hacer validación con candidatesList
  useEffect(() => {
    (async () => {
      const res = await dispatch(loadCandidatesState());
      if (res.ok) {
        setLoading(false);
      }
    })();
  }, [dispatch, setLoading]);
}
