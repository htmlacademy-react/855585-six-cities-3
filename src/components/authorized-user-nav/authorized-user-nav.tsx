import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type AuthorizedUserNavProps = {
  onClick: (evt: React.MouseEvent<HTMLAnchorElement>) => void;
  userEmail: string | null;
}

function AuthorizedUserNav({onClick, userEmail}: AuthorizedUserNavProps): JSX.Element {
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{userEmail}</span>
          <span className="header__favorite-count">3</span>
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
