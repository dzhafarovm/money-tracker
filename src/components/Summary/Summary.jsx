import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import transOperations from 'redux/transaction/transactions-operation';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import style from './Summary.module.css';

const Summary = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const type = pathname === '/expenses' ? 'costs' : 'income';

  useEffect(() => {
    dispatch(transOperations.getAll(type));
  }, [dispatch, type]);

  const result = useSelector(transactionsSelectors.getAll);

  let arrTransaction = [];

  if (result.length > 0) {
    arrTransaction = result;
  }

  let janArr = arrTransaction.filter(el => el.month === '01');
  let febArr = arrTransaction.filter(el => el.month === '02');
  let marArr = arrTransaction.filter(el => el.month === '03');
  let aprArr = arrTransaction.filter(el => el.month === '04');
  let mayArr = arrTransaction.filter(el => el.month === '05');
  let junArr = arrTransaction.filter(el => el.month === '06');
  let julArr = arrTransaction.filter(el => el.month === '07');
  let augArr = arrTransaction.filter(el => el.month === '08');
  let sepArr = arrTransaction.filter(el => el.month === '09');
  let octArr = arrTransaction.filter(el => el.month === '10');
  let novArr = arrTransaction.filter(el => el.month === '11');
  let decArr = arrTransaction.filter(el => el.month === '12');

  const sumAll = [
    { month: 'Декабрь', sum: 0 },
    { month: 'Ноябрь', sum: 0 },
    { month: 'Октябрь', sum: 0 },
    { month: 'Сентябрь', sum: 0 },
    { month: 'Август', sum: 0 },
    { month: 'Июль', sum: 0 },
    { month: 'Июнь', sum: 0 },
    { month: 'Май', sum: 0 },
    { month: 'Апрель', sum: 0 },
    { month: 'Март', sum: 0 },
    { month: 'Февраль', sum: 0 },
    { month: 'Январь', sum: 0 },
  ];

  if (janArr !== []) {
    sumAll[11].sum = janArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (febArr !== []) {
    sumAll[10].sum = febArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (marArr !== []) {
    sumAll[9].sum = marArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (aprArr !== []) {
    sumAll[8].sum = aprArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (mayArr !== []) {
    sumAll[7].sum = mayArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (junArr !== []) {
    sumAll[6].sum = junArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (julArr !== []) {
    sumAll[5].sum = julArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (augArr !== []) {
    sumAll[4].sum = augArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (sepArr !== []) {
    sumAll[3].sum = sepArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (octArr !== []) {
    sumAll[2].sum = octArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (novArr !== []) {
    sumAll[1].sum = novArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  if (decArr !== []) {
    sumAll[0].sum = decArr.reduce((acc, trans) => {
      return acc + trans.sum;
    }, 0);
  }

  const selectSum = sumAll.filter(el => el.sum !== 0);

  const searchSixMonth = selectSum.slice(0, 6);

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
              <th className={style.month}>{el.month}</th>
              <th className={style.sum}>{el.sum}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
