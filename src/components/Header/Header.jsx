import UserMenu from './UserMenu';

import style from './Header.module.css';
import sprite from 'components/images/sprite.svg';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.navConteiner}>
        <svg width="90" height="31">
          <use href={`${sprite}#logo`}></use>
        </svg>

        <UserMenu />
       
      </div>
    </header>
  );
};
export default Header;
