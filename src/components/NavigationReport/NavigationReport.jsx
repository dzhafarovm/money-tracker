import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import style from './NavigationReport.module.css';
import sprite from 'components/images/sprite.svg';

const arrMonthName = [
  { id: '1', name: 'январь' },
  { id: '2', name: 'февраль' },
  { id: '3', name: 'март' },
  { id: '4', name: 'апрель' },
  { id: '5', name: 'май' },
  { id: '6', name: 'июнь' },
  { id: '7', name: 'июль' },
  { id: '8', name: 'август' },
  { id: '9', name: 'сентябрь' },
  { id: '10', name: 'октябрь' },
  { id: '11', name: 'ноябрь' },
  { id: '12', name: 'декабрь' },
];

const NavigationReport = () => {
  const navigate = useNavigate();

  const nowDate = new Date();
  const [mounth, setMounth] = useState(nowDate.getMonth() + 1);
  const [year, setYear] = useState(nowDate.getFullYear());

  const handlePrevMounth = () => {
    if (mounth <= 1) {
      setMounth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMounth(prev => (prev -= 1));
    }
  };
  const handleNextMounth = () => {
    if (mounth < 12) {
      setMounth(prev => (prev += 1));
    } else {
      setMounth(1);
      setYear(prev => (prev += 1));
    }
  };

  const getMounth = arrMonthName.filter(el => el.id === String(mounth));

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
          <button
            type="button"
            className={style.arrowDate}
            onClick={handlePrevMounth}
          >
            <svg
              width="12"
              height="18"
              viewBox="0 0 24 24"
              className={style.iconDate}
            >
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </button>

          <p className={style.date}>
            {getMounth[0].name.toLocaleUpperCase()}
            <span className={style.year}>{year}</span>
          </p>

          <button
            type="button"
            className={style.arrowDate}
            onClick={handleNextMounth}
          >
            <svg
              width="12"
              height="18"
              viewBox="0 0 24 24"
              className={style.iconDate}
            >
              <use href={`${sprite}#arrow-right`}></use>
            </svg>
          </button>
        </span>
      </span>
    </nav>
  );
};

export default NavigationReport;
