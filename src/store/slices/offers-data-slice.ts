import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewType } from '../../types/treview';
import { ShortOfferType, FullOfferType, FavoriteOfferType } from '../../types/toffer';

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
      // Обновляем или добавляем оффер в favoriteOffers
      const index = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
      if (index >= 0) {
        state.favoriteOffers[index] = action.payload;
      } else {
        state.favoriteOffers.push(action.payload);
      }
      // Также обновляем офферы в общем списке и nearbyOffers, если нужно
      const updateOfferArray = (arr: (ShortOfferType | FavoriteOfferType)[]) => {
        const idx = arr.findIndex((offer) => offer.id === action.payload.id);
        if (idx >= 0) {
          arr[idx] = action.payload;
        }
      };
      updateOfferArray(state.offers);
      updateOfferArray(state.nearbyOffers);
      // Если загружен полный оффер, тоже обновим его, если id совпадает
      if (state.offer && state.offer.id === action.payload.id) {
        state.offer.isFavorite = action.payload.isFavorite;
      }
    },
    removeFavoriteOffer(state, action: PayloadAction<string>) {
      // Удаляем оффер из избранного по id
      state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload);

      // Обновляем is_favorite в offers, nearbyOffers и offer
      const updateIsFavoriteFalse = (arr: (ShortOfferType | FavoriteOfferType)[]) => {
        const offer = arr.find((o) => o.id === action.payload);
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
