import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import transactionsSelectors from 'redux/transaction/transactions-selectors';
import transOperations from 'redux/transaction/transactions-operation';
import balanceOperations from 'redux/balance/balance-operations';
import sprite from 'components/images/sprite.svg';

import style from './TransactionTable.module.css';

const TransactionTable = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/expenses') {
      dispatch(transOperations.getAll('costs'));
    } else {
      dispatch(transOperations.getAll('income'));
    }
  }, [pathname]);

  const result = useSelector(transactionsSelectors.getAll);

  const resultWithDate = result.map(el => ({
    _id: el._id,
    category: el.category,
    day: el.day,
    month: el.month,
    year: el.year,
    date: Date.parse(new Date(`${el.year}`, `${el.month}` - 1, `${el.day}`)),
    description: el.description,
    sum: el.sum,
  }));

  const sortArr = resultWithDate.sort((a, b) => a.date - b.date).reverse();

  const onDeleteTransaction = _id => {
    dispatch(transOperations.deleteTransaction(_id));
    dispatch(balanceOperations.getCurrentUserBalance());
  };

  return (
    <div className={style.tableWrapper}>
      <div className={style.columnTitles}>
        <p className={style.dataColumn}>Дата</p>
        <p className={style.descriptionColumn}>Описание</p>
        <p className={style.categoryColumn}>Категория</p>
        <p className={style.sumColumnTitle}>Сумма</p>
        <div className={style.deleteColumn}></div>
      </div>

      <ul className={style.transactionList}>
        {sortArr &&
          sortArr.map(transaction => (
            <li className={style.transactionData} key={transaction._id}>
              <p className={style.dataColumn}>
                {transaction.day}.{transaction.month}.{transaction.year}
              </p>
              <p className={style.descriptionColumn}>
                {transaction.description}
              </p>
              <p className={style.categoryColumn}>{transaction.category}</p>
              <p
                className={
                  pathname === '/expenses'
                    ? `${style.sumColumn}`
                    : `${style.sumColumn} ${style.green}`
                }
              >
                {pathname === '/expenses' ? '-' : null}
                {transaction.sum} грн.
              </p>
              <div
                className={style.deleteIcon}
                onClick={() => onDeleteTransaction(transaction._id)}
              >
                <svg className={style.deleteleIcon} width="18" height="18">
                  <use href={`${sprite}#delete`}></use>
                </svg>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TransactionTable;
