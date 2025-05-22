import { TOffer } from './toffer';
import type {store} from '../store';

export type OffersState = {
  city: string;
  offers: TOffer[];
}
//автоматически выводит тип всего состояния (state), которое хранится в Redux-хранилище (store).
export type RootState = ReturnType<typeof store.getState>;

//получает тип dispatch-функции, которая используется для отправки (диспатча) экшенов в Redux.
export type AppDispatch = typeof store.dispatch;

