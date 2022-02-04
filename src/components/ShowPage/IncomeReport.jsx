import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import transOperations from 'redux/transaction/transactions-operation';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import currentDateSelectors from 'redux/currentDate/currentDate-selectors';
import Constants from 'Constants/';
import sprite from 'components/images/sprite.svg';

import style from './ExpensesReport.module.css';

const IncomeReport = ({
  dataArr,
  act,
  setAct,
  activeIndex,
  setActiveIndex,
}) => {
  const dispatch = useDispatch();

  const currentDate = useSelector(currentDateSelectors.getcurrentDate);
  const month = currentDate.month;
  const year = currentDate.year;

  useEffect(() => {
    const date = {
      month,
      year,
    };

    dispatch(transOperations.getByMonth(date));
  }, [dispatch, month, year]);

  const { data } = useSelector(transactionsSelectors.getByMonth);

  let incomeArr = [];

  if (data) {
    incomeArr = data.incomeTransactions;
  }

  let revenueArr = [];

  if (incomeArr !== []) {
    Constants.categoryName.forEach((el, idx) => {
      const selectedCategory = incomeArr.filter(
        cat => el.value === cat.category,
      );

      if (selectedCategory !== []) {
        const categorySum = selectedCategory.reduce((acc, trans) => {
          return acc + trans.sum;
        }, 0);

        if (categorySum !== 0)
          revenueArr.push({
            value: Constants.categoryName[idx].value,
            label: Constants.categoryName[idx].label,
            svg: Constants.categoryName[idx].svg,
            sum: categorySum,
          });
      }
    });
  }

  if (act) {
    if (revenueArr.length > 0) {
      dataArr(revenueArr[0].value, 'income');
    }
  }

  const btnClick = (e, index) => {
    setActiveIndex(index);
    setAct(false);
    const category = e.currentTarget.id;
    dataArr(category, 'income');
  };

  return (
    <div className={style.section}>
      <div className={style.box}>
        <ul className={style.list}>
          {revenueArr.length > 0 &&
            revenueArr.map((obj, index) => (
              <li key={obj.value} className={style.listItem}>
                <button
                  type="button"
                  className={
                    activeIndex === index
                      ? `${style.category} ${style.active}`
                      : `${style.category}`
                  }
                  onClick={e => btnClick(e, index)}
                  id={obj.value}
                >
                  <p className={style.title}>{obj.sum}</p>
                  <svg width="56" height="56" className={style.iconBox}>
                    <use href={`${sprite}${obj.svg}`}></use>
                  </svg>
                  <p className={style.title}>{obj.label}</p>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default IncomeReport;
