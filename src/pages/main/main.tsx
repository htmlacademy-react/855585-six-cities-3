import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { ShortOfferType } from '../../types/offer';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import LocationsList from '../../components/locations-list/locations-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { useAppDispatch, useAppSelector } from '../../store';
import { sortingValues } from '../../const';
import { selectActiveCity, selectOffers } from '../../store/selectors';
import { getFilteredOffers } from './utils';
import MainEmpty from '../../components/main-empty/main-empty';
import { setCity } from '../../store/slices/current-city-slice';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get('city');

  useEffect(() => {
    if (cityParam) {
      dispatch(setCity(cityParam));
    }
  }, [cityParam, dispatch]);

  const [activeOffer, setActiveOffer] = useState<ShortOfferType | null>(null);
  const [sortValue, setSortValue] = useState<string>(sortingValues.popular);

  const offers = useAppSelector(selectOffers);
  const activeCity = useAppSelector(selectActiveCity);

  const filteredOffers = useMemo(() =>
    getFilteredOffers(
      offers.filter((offer) => offer.city.name === activeCity),
      sortValue
    ), [offers, activeCity, sortValue]);

  const handleActiveCardChange = useCallback(
    (offer: ShortOfferType | null) => {
      setActiveOffer(offer);
    },
    []
  );

  const placeText = `${filteredOffers.length} place${filteredOffers.length === 1 ? '' : 's'} to stay in ${activeCity}`;

  if (filteredOffers.length === 0) {
    return (
      <div className="page page--gray page--main">
        <Header />
        <MainEmpty city={activeCity} />
      </div>
    );
  }

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
                {placeText}
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
