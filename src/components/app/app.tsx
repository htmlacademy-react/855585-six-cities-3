import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';
// import {TOffer} from '../../types/toffer';
import {TReview} from '../../types/treview';
import { useAppSelector } from '../../store';

type AppProps = {
  // favoriteOffers: TOffer[];
  reviews: TReview[];
}

function App({reviews}: AppProps): JSX.Element {//favoriteOffers,
  const offers = useAppSelector((state) => state.offers);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <Favorites/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Offer authorizationStatus={AuthorizationStatus.Auth} offers={offers} reviews={reviews}/>}
          />
          <Route
            path='*'
            element={<NotFound/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
