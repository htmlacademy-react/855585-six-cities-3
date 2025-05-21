import { Link } from 'react-router-dom';
import { locationNames } from '../../const';

type LocationsListProps = {
  activeCity: string | null;
  onCityClick: (city: string) => void;
};

function LocationsList({activeCity, onCityClick}: LocationsListProps) {
  return (
    <ul className="locations__list tabs__list">
      {locationNames.map((locationName) => (
        <li key={locationName}
          className="locations__item"
          onClick={() => onCityClick(locationName)}
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
