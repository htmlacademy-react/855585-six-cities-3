import { ShortOfferType } from '../../types/toffer';
import Card from '../card/card';

type CardListProps = {
  offers: ShortOfferType[];
  onActiveCardChange: (offer: ShortOfferType | null) => void;
}

function CardList({offers, onActiveCardChange}: CardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          block="cities"
          onActiveCardChange={() => onActiveCardChange(offer)}
        />
      ))}
    </div>
  );
}

export default CardList;
