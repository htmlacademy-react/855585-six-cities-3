import Header from '../../components/header/header';
import { TOffer } from '../../types/toffer';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import { useState } from 'react';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppSelector } from '../../store';
import SortingOptions from '../../components/ sorting-options/ sorting-options';
import { sortingValues} from '../../const';
import { selectActiveCity,selectOffers } from '../../store/selectors';
import { getFilteredOffers } from './utils';

function Main(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffer | null>(null);
  const handleActiveCardChange = (offer: TOffer | null) => setActiveOffer(offer);
  const [sortValue, setSortValue] = useState<string>(sortingValues.popular);


  const activeCity = useAppSelector(selectActiveCity);
  const filteredOffers = getFilteredOffers(useAppSelector(selectOffers)
    .filter((offer) => offer.city.name === activeCity), sortValue);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList activeCity={activeCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
              <SortingOptions sortValue={sortValue} onSortClick={setSortValue}/>
              <div className="cities__places-list places__list tabs__content">
                <CardList
                  offers={filteredOffers}
                  onActiveCardChange={handleActiveCardChange}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map" offers={filteredOffers} activeOffer={activeOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
