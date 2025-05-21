import markerIcon from './components/map/assets/pin.svg';
import activeMarkerIcon from './components/map/assets/pin-active.svg';

export const locationNames = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const cities = ['Paris', 'Amsterdam', 'Cologne'];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO AUTH',
  Unknown = 'UNKNOWN',
}

const URL_MARKER_DEFAULT = markerIcon;
const URL_MARKER_CURRENT = activeMarkerIcon;

export {URL_MARKER_DEFAULT, URL_MARKER_CURRENT};
