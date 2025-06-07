import { combineReducers } from '@reduxjs/toolkit';
import currentCityReducer from './slices/current-city-slice';
import offersDataReducer from './slices/offers-data-slice';
import userReducer from './slices/user-slice';
import appErrorReducer from './slices/app-error-slice';

const rootReducer = combineReducers({
  currentCity: currentCityReducer,
  offersData: offersDataReducer,
  user: userReducer,
  appError: appErrorReducer,
});

export default rootReducer;
