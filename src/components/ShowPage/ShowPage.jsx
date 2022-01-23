import { useState } from 'react';
import ExpensesReport from './ExpensesReport';
import IncomeReport from './IncomeReport';

import style from './ExpensesReport.module.css';
import sprite from 'components/images/sprite.svg';

const ShowPage = () => {
  const [page, setPage] = useState(true);

  const btnClick = () => {
    setPage(!page);
  };

  const namePage = page ? 'РАСХОДЫ' : 'ДОХОДЫ';

  return (
    <>
      <div className={style.slider}>
        <button type="button" className={style.arrowDate} onClick={btnClick}>
          <svg
            width="12"
            height="18"
            viewBox="0 0 24 24"
            className={style.iconDate}
          >
            <use href={`${sprite}#arrow-left`}></use>
          </svg>
        </button>
        <p className={style.date}>{namePage}</p>

        <button type="button" className={style.arrowDate} onClick={btnClick}>
          <svg
            width="12"
            height="18"
            viewBox="0 0 24 24"
            className={style.iconDate}
          >
            <use href={`${sprite}#arrow-right`}></use>
          </svg>
        </button>
      </div>
      {page ? <ExpensesReport /> : <IncomeReport />}
    </>
  );
};

export default ShowPage;
