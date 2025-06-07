import React, { useCallback } from 'react';
import { ShortOfferType } from '../../types/toffer';
import Card from '../card/card';

type CardListProps = {
  offers: ShortOfferType[];
  onActiveCardChange: (offer: ShortOfferType | null) => void;
};

const CardListComponent = ({ offers, onActiveCardChange }: CardListProps) => {

  const handleActiveCardChange = useCallback(
    (offer: ShortOfferType) => () => {
      onActiveCardChange(offer);
    },
    [onActiveCardChange]
  );

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          block="cities"
          onActiveCardChange={handleActiveCardChange(offer)}
        />
      ))}
    </div>
  );
};

// React.memo предотвращает его перерендер, если props (offers, onActiveCardChange) не изменились
const CardList = React.memo(CardListComponent);

export default CardList;
