import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoriteList from '../../components/favorite-list/favorite-list';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { selectFavoriteOffers } from '../../store/selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(selectFavoriteOffers);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const isFavoritesLoaded = Array.isArray(favoriteOffers);
  const hasFavorites = favoriteOffers.length > 0;

  return (
    <div className={`page ${!hasFavorites ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>Страница избранное</title>
      </Helmet>
      <Header />
      <main className={`page__main page__main--favorites ${!hasFavorites ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {isFavoritesLoaded && hasFavorites && (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteList />
            </section>
          )}
          {isFavoritesLoaded && !hasFavorites && <FavoritesEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
