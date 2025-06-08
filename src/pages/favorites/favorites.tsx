import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoriteList from '../../components/favorite-list/favorite-list';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { fetchFavoriteOffersAction } from '../../store/api-actions';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);
  return (
    <div className="page">
      <Helmet>
        <title>Страница избранное</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
