import Header from '../../components/header/header';
import { TOffer} from '../../types/toffer';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import { useState } from 'react';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppSelector } from '../../store';

function Main(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffer | null>(null);
  const handleActiveCardChange = (offer: TOffer | null) => setActiveOffer(offer);

  const activeCity = useAppSelector((state) => state.city);
  const filteredOffers = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === activeCity);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList activeCity={activeCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardList
                  offers={filteredOffers}
                  onActiveCardChange={handleActiveCardChange}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map" offers={filteredOffers} activeOffer={activeOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
