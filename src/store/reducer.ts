import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { offers } from '../mocks/offers';
import { OffersState } from '../types/store';
import { setCity, initOffers } from './actions';

const initialState: OffersState = {
  city: cities[0],
  offers,
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
    });
});

