import { FavoriteOfferType } from '../../types/toffer';
import { cities } from '../../const';
import FavoriteItem from '../favorite-item/favorite-item';
import { useAppSelector } from '../../store';
import { selectFavoriteOffers } from '../../store/selectors';


type OffersByCity = {
  [city: string]: FavoriteOfferType[];
};

function FavoriteList(): JSX.Element {
  // Группируем favoriteOffers по городам из списка cities
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const favoritesOffersByCity = cities.reduce((acc, city) => {
    const cityOffers = favoriteOffers.filter((offer) => offer.city.name === city);
    if (cityOffers.length > 0) {
      acc[city] = cityOffers;
    }
    return acc;
  }, {} as OffersByCity);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesOffersByCity).map(([city, cityOffers]) => (
        <FavoriteItem key={city} city={city} favoriteOffers={cityOffers} />
      ))}
    </ul>
  );
}

export default FavoriteList;
