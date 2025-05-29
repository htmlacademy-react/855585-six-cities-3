import { Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { FormEvent, useRef } from 'react';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch } from '../../store';
import { loginAction } from '../../store/api-actions';
import { useAppSelector } from '../../store';
import { getError } from '../../store/selectors';
import './login.css';


function Login(): JSX.Element {

  const formRef = useRef<HTMLFormElement | null>(null);

  const dispatch = useAppDispatch();

  const onFormSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const error = useAppSelector(getError); // Redux error

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formRef.current !== null) {
      //FormData принимает форму (formRef.current) как аргумент и находит все элементы с атрибутами name и value.
      const formData = new FormData(formRef.current);
      //получает значение поля с name="email"
      const login = formData.get('email') as string;
      //значение поля с name="password"
      const password = formData.get('password') as string;
      if (typeof login === 'string' && typeof password === 'string') {
        onFormSubmit({ login, password });
      }
    }
  };

  return(
    <div className="page page--gray page--login">
      <Helmet>
        <title>Страница авторизации</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form"
              action="#"
              method="post"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
            {error && <p className="login__error error">{error}</p>}
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
