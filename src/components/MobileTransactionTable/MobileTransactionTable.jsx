import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import balanceOperations from 'redux/balance/balance-operations';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import transOperations from 'redux/transaction/transactions-operation';
import MobileTransactionItem from 'components/MobileTransactionTable/MobileTransactionItem';
import Constants from 'Constants/';
import style from './MobileTransactionTable.module.css';

const MobileTransactionTable = () => {
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

  const resultWithDate = result.map(el => {
    const arr = Constants.categoryName.filter(e => el.category === e.value);
    return {
      _id: el._id,
      category: arr[0].label,
      day: el.day,
      month: el.month,
      year: el.year,
      date: Date.parse(new Date(`${el.year}`, `${el.month}` - 1, `${el.day}`)),
      description: el.description,
      sum: el.sum,
    };
  });

  const sortArr = resultWithDate.sort((a, b) => a.date - b.date).reverse();

  const onDeleteTransaction = _id => {
    dispatch(transOperations.deleteTransaction(_id));
    dispatch(balanceOperations.getCurrentUserBalance());
  };

  return (
    <ul className={style.transactionList}>
      {sortArr &&
        sortArr.map(transaction => (
          <li className={style.row} key={transaction._id}>
            <MobileTransactionItem
              day={transaction.day}
              month={transaction.month}
              year={transaction.year}
              description={transaction.description}
              category={transaction.category}
              sum={transaction.sum}
              onClick={() => onDeleteTransaction(transaction._id)}
              type={pathname}
            />
          </li>
        ))}
    </ul>
  );
};

export default MobileTransactionTable;
