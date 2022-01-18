import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from './UserMenu';

import style from './Header.module.css';
import sprite from 'components/images/sprite.svg';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={style.header}>
      <div className={style.navConteiner}>
        <svg width="90" height="31">
          <use href={`${sprite}#logo`}></use>
        </svg>
        {isLoggedIn ? <UserMenu /> : null}
      </div>
    </header>
  );
};
export default Header;
