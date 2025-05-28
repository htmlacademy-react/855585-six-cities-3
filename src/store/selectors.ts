import {RootState} from '../types/store';

export const selectActiveCity = (state: RootState) => state.city;
export const selectOffers = (state: RootState) => state.offers;
