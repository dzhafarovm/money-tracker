import { useState } from 'react';

import FinanceReport from './FinanceReport';
import sprite from 'components/images/sprite.svg';

import style from './Report.module.css';

const ShowPage = ({ dataArr, act, setAct, activeIndex, setActiveIndex }) => {
  const [page, setPage] = useState(true);

  const btnClick = () => {
    setAct(true);
    setActiveIndex(0);
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

      <FinanceReport
        dataArr={dataArr}
        act={act}
        setAct={setAct}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        page={namePage}
      />
    </>
  );
};

export default ShowPage;
