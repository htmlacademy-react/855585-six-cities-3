import React from 'react';
import { Link } from 'react-router-dom';
import { ShortOfferType } from '../../types/toffer';
import { AppRoute } from '../../const';
import { capitalize } from '../../utils';

type CardProps = {
  offer: ShortOfferType;
  block: string;
  onActiveCardChange?: (offer: ShortOfferType | null) => void;
};

function CardComponent({ offer, block, onActiveCardChange }: CardProps): JSX.Element {
  const { id, isPremium, previewImage, price, title, type } = offer;

  const handleCardMouseEnter = () => {
    onActiveCardChange?.(offer);
  };

  const handleCardMouseLeave = () => {
    onActiveCardChange?.(null);
  };

  return (
    <Link to={`${AppRoute.Offer}/${id}`}>
      <article
        className={`${block}__card place-card`}
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
      >
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className={`${block}__image-wrapper place-card__image-wrapper`}>
          <img className="place-card__image" src={previewImage} />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{title}</h2>
          <p className="place-card__type">{capitalize(type)}</p>
        </div>
      </article>
    </Link>
  );
}

// Оборачиваем компонент в React.memo, чтобы избежать лишнего рендера, будет происходить только при изменении props
const Card = React.memo(CardComponent);

export default Card;
