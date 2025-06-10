import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShortOfferType } from '../../types/offer';
import { AppRoute, AuthorizationStatus } from '../../const';
import { capitalize, stylizesRating } from '../../utils';
import { useToggleFavorite } from '../../hooks/useToggleFavorite';
import { useAppSelector } from '../../store';

type CardProps = {
  offer: ShortOfferType;
  block: string;
  onActiveCardChange?: () => void;
  onActiveCardClear?: () => void;
};

function CardComponent({
  offer,
  block,
  onActiveCardChange,
  onActiveCardClear,
}: CardProps): JSX.Element {
  const { id, isPremium, previewImage, price, title, type, rating } = offer;
  const toggleFavorite = useToggleFavorite();
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const navigate = useNavigate();

  const currentIsFavorite = useAppSelector((state) =>
    state.offersData.offers.find((item) => item.id === id)?.isFavorite
  );

  const handleMouseEnter = () => {
    onActiveCardChange?.();
  };

  const handleMouseLeave = () => {
    onActiveCardClear?.();
  };

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isAuthorized) {
      navigate(AppRoute.Login);
      return;
    }

    toggleFavorite(id, Boolean(currentIsFavorite));
  };

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              currentIsFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
            onClick={handleFavoriteClick}
            title={!isAuthorized ? 'Требуется авторизация' : ''}
            aria-label="Toggle bookmark"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19" aria-hidden="true">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: stylizesRating(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

const Card = React.memo(CardComponent);

export default Card;
