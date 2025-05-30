import { createAction } from '@reduxjs/toolkit';
import { ShortOfferType, FullOfferType } from '../types/toffer';
import { ReviewType } from '../types/treview';
import { AuthorizationStatus, AppRoute } from '../const';

//передаём тип payload (<string>, <TOffer[]>) прямо в createAction,
// RTK сам создаёт объект экшена и его типизацию
export const setCity = createAction<string>('app/setCity');
export const loadOffers = createAction<ShortOfferType[]>('data/loadOffers');
export const loadNearbyOffers = createAction<ShortOfferType[]>('data/loadOffersNearby');
export const loadOffer = createAction<FullOfferType>('data/loadOffer');
export const loadOfferComments = createAction<ReviewType[]>('data/loadOfferComments');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('app/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setOfferDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const setUserEmail = createAction<string>('user/setUserEmail');
