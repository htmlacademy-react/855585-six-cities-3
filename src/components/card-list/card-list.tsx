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

  const handleActiveCardClear = useCallback(() => {
    onActiveCardChange(null);
  }, [onActiveCardChange]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          block="cities"
          onActiveCardChange={handleActiveCardChange(offer)}
          onActiveCardClear={handleActiveCardClear}
        />
      ))}
    </div>
  );
};

const CardList = React.memo(CardListComponent);

export default CardList;
