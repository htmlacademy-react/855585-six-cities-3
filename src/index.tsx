import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers, favoriteOffers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        favoriteOffers={favoriteOffers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
