import { Helmet } from 'react-helmet-async';
// import { TOffer } from '../../types/toffer';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoriteList from '../../components/favorite-list/favorite-list';


// type FavoriteProps = {
//   favoriteOffers: TOffer[];
// }

function Favorites(): JSX.Element {
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
