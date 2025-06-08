import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchFavoriteOffersAction } from '../../store/api-actions';

type AuthorizedUserNavProps = {
  onClick: (evt: React.MouseEvent<HTMLAnchorElement>) => void;
};

function AuthorizedUserNav({ onClick }: AuthorizedUserNavProps): JSX.Element {
  const dispatch = useAppDispatch();

  const userEmail = useAppSelector((state) => state.user.email);
  const favoriteOffers = useAppSelector((state) => state.offersData.favoriteOffers);
  const authStatus = useAppSelector((state) => state.user.authorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [authStatus, dispatch]);

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{userEmail}</span>
          <span className="header__favorite-count">{favoriteOffers.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="/" onClick={onClick}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default AuthorizedUserNav;
