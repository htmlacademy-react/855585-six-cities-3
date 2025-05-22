import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import {RootState, AppDispatch} from '../types/store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer,
});

//не сможем диспачнуть действие которое не создавали
export const useAppDispatch = () => useDispatch<AppDispatch>();
//получим не просто абстрактные значения из стора которвые нужно будет типизировать
//будем работаь с нашим state который уже описали
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

