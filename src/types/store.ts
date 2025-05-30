import { ShortOfferType, FullOfferType } from './toffer';
import { ReviewType } from './treview';
import type {store} from '../store';
import { AuthorizationStatus } from '../const';


export type OffersState = {
  city: string;
  offers: ShortOfferType[];
  offer: FullOfferType | null;
  offersNeaby: ShortOfferType[];
  offerComments: ReviewType[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  error: string | null;
  email: string | null;
}
//автоматически выводит тип всего состояния (state), которое хранится в Redux-хранилище (store).
export type RootState = ReturnType<typeof store.getState>;

//получает тип dispatch-функции, которая используется для отправки (диспатча) экшенов в Redux.
export type AppDispatch = typeof store.dispatch;

