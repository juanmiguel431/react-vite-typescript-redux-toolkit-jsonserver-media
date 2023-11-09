// Use throughout your app instead of plain `useDispatch` and `useSelector`
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

export const useAppDispatch: () => AppDispatch = useDispatch
