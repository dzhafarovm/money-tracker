import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.logo}>Kapusta</span>
    </header>
  );
};

export default Header;
