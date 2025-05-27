import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import {RootState, AppDispatch} from '../types/store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { createAPI } from '../services/api';
import {redirect} from './middlewares/redirect';

//Создадим экземпляр api
export const api = createAPI();
//чтобы никуда не прокидывать redux thunk
export const store = configureStore({
  reducer,
  //встренныей middleWare (thunk)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,//доп аргумент досутпный в асинх-х действяих.
      }
    }).concat(redirect),//добавляем массив с нашим middleware
});

//не сможем диспачнуть действие которое не создавали
export const useAppDispatch = () => useDispatch<AppDispatch>();
//получим не просто абстрактные значения из стора которвые нужно будет типизировать
//будем работаь с нашим state который уже описали
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


