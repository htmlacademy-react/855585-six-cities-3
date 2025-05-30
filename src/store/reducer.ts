import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, cities } from '../const';
import { OffersState } from '../types/store';
import { setCity, loadOffers, loadOffer, loadNearbyOffers, loadOfferComments, requireAuthorization, setError, setOffersDataLoadingStatus,setUserEmail } from './actions';

const initialState: OffersState = {
  city: cities[0],
  offers: [],
  offer: null,
  offersNeaby: [],
  offerComments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  error: null,
  email: null,
};

//createReducer заменяет switch-редьюсер. builder.addCase позволяет указывать, как состояние меняется при каждом экшене.
//Можно мутабельно менять state, благодаря immer (встроен в RTK).
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.offersNeaby = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.offerComments = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

