import { useDispatch } from 'react-redux';
import { AppDispatch } from '@app/model/ReduxType';

export const useAppDispatch = () => useDispatch<AppDispatch>();
