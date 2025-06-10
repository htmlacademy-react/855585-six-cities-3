import { ShortOfferType } from '../../types/offer';
import { sortingValues} from '../../const';

export const getFilteredOffers = (offers: ShortOfferType[], activeFilter: string) => {
  switch(activeFilter) {
    case sortingValues.lowToHigh:
      return offers.slice().sort((a, b) => a.price - b.price);
    case sortingValues.highToLow:
      return offers.slice().sort((a, b) => b.price - a.price);
    case sortingValues.topRated:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};
