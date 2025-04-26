import { Offers } from '../../types/offers';
import Card from '../card/card';


type CardListProps = {
  offers: Offers[];
}

function CardList({offers}: CardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card offers={offer} key={offer.id}/>)}
    </div>
  );
}

export default CardList;
