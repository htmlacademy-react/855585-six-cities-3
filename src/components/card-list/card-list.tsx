import { memo, useCallback } from 'react';
import { ShortOfferType } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: ShortOfferType[];
  onActiveCardChange: (offer: ShortOfferType | null) => void;
};

const CardList = memo(({ offers, onActiveCardChange }: CardListProps): JSX.Element => {
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
});

CardList.displayName = 'CardList';

export default CardList;
