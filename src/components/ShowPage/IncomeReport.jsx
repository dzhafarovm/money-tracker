import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import transOperations from 'redux/transaction/transactions-operation';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import currentDateSelectors from 'redux/currentDate/currentDate-selectors';

import style from './ExpensesReport.module.css';
import sprite from 'components/images/sprite.svg';

const IncomeReport = () => {
  const dispatch = useDispatch();

  const currentDate = useSelector(currentDateSelectors.getcurrentDate);
  const month = currentDate.month;
  const year = currentDate.year;

  const date = {
    month,
    year,
  };

  useEffect(() => {
    dispatch(transOperations.getByMonth(date));
  }, [dispatch]);

  const { data } = useSelector(transactionsSelectors.getByMonth);

  let incomeArr = [];

  if (data) {
    incomeArr = data.incomeTransactions;
  }

  let salarySum = null;
  let otherSum = null;

  if (incomeArr !== []) {
    const salary = incomeArr.filter(el => el.category === 'salary');
    if (salary !== []) {
      salarySum = salary.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const other = incomeArr.filter(el => el.category === 'other income');
    if (other !== []) {
      otherSum = other.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }
  }

  const income = [
    { value: 'salary', label: 'ЗП', svg: '#cocktail', sum: salarySum },
    {
      value: 'other income',
      label: 'Доп. доход',
      svg: '#cocktail',
      sum: otherSum,
    },
  ];

  const btnClick = () => {};

  return (
    <div className={style.section}>
      <div className={style.box}>
        <ul className={style.list}>
          {income.map(obj => (
            <li key={obj.value} className={style.listItem}>
              <button
                type="button"
                className={style.category}
                onClick={btnClick}
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
