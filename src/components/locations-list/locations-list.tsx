import { Link } from 'react-router-dom';
import { locationNames } from '../../const';
import { useAppDispatch } from '../../store';
import { setCity } from '../../store/actions';

type LocationsListProps = {
  activeCity: string | null;
};

function LocationsList({activeCity}: LocationsListProps) {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {locationNames.map((locationName) => (
        <li key={locationName}
          className="locations__item"
          onClick={() => dispatch(setCity(locationName))}
        >
          <Link className={`locations__item-link tabs__item ${locationName === activeCity ? 'tabs__item--active' : ''}`} to="#">
            <span>{locationName}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LocationsList;
