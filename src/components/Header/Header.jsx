import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from './UserMenu';

import style from './Header.module.css';
import sprite from 'components/images/sprite.svg';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={style.header}>
      <div className={style.navConteiner}>
        <NavLink to="/">
          <svg width="90" height="31">
            <use href={`${sprite}#logo`}></use>
          </svg>
        </NavLink>

        {isLoggedIn ? <UserMenu /> : null}
      </div>
    </header>
  );
};
export default Header;
