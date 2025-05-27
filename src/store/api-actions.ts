import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, OffersState} from '../types/store';
import {TOffer} from '../types/toffer';
import {loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, redirectToRoute} from './actions';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute} from '../const';
import { AuthData } from '../types/auth-data';
import {UserData} from '../types/user-data';
import { store } from './';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);

//Действие которое отправляет GET-запрос, создаем новый AsyncThunk
export const fetchOffersAction = createAsyncThunk<
  void,//Тип возвращаемого значения (ничего не возвращает — void)
  undefined,//Тип аргумента, который принимает (в этом случае — ничего)
  {
    dispatch: AppDispatch;//Тип функции dispatch, которую можно использовать внутри thunk
    state: OffersState; //Типизация состояния (если нужно внутри получить state)
    extra: AxiosInstance;//Прокинутый экземпляр axios, используемый для HTTP-запросов
  }
>(
  'data/fetchOffers',//Имя экшена (префикс в типах 'data/fetchOffers', 'fulfilled', 'rejected')

  //Сам асинхронный thunk
  async (_arg, { dispatch, extra: api }) => {//_arg = undefined + извлекаем из объекта эл-ты для
    //асинхронной операции
    dispatch(setOffersDataLoadingStatus(true));
    //Делаем GET-запрос к API, чтобы получить список предложений (offers)
    const { data } = await api.get<TOffer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    //После успешного получения данных отправляем их в store с помощью экшена
    dispatch(loadOffers(data));
  }
);

//асинхронный экшен проверяет, авторизован ли пользователь, отправляя GET-запрос к эндпоинту /login.
// В зависимости от ответа, он диспатчит один из двух экшенов: Auth или NoAuth.
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: OffersState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);// Пытаемся получить данные по маршруту /login
      dispatch(requireAuthorization(AuthorizationStatus.Auth));//Cтатус "авторизован"
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));//В случае ошибки — статус "не авторизован"
    }
  },
);

// Создаём асинхронный thunk-экшен для логина пользователя
export const loginAction = createAsyncThunk<
  void,
  AuthData,//Тип входных данных: логин и пароль
  {
    dispatch: AppDispatch;
    state: OffersState;
    extra: AxiosInstance;
  }
>(
  'user/login',


  async ({login: email, password}, {dispatch, extra: api}) => {
    //Отправляем POST-запрос на эндпоинт логина с email и паролем
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });

    //Сохраняем полученный токен в localStorage (для последующих запросов)
    saveToken(token);

    //Обновляем статус авторизации в хранилище на "Auth"
    dispatch(requireAuthorization(AuthorizationStatus.Auth));

    dispatch(redirectToRoute(AppRoute.Main));
  },
);

// Создаём асинхронный thunk-действие для выхода пользователя из системы
export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: OffersState;
    extra: AxiosInstance;
  }
>(
  'user/logout',// Уникальный идентификатор действия (используется для генерации типов и логов)
  async (_arg, {dispatch, extra: api}) => {
    // Отправляем DELETE-запрос на сервер, чтобы завершить сессию пользователя
    await api.delete(APIRoute.Logout);

    // Удаляем токен из localStorage, чтобы "разлогинить" пользователя локально
    dropToken();

    // Обновляем статус авторизации в Redux-состоянии на "не авторизован"
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

