import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/toffer';
import { AuthorizationStatus } from '../const';

//передаём тип payload (<string>, <TOffer[]>) прямо в createAction,
// RTK сам создаёт объект экшена и его типизацию
export const setCity = createAction<string>('offers/setCity');
export const initOffers = createAction<TOffer[]>('offers/initOffers');
export const loadOffers = createAction<TOffer[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
