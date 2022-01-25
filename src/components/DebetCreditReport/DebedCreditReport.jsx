import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import transOperations from 'redux/transaction/transactions-operation';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import currentDateSelectors from 'redux/currentDate/currentDate-selectors';

import style from './DebetCreditReport.module.css';

const DebedCreditReport = () => {
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

  let costsArr = [];
  let incomeArr = [];

  if (data) {
    costsArr = data.costsTransactions;
  }

  const totalCosts = costsArr.reduce((acc, trans) => {
    return acc + trans.sum;
  }, 0);

  if (data) {
    incomeArr = data.incomeTransactions;
  }

  const totalIncome = incomeArr.reduce((acc, trans) => {
    return acc + trans.sum;
  }, 0);

  return (
    <div className={style.section}>
      <div className={style.boxSpending}>
        <p className={style.spending}>Расходы:</p>
        <span className={style.minus}>- {totalCosts} грн.</span>
      </div>
      <div className={style.boxIncom}>
        <p className={style.income}>Доходы:</p>
        <span className={style.plus}>+ {totalIncome} грн.</span>
      </div>
    </div>
  );
};

export default DebedCreditReport;
