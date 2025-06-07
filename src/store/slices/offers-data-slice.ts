import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewType } from '../../types/treview';
import { ShortOfferType, FullOfferType } from '../../types/toffer';

interface OffersDataState {
  offers: ShortOfferType[];
  offer: FullOfferType| null;
  nearbyOffers: ShortOfferType[];
  offerComments: ReviewType[];
  isLoadingOffers: boolean;
  isLoadingOffer: boolean;
}

const initialState: OffersDataState = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  offerComments: [],
  isLoadingOffers: false,
  isLoadingOffer: false,
};

const offersDataSlice = createSlice({
  name: 'offers-data',
  initialState,
  reducers: {
    loadOffers(state, action: PayloadAction<ShortOfferType[]>) {
      state.offers = action.payload;
    },
    loadOffer(state, action: PayloadAction<FullOfferType | null>) {
      state.offer = action.payload;
    },
    loadNearbyOffers(state, action: PayloadAction<ShortOfferType[]>) {
      state.nearbyOffers = action.payload;
    },
    loadOfferComments(state, action: PayloadAction<ReviewType[]>) {
      state.offerComments = action.payload;
    },
    setLoadingOffers(state, action: PayloadAction<boolean>) {
      state.isLoadingOffers = action.payload;
    },
    setLoadingOffer(state, action: PayloadAction<boolean>) {
      state.isLoadingOffer = action.payload;
    },
  },
});

export const {
  loadOffers,
  loadOffer,
  loadNearbyOffers,
  loadOfferComments,
  setLoadingOffers,
  setLoadingOffer,
} = offersDataSlice.actions;

export default offersDataSlice.reducer;
