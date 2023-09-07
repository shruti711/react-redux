import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authAction } from '../Store/Auth';
import CartButton from './Card/CardButton';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAutenticated);
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(authAction.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <CartButton />
          </li>
          <li>
            <button onClick={LogoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Header;
