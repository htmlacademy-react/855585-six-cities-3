// import { cities } from '../const';
// import { offers } from '../mocks/offers';
// import {OffersState, AppAction, SET_CITY, SET_OFFERS} from '../types/store';

// const initialState: OffersState = {
//   city: cities[0],
//   offers
// };

// export function reducer(state: OffersState = initialState, action: AppAction): OffersState {
//   switch (action.type) {
//     case SET_CITY:
//       return {
//         ...state,
//         city: action.payload
//       };
//     case SET_OFFERS:
//       return {
//         ...state,
//         offers: action.payload
//       };
//     default:
//       return state;
//   }
// }

import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { offers } from '../mocks/offers';
import { OffersState } from '../types/store';
import { setCity, setOffers } from './actions';

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
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

