import { TOffer} from '../../types/toffer';
import Card from '../card/card';

type CardListProps = {
  offers: TOffer[];
  onActiveCardChange: (offer: TOffer | null) => void;
}

function CardList({offers, onActiveCardChange}: CardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onActiveCardChange={() => onActiveCardChange(offer)}
        />
      ))}
    </div>
  );
}

export default CardList;
