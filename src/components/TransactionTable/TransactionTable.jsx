import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import sprite from 'components/images/sprite.svg';

import transactionsSelectors from 'redux/transaction/transactions-selectors';
import transOperations from 'redux/transaction/transactions-operation';
import balanceOperations from 'redux/balance/balance-operations';

import style from './TransactionTable.module.css';

// const months = [
//   { id: '1', month: 'January' },
//   { id: '2', month: 'February' },
//   { id: '3', month: 'March' },
//   { id: '4', month: 'April' },
//   { id: '5', month: 'May' },
//   { id: '6', month: 'June' },
//   { id: '7', month: 'July' },
//   { id: '8', month: 'August' },
//   { id: '9', month: 'September' },
//   { id: '10', month: 'October' },
//   { id: '11', month: 'November' },
//   { id: '12', month: 'December' },
// ];

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

  const onDeleteTransaction = _id => {
    dispatch(transOperations.deleteTransaction(_id));
    dispatch(balanceOperations.getCurrentUserBalance());
  };

  return (
    <>
      <div className={style.columnTitles}>
        <h3 className={style.dataColumn}>ДАТА</h3>
        <h3 className={style.descriptionColumn}>Описание</h3>
        <h3 className={style.categoryColumn}>Категория</h3>
        <h3 className={style.sumColumn}>Сумма</h3>
        <div className={style.deleteColumn}></div>
      </div>

      <ul className={style.transactionList}>
        {result &&
          result.map(transaction => (
            <li className={style.transactionData} key={transaction._id}>
              <h3 className={style.dataColumn}>
                {transaction.day}.{transaction.month}.{transaction.year}
              </h3>
              <h3 className={style.descriptionColumn}>
                {transaction.description}
              </h3>
              <h3 className={style.categoryColumn}>{transaction.category}</h3>
              <h3 className={style.sumColumn}>{transaction.sum}</h3>
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
    </>
  );
};

export default TransactionTable;
