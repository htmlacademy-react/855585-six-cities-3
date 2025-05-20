import { TOffer } from './toffer';
import type {store} from '../store';

export type OffersState = {
  city: string;
  offers: TOffer[];
}

// export const SET_CITY = 'offers/setCity' as const;
// export const SET_OFFERS = 'offers/setOffers' as const;

// export type SetCityAction = {
//   type: typeof SET_CITY;
//   payload: string;
// };

// export type SetOffersAction = {
//   type: typeof SET_OFFERS;
//   payload: TOffer[];
// };

// export type AppAction = SetCityAction | SetOffersAction;
//автоматически выводит тип всего состояния (state), которое хранится в Redux-хранилище (store).
export type RootState = ReturnType<typeof store.getState>;

//получает тип dispatch-функции, которая используется для отправки (диспатча) экшенов в Redux.
export type AppDispatch = typeof store.dispatch;

