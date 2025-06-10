import {RootState} from '../types/store';

export const selectActiveCity = (state: RootState) => state.currentCity.city;
export const selectOffers = (state: RootState) => state.offersData.offers;
export const getError = (state: RootState): string | null => state.appError.error;
export const selectFavoriteOffers = (state: RootState) => state.offersData.favoriteOffers;
export const getReviews = (state: RootState) => state.offersData.offerComments;

