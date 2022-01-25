import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import style from './NavigationReport.module.css';
import sprite from 'components/images/sprite.svg';

import currentDateOperations from 'redux/currentDate/currentDate-operations';

const arrMonthName = [
  { id: '1', name: 'январь', engName: 'January' },
  { id: '2', name: 'февраль', engName: 'February' },
  { id: '3', name: 'март', engName: 'March' },
  { id: '4', name: 'апрель', engName: 'April' },
  { id: '5', name: 'май', engName: 'May' },
  { id: '6', name: 'июнь', engName: 'June' },
  { id: '7', name: 'июль', engName: 'July' },
  { id: '8', name: 'август', engName: 'August' },
  { id: '9', name: 'сентябрь', engName: 'September' },
  { id: '10', name: 'октябрь', engName: 'October' },
  { id: '11', name: 'ноябрь', engName: 'November' },
  { id: '12', name: 'декабрь', engName: 'December' },
];

const NavigationReport = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nowDate = new Date();
  const [month, setMonth] = useState(nowDate.getMonth() + 1);
  const [year, setYear] = useState(nowDate.getFullYear());

  const handlePrevMonth = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };
  const handleNextMonth = () => {
    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
  };

  const getMonth = arrMonthName.filter(el => el.id === String(month));

  const monthArr = [
    { id: '1', month: '01' },
    { id: '2', month: '02' },
    { id: '3', month: '03' },
    { id: '4', month: '04' },
    { id: '5', month: '05' },
    { id: '6', month: '06' },
    { id: '7', month: '07' },
    { id: '8', month: '08' },
    { id: '9', month: '09' },
    { id: '10', month: '10' },
    { id: '11', month: '11' },
    { id: '12', month: '12' },
  ];

  let newMonth = [];

  newMonth = monthArr.filter(el => el.id === getMonth[0].id);

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

      {/* <p className={style.title}>Баланс:</p> */}

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
