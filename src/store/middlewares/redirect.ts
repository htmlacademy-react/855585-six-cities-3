// Импортируем тип экшена с payload из RTK
import { PayloadAction } from '@reduxjs/toolkit';

//browserHistory позволяет управлять историей переходов вручную, вне компонентов React Router
import browserHistory from '../../browser-history';

// Импортируем тип Middleware из Redux
import { Middleware } from 'redux';

// Импорт редьюсера, чтобы получить тип состояния всего стора
import rootReducer from '../root-reducer';

// Получаем тип состояния стора из редьюсера
type Reducer = ReturnType<typeof rootReducer>;

// Создаём кастомный middleware для перехвата экшенов редиректа
export const redirect: Middleware<unknown, Reducer> =
  () => // получаем store API (не используется здесь, поэтому пусто)
    (next) => //получаем next — функция для передачи экшена дальше по цепочке
      (action: PayloadAction<string>) => { //сам экшен, ожидаем строку в payload

        // Если экшен имеет тип 'app/redirectToRoute' — выполнить редирект
        if (action.type === 'app/redirectToRoute') {
          // Делаем переход по маршруту из payload
          browserHistory.push(action.payload);
        }

        // Передаём экшен дальше по цепочке
        return next(action);
      };
