import React from 'react';
import Logo from '../logo/logo';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../store';
import SignInLink from '../sign-in-link/sign-in-link';
import AuthorizedUserNav from '../authorized-user-nav/authorized-user-nav';

function HeaderComponent(): JSX.Element {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  const handleLogout = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <AuthorizedUserNav onClick={handleLogout} />
              ) : (
                <SignInLink />
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Оборачиваем в React.memo для избежания лишних ререндеров
const Header = React.memo(HeaderComponent);

export default Header;
