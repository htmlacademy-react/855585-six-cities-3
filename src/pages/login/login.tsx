import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { FormEvent, useRef, useMemo } from 'react';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch } from '../../store';
import { loginAction } from '../../store/api-actions';
import { cities } from '../../const';
import { setError } from '../../store/slices/app-error-slice';

function Login(): JSX.Element {
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();

  const onFormSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formRef.current !== null) {
      const formData = new FormData(formRef.current);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      const hasLetter = /[a-zA-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);

      if (!hasLetter || !hasNumber) {
        dispatch(setError('Пароль должен содержать хотя бы одну букву и одну цифру.'));
        setTimeout(() => dispatch(setError(null)), 3000);
        return;
      }

      if (typeof email === 'string' && typeof password === 'string') {
        onFormSubmit({ email, password });
      }
    }
  };

  const randomCity = useMemo(() => {
    const index = Math.floor(Math.random() * cities.length);
    return cities[index];
  }, []);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Страница авторизации</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`/?city=${randomCity}`}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
