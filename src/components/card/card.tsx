import { Link } from 'react-router-dom';
import { Offers } from '../../types/offers';

type CardProps = {
  offers: Offers;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function Card({offers}: CardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {offers.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={offers.previewImage}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offers.price}</b>
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
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{offers.title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(offers.type)}</p>
      </div>
    </article>
  );
}

export default Card;
