import { ShortOfferType, FullOfferType } from './offer';
import { ReviewType } from './review';
import type {store} from '../store';
import { AuthorizationStatus } from '../const';


export type OffersState = {
  city: string;
  offers: ShortOfferType[];
  offer: FullOfferType | null;
  offersNearby: ShortOfferType[];
  offerComments: ReviewType[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  error: string | null;
  email: string | null;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

