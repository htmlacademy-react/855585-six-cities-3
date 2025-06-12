import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, cities } from '../../const';
import { useAppDispatch } from '../../store';
import { setCity } from '../../store/slices/current-city-slice';

type LocationsListProps = {
  activeCity: string | null;
};

const LocationsList = memo(({ activeCity }: LocationsListProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleCityClick = useCallback((city: string) => {
    dispatch(setCity(city));
  }, [dispatch]);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          key={city}
          className="locations__item"
          onClick={() => handleCityClick(city)}
        >
          <Link
            className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
            to={AppRoute.Main}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
});

LocationsList.displayName = 'LocationsList';

export default LocationsList;
