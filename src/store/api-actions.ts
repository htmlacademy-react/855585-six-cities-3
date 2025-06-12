import axios, { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../types/store';
import { ShortOfferType, FullOfferType, FavoriteOfferType } from '../types/offer';
import { ReviewType } from '../types/review';
import { CommentPostType } from '../types/comment';
import { redirectToRoute } from './actions';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './';
import { setEmail, setAuthorizationStatus } from '../store/slices/user-slice';
import {
  loadOffer,
  loadOffers,
  loadNearbyOffers,
  loadOfferComments,
  setLoadingOffer,
  setLoadingOffers,
  loadFavoriteOffers,
  updateFavoriteOffer,
  removeFavoriteOffer,
} from './slices/offers-data-slice';
import { setError } from './slices/app-error-slice';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  }
);

export const fetchOffersAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setLoadingOffers(true));
      const { data } = await api.get<ShortOfferType[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
    } catch (error) {
      dispatch(setError('Не удалось загрузить данные'));
    } finally {
      dispatch(setLoadingOffers(false));
    }
  }
);

export const fetchOfferAction = createAsyncThunk<void, string, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'data/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(loadOffer(null));
      dispatch(setLoadingOffer(true));
      const { data } = await api.get<FullOfferType>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOffer(data));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      } else {
        dispatch(setError('Не удалось загрузить оффер'));
      }
    } finally {
      dispatch(setLoadingOffer(false));
    }
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'data/fetchOffersNearby',
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(setLoadingOffer(true));
      const { data } = await api.get<ShortOfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
      dispatch(loadNearbyOffers(data));
    } catch (error) {
      dispatch(setError('Не удалось загрузить предложения неподалеку'));
    } finally {
      dispatch(setLoadingOffer(false));
    }
  }
);

export const fetchOfferCommentsAction = createAsyncThunk<void, string, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'data/fetchOfferComments',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadOfferComments(data));
    } catch (error) {
      dispatch(setError('Не удалось загрузить комментарии'));
    }
  }
);

export const addOfferCommentAction = createAsyncThunk<
  ReviewType[],
  CommentPostType,
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>(
  'data/addOfferComment',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      await api.post<CommentPostType>(`${APIRoute.Comments}/${id}`, { comment, rating });
      const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadOfferComments(data));
      return data;
    } catch (error) {
      dispatch(setError('Не удалось оставить комментарий'));
      setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
      throw error;
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setEmail(data.email));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      dispatch(setEmail(null));
    }
  }
);


export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'data/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api, getState }) => {
    try {
      const authStatus = getState().user.authorizationStatus;
      if (authStatus !== AuthorizationStatus.Auth) {
        dispatch(redirectToRoute(AppRoute.Login));
        return;
      }
      const { data } = await api.get<FavoriteOfferType[]>(APIRoute.Favorite);
      dispatch(loadFavoriteOffers(data));
    } catch (error) {
      dispatch(setError('Не удалось загрузить избранное'));
      setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });

      saveToken(data.token);

      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setEmail(data.email));
      dispatch(fetchOffersAction());
      dispatch(fetchFavoriteOffersAction());
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      dispatch(setError('Неверный логин или пароль'));
      setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
      throw error;
    }
  }
);

export const logoutAction = createAsyncThunk<
  void,
  { currentPath: AppRoute | string},
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>(
  'user/logout',
  async ({ currentPath }, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      dispatch(setEmail(null));
      dispatch(fetchOffersAction());


      if (currentPath === AppRoute.Favorites.toString()) {
        dispatch(redirectToRoute(AppRoute.Login));
      } else {
        dispatch(redirectToRoute(AppRoute.Main));
      }
    } catch (error) {
      dispatch(setError('Не удалось разлогиниться'));
      setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
      throw error;
    }
  }
);

export const toggleFavoriteOfferAction = createAsyncThunk<
  void,
  { offerId: string; status: boolean },
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>(
  'data/toggleFavoriteOffer',
  async ({ offerId, status }, { dispatch, extra: api, getState }) => {
    try {
      const authStatus = getState().user.authorizationStatus;
      if (authStatus !== AuthorizationStatus.Auth) {
        dispatch(redirectToRoute(AppRoute.Login));
        return;
      }

      const statusNum = status ? 1 : 0;

      const { data } = await api.post<FavoriteOfferType>(`${APIRoute.Favorite}/${offerId}/${statusNum}`);

      if (status) {
        dispatch(updateFavoriteOffer(data));
      } else {
        dispatch(removeFavoriteOffer(offerId));
      }
    } catch (error) {
      dispatch(setError('Не удалось обновить избранное'));
      setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
      throw error;
    }
  }
);
