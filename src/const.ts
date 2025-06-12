import markerIcon from './components/map/assets/pin.svg';
import activeMarkerIcon from './components/map/assets/pin-active.svg';

export const sortingValues = {
  popular: 'Popular',
  lowToHigh: 'Price: low to high',
  highToLow: 'Price: high to low',
  topRated: 'Top rated first'
};

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/404'
}

export enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO AUTH',
  Unknown = 'UNKNOWN',
}

export const ReviewFormLength = {
  Min: 50,
  Max: 300,
} as const;

const URL_MARKER_DEFAULT = markerIcon;
const URL_MARKER_CURRENT = activeMarkerIcon;

export {URL_MARKER_DEFAULT, URL_MARKER_CURRENT};

export const TIMEOUT_SHOW_ERROR = 2000;
export const MAX_OFFER_IMAGES = 6;
export const MAX_NEARBY_OFFERS = 3;
export const MAX_REVIEWS = 10;
