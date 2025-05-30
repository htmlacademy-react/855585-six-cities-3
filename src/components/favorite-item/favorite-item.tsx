import { Link } from 'react-router-dom';
import { ShortOfferType } from '../../types/toffer';
import FavoriteCard from '../favorite-card/favorite-card';
import { cities } from '../../const';

type FavoriteItemProps = {
  city: typeof cities[number];
  favoriteOffers: ShortOfferType[];
}

function FavoriteItem({city, favoriteOffers}: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => (
          <FavoriteCard key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
}

export default FavoriteItem;
