// import { SET_CITY, SET_OFFERS, SetCityAction, SetOffersAction } from '../types/store';
// import {TOffer} from '../types/toffer';

// export const setCity = (city: string): SetCityAction => ({
//   type: SET_CITY,
//   payload: city,
// });

// export const setOffers = (offers: TOffer[]): SetOffersAction => ({
//   type: SET_OFFERS,
//   payload: offers,
// });

import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/toffer';

//передаём тип payload (<string>, <TOffer[]>) прямо в createAction,
// RTK сам создаёт объект экшена и его типизацию
export const setCity = createAction<string>('offers/setCity');
export const setOffers = createAction<TOffer[]>('offers/setOffers');
