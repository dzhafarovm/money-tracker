import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import transOperations from 'redux/transaction/transactions-operation';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import Constants from 'Constants/';

import style from './Summary.module.css';

const Summary = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const type = pathname === '/expenses' ? 'costs' : 'income';

  useEffect(() => {
    dispatch(transOperations.getAll(type));
  }, [dispatch, type]);

  const getAllTransaction = useSelector(transactionsSelectors.getAll);

  const addParseDateToTansaction = getAllTransaction.map(el => ({
    _id: el._id,
    category: el.category,
    day: el.day,
    month: el.month,
    year: el.year,
    date: Date.parse(new Date(`${el.year}`, `${el.month}` - 1, `${el.day}`)),
    description: el.description,
    sum: el.sum,
  }));

  const sortArrBydate = addParseDateToTansaction
    .sort((a, b) => a.date - b.date)
    .reverse();

  let calcAmountTransaction = [];

  if (sortArrBydate !== []) {
    let massiv = [];
    calcAmountTransaction = sortArrBydate.reduce((acc, el, idx, arr) => {
      const newFilter = arr.filter(
        trans => (el.month === trans.month) & (el.year === trans.year),
      );

      const sum = newFilter.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);

      massiv.push({ month: el.month, year: el.year, sum });
      return massiv;
    }, 0);
  }

  let transactionArrWithMonthName = [];

  if (calcAmountTransaction !== 0) {
    transactionArrWithMonthName = calcAmountTransaction.map(el => {
      const arr = Constants.monthsArray.filter(mon => el.month === mon.month);
      return { month: arr[0].month, year: el.year, sum: el.sum };
    });
  }

  const uniqLastMonthAndYear = Object.values(
    transactionArrWithMonthName.reduce((a, b) => {
      if (!a[b.month] & !a[b.year]) a[b.month] = b;
      return a;
    }, {}),
  );

  const searchSixMonth = uniqLastMonthAndYear.slice(0, 6);

  return (
    <div>
      <table className={style.table}>
        <tbody>
          <tr key="sum">
            <th className={style.tableHeader} colSpan="2">
              CВОДКА
            </th>
          </tr>

          {searchSixMonth.map(el => (
            <tr key={el.month}>
              <th className={style.month}>{`${el.year} ${el.month}`}</th>
              <th className={style.sum}>{el.sum}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
