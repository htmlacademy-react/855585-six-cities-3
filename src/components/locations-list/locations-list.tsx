import { Link } from 'react-router-dom';
import { cities } from '../../const';
import { useAppDispatch } from '../../store';
import { setCity } from '../../store/slices/current-city-slice';
import React, { useCallback } from 'react';

type LocationsListProps = {
  activeCity: string | null;
};

function LocationsListComponent({ activeCity }: LocationsListProps) {
  const dispatch = useAppDispatch();

  const handleCityClick = useCallback((city: string) => {
    dispatch(setCity(city));
  }, [dispatch]);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city}
          className="locations__item"
          onClick={() => handleCityClick(city)}
        >
          <Link
            className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
            to="#"
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const LocationsList = React.memo(LocationsListComponent);

export default LocationsList;
