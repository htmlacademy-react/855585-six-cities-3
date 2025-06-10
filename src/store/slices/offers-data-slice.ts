import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewType } from '../../types/review';
import { ShortOfferType, FullOfferType, FavoriteOfferType } from '../../types/offer';

interface OffersDataState {
  offers: ShortOfferType[];
  offer: FullOfferType | null;
  nearbyOffers: ShortOfferType[];
  favoriteOffers: FavoriteOfferType[];
  offerComments: ReviewType[];
  isLoadingOffers: boolean;
  isLoadingOffer: boolean;
}

const initialState: OffersDataState = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  favoriteOffers: [],
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
    loadFavoriteOffers(state, action: PayloadAction<FavoriteOfferType[]>) {
      state.favoriteOffers = action.payload;
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
    updateFavoriteOffer(state, action: PayloadAction<FavoriteOfferType>) {
      const index = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
      if (index >= 0) {
        state.favoriteOffers[index] = action.payload;
      } else {
        state.favoriteOffers.push(action.payload);
      }
      const updateOfferArray = (offers: (ShortOfferType | FavoriteOfferType)[]) => {
        const offerIndex = offers.findIndex((offer) => offer.id === action.payload.id);
        if (offerIndex >= 0) {
          offers[offerIndex] = action.payload;
        }
      };
      updateOfferArray(state.offers);
      updateOfferArray(state.nearbyOffers);
      if (state.offer && state.offer.id === action.payload.id) {
        state.offer.isFavorite = action.payload.isFavorite;
      }
    },
    removeFavoriteOffer(state, action: PayloadAction<string>) {
      state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload);

      const updateIsFavoriteFalse = (offers: (ShortOfferType | FavoriteOfferType)[]) => {
        const offer = offers.find((currentOffer) => currentOffer.id === action.payload);
        if (offer) {
          offer.isFavorite = false;
        }
      };
      updateIsFavoriteFalse(state.offers);
      updateIsFavoriteFalse(state.nearbyOffers);
      if (state.offer && state.offer.id === action.payload) {
        state.offer.isFavorite = false;
      }
    },
  },
});

export const {
  loadOffers,
  loadOffer,
  loadNearbyOffers,
  loadFavoriteOffers,
  loadOfferComments,
  setLoadingOffers,
  setLoadingOffer,
  updateFavoriteOffer,
  removeFavoriteOffer,
} = offersDataSlice.actions;

export default offersDataSlice.reducer;
