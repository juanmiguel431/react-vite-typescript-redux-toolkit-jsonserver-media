import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store';
import { useAppDispatch } from './useAppDispatch.ts';
import { useMemo } from 'react';

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
