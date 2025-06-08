import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

//передаём тип payload (<string>, <TOffer[]>) прямо в createAction,
// RTK сам создаёт объект экшена и его типизацию
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
