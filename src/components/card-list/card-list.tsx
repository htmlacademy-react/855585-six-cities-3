import { Nullable } from 'vitest';
import { Offers } from '../../types/offers';
import Card from '../card/card';
import { useState } from 'react';

type CardListProps = {
  offers: Offers[];
}

function CardList({offers}: CardListProps) {
  const [, setActiveOffer] = useState<Nullable<Offers>>(null);

  const handleHover = (offer?: Offers) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          offers={offer}
          key={offer.id}
          handleHover={handleHover}
        />
      ))}
    </div>
  );
}

export default CardList;
