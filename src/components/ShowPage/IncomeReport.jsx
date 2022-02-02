import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import transOperations from 'redux/transaction/transactions-operation';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import currentDateSelectors from 'redux/currentDate/currentDate-selectors';

import style from './ExpensesReport.module.css';
import sprite from 'components/images/sprite.svg';

const IncomeReport = ({ dataArr }) => {
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
    { value: 'salary', label: 'ЗП', svg: '#main-salary', sum: salarySum },
    {
      value: 'other income',
      label: 'Доп. доход',
      svg: '#add-salary',
      sum: otherSum,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const [act, setAct] = useState(true);

  if (act) {
    const firstSelectedObj = income.find(el => el.sum !== 0);
    if (firstSelectedObj) {
      dataArr(firstSelectedObj.value, 'income');
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
          {income
            .filter(el => el.sum !== 0)
            .map((obj, index) => (
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
