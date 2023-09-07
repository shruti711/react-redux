import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authAction } from '../Store/Auth';

const Auth = () => {
  const dispatch = useDispatch();
  // const isAuth = useSelector(state => state.auth.isAutenticated);

  const loginHandler = (event) => {
    console.log('event', event);
    event.preventDefault();
    dispatch(authAction.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
