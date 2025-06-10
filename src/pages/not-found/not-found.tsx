import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import './not-found.css';

function NotFound(): JSX.Element {
  return(
    <div className="page page--gray page--not-found">
      <Helmet>
        <title>Страница не найдена 404</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--not-found">
        <div className="page__not-found-container container">
          <section className="not-found">
            <h1 className="not-found__title">404 Not Found</h1>
            <Link className="not-found__link not-found__link--active" to={AppRoute.Main}>На главную</Link>
            <div className="not-found__image"/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
