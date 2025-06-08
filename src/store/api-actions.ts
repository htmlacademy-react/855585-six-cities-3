import axios, { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../types/store';
import { ShortOfferType, FullOfferType, FavoriteOfferType } from '../types/toffer';
import { ReviewType } from '../types/treview';
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

// Очистка ошибки с таймаутом
export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  }
);

// Загрузка всех офферов
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

// Загрузка одного оффера по id
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

// Загрузка офферов неподалеку
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

// Загрузка комментариев к офферу
export const fetchOfferCommentsAction = createAsyncThunk<void, string, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'data/fetchOfferComments',
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(setLoadingOffer(true));
      const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadOfferComments(data));
    } catch (error) {
      dispatch(setError('Не удалось загрузить комментарии'));
    } finally {
      dispatch(setLoadingOffer(false));
    }
  }
);

// Добавление комментария
export const addOfferCommentAction = createAsyncThunk<void, CommentPostType, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'data/addOfferComment',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      await api.post<CommentPostType>(`${APIRoute.Comments}/${id}`, { comment, rating });
      const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadOfferComments(data));
    } catch (error) {
      dispatch(setError('Не удалось оставить комментарий'));
    }
  }
);

// Проверка авторизации пользователя
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

// Логин пользователя
export const loginAction = createAsyncThunk<void, AuthData, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });

      saveToken(data.token);

      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setEmail(data.email));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      dispatch(setError('Неверный логин или пароль.'));
      setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
      throw error;
    }
  }
);

// Выход пользователя
export const logoutAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    } catch (error) {
      dispatch(setError('Не удалось разлогиниться'));
      setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
      throw error;
    }
  }
);

// Загрузка избранных офферов
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

// Переключение избранного оффера с обновлением стейта
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

      // Отправляем запрос на сервер для обновления избранного статуса
      const { data } = await api.post<FavoriteOfferType>(`${APIRoute.Favorite}/${offerId}/${status ? 1 : 0}`);

      // Обновляем состояние сразу в Redux
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
