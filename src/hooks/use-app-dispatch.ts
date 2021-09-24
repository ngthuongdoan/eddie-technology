import { useDispatch } from 'react-redux';
import { AppDispatch } from '../model/ReduxType';

export const useAppDispatch = () => useDispatch<AppDispatch>();
