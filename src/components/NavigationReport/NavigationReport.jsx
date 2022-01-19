import { useNavigate } from 'react-router-dom';
import style from './NavigationReport.module.css';
import sprite from 'components/images/sprite.svg';

const NavigationReport = () => {
  const navigate = useNavigate();

  return (
    <nav className={style.nav}>
      <button
        onClick={() => navigate('/')}
        className={style.button}
        type="button"
      >
        <svg width="18" height="12" viewBox="0 0 24 24" className={style.icon}>
          <use href={`${sprite}#arrow`}></use>
        </svg>
        <p className={style.title}>Вернуться на главную</p>
      </button>

      {/* <p className={style.title}>Баланс:</p> */}

      <span>
        <p className={style.currentDate}>Текущий период:</p>
        <span className={style.slider}>
          <svg
            width="12"
            height="18"
            viewBox="0 0 24 24"
            className={style.iconDate}
          >
            <use href={`${sprite}#arrow-left`}></use>
          </svg>
          <p className={style.date}>НОЯБРЬ 2019</p>
          <svg
            width="12"
            height="18"
            viewBox="0 0 24 24"
            className={style.iconDate}
          >
            <use href={`${sprite}#arrow-right`}></use>
          </svg>
        </span>
      </span>
    </nav>
  );
};

export default NavigationReport;
