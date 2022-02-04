import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import currentDateOperations from 'redux/currentDate/currentDate-operations';
import Constants from 'Constants/';
import sprite from 'components/images/sprite.svg';

import style from './NavigationReport.module.css';

const NavigationReport = ({ setAct, setActiveIndex }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nowDate = new Date();
  const [month, setMonth] = useState(nowDate.getMonth() + 1);
  const [year, setYear] = useState(nowDate.getFullYear());

  const handlePrevMonth = () => {
    setAct(true);
    setActiveIndex(0);

    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };
  const handleNextMonth = () => {
    setAct(true);
    setActiveIndex(0);

    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
  };

  const getMonth = Constants.arrMonthName.filter(el => el.id === String(month));

  let newMonth = [];

  newMonth = Constants.monthArr.filter(el => el.id === getMonth[0].id);

  const time = {
    month: newMonth[0].month,
    year: `${year}`,
  };

  dispatch(currentDateOperations.getDate(time));

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

      <span>
        <p className={style.currentDate}>Текущий период:</p>
        <span className={style.slider}>
          <button
            type="button"
            className={style.arrowDate}
            onClick={handlePrevMonth}
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
            {getMonth[0].name.toLocaleUpperCase()}
            <span className={style.year}>{year}</span>
          </p>

          <button
            type="button"
            className={style.arrowDate}
            onClick={handleNextMonth}
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
