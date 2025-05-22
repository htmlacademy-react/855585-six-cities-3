import { Link } from 'react-router-dom';
import { cities } from '../../const';
import { useAppDispatch } from '../../store';
import { setCity } from '../../store/actions';

type LocationsListProps = {
  activeCity: string | null;
};

function LocationsList({activeCity}: LocationsListProps) {
  const dispatch = useAppDispatch();

  function handleCityClick(city: string) {
    dispatch(setCity(city));
  }

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city}
          className="locations__item"
          onClick={() => handleCityClick(city)}
        >
          <Link className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`} to="#">
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LocationsList;
