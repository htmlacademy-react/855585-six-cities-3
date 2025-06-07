import { useState, useMemo, useCallback } from 'react';
import Header from '../../components/header/header';
import { ShortOfferType } from '../../types/toffer';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import LocationsList from '../../components/locations-list/locations-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { useAppSelector } from '../../store';
import { sortingValues } from '../../const';
import { selectActiveCity, selectOffers } from '../../store/selectors';
import { getFilteredOffers } from './utils';

function Main(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<ShortOfferType | null>(null);
  const [sortValue, setSortValue] = useState<string>(sortingValues.popular);

  const offers = useAppSelector(selectOffers);
  const activeCity = useAppSelector(selectActiveCity);

  // useMemo мемоизирует отфильтрованные и отсортированные предложения
  // пересчет будет происходить только если изменятся offers, activeCity или sortValue
  const filteredOffers = useMemo(() => getFilteredOffers(
    offers.filter((offer) => offer.city.name === activeCity),
    sortValue
  ), [offers, activeCity, sortValue]);

  // useCallback мемоизирует функцию handleActiveCardChange,
  // чтобы она не пересоздавалась при каждом рендере
  const handleActiveCardChange = useCallback(
    (offer: ShortOfferType | null) => {
      setActiveOffer(offer);
    },
    [] // зависимостей нет — функция не зависит от внешнего состояния
  );

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
              <b className="places__found">
                {filteredOffers.length} places to stay in {activeCity}
              </b>
              <SortingOptions sortValue={sortValue} onSortClick={setSortValue} />
              <CardList
                offers={filteredOffers}
                onActiveCardChange={handleActiveCardChange}
              />
            </section>
            <div className="cities__right-section">
              <Map
                className="cities__map"
                offers={filteredOffers}
                activeOffer={activeOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
