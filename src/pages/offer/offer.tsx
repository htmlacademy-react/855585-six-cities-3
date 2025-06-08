import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Reviews from '../../components/reviews/reviews';
import { AuthorizationStatus } from '../../const';
import Map from '../../components/map/map';
import { capitalize, stylizesRating } from '../../utils';
import Card from '../../components/card/card';
import { useAppDispatch, useAppSelector } from '../../store';
import { useToggleFavorite } from '../../hooks/useToggleFavorite';
import {
  fetchOfferAction,
  fetchNearbyOffersAction,
  fetchOfferCommentsAction,
} from '../../store/api-actions';
import { useEffect, useMemo } from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';

type OfferProps = {
  authorizationStatus: AuthorizationStatus;
}

function Offer({ authorizationStatus }: OfferProps): JSX.Element | null {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector((state) => state.offersData.offer);
  const nearbyOffers = useAppSelector((state) => state.offersData.nearbyOffers);
  const currentOfferComments = useAppSelector((state) => state.offersData.offerComments);
  const isOfferLoading = useAppSelector((state) => state.offersData.isLoadingOffer);

  useEffect(() => {
    if (id && String(currentOffer?.id) !== id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchOfferCommentsAction(id));
    }
  }, [id, currentOffer?.id, dispatch]);

  const ratingWidth = useMemo(
    () => stylizesRating(currentOffer?.rating),
    [currentOffer?.rating]
  );

  const capitalizedType = currentOffer?.type ? capitalize(currentOffer.type) : '';
  const images = currentOffer?.images ?? [];
  const goods = currentOffer?.goods ?? [];

  const nearbyOffersCards = useMemo(
    () => nearbyOffers.map((offer) => (
      <Card key={offer.id} offer={offer} block="near-places" />
    )),
    [nearbyOffers]
  );

  const toggleFavorite = useToggleFavorite(true);

  const handleFavoriteClick = () => {
    if (!currentOffer) {
      return;
    }
    toggleFavorite(currentOffer.id, currentOffer.isFavorite);
  };

  if (isOfferLoading) {
    return <LoadingScreen />;
  }

  if (!currentOffer) {
    return null;
  }

  return (
    <div className="page">
      <Helmet>
        <title>Страница предложения</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{currentOffer.title}</h1>
                <button
                  className={`offer__bookmark-button button ${currentOffer.isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={handleFavoriteClick}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    {currentOffer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: ratingWidth }}></span>
                  <span className="visually-hidden">{currentOffer.rating}</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{capitalizedType}</li>
                <li className="offer__feature offer__feature--bedrooms">{currentOffer.bedrooms} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {currentOffer.maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="offer__inside-item">{good}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={currentOffer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{currentOffer.host.name}</span>
                  <span className="offer__user-status">{currentOffer.host.isPro ? 'Pro' : ''}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">{currentOfferComments.length}</span>
                </h2>
                <Reviews isAuth={authorizationStatus === AuthorizationStatus.Auth} />
              </section>
            </div>
          </div>
          <Map className="offer__map" offers={nearbyOffers} activeOffer={currentOffer} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">{nearbyOffersCards}</div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
