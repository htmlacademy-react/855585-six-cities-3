import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/toffer';

//передаём тип payload (<string>, <TOffer[]>) прямо в createAction,
// RTK сам создаёт объект экшена и его типизацию
export const setCity = createAction<string>('offers/setCity');
export const initOffers = createAction<TOffer[]>('offers/initOffers');
