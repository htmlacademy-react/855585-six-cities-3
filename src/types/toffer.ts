// Тип для локации
export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

// Тип для города
export type City = {
  name: string;
  location: Location;
};

// Базовый тип предложения с общими полями
export type OfferBase = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

// Короткий тип предложения, расширяет OfferBase и добавляет previewImage (необязательное)
export type ShortOfferType = OfferBase & {
  previewImage?: string;
};

// Избранное предложение — как ShortOfferType, но previewImage обязательный
export type FavoriteOfferType = OfferBase & {
  previewImage: string;
};

// Полное предложение — расширяет OfferBase и добавляет специфичные поля
export type FullOfferType = OfferBase & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};
