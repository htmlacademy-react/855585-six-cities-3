import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, cities } from '../const';
import { OffersState } from '../types/store';
import { setCity, initOffers, loadOffers, requireAuthorization, setError } from './actions';

const initialState: OffersState = {
  city: cities[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

//createReducer заменяет switch-редьюсер. builder.addCase позволяет указывать, как состояние меняется при каждом экшене.
//Можно мутабельно менять state, благодаря immer (встроен в RTK).
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(initOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

