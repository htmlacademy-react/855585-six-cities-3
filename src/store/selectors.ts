import {RootState} from '../types/store';

export const selectActiveCity = (state: RootState) => state.currentCity.city;
export const selectOffers = (state: RootState) => state.offersData.offers;
export const getError = (state: RootState): string | null => state.appError.error;
