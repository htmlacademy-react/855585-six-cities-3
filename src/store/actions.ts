import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/toffer';
import { AuthorizationStatus, AppRoute } from '../const';

//передаём тип payload (<string>, <TOffer[]>) прямо в createAction,
// RTK сам создаёт объект экшена и его типизацию
export const setCity = createAction<string>('app/setCity');
export const initOffers = createAction<TOffer[]>('app/initOffers');
export const loadOffers = createAction<TOffer[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('app/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const setUserEmail = createAction<string>('user/setUserEmail');
