import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import toast from 'react-hot-toast';

import style from './MobileTransactionTable.module.css';
import balanceOperations from 'redux/balance/balance-operations';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import transOperations from 'redux/transaction/transactions-operation';
import MobileTransactionItem from 'components/MobileTransactionTable/MobileTransactionItem';
// import sprite from 'components/images/sprite.svg';

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

  const onDeleteTransaction = _id => {
    dispatch(transOperations.deleteTransaction(_id));
    dispatch(balanceOperations.getCurrentUserBalance());
  };

  console.log('transactions', result);

  return (
    <ul className={style.transactionList}>
      {result &&
        result.map(transaction => (
          <li className={style.row} key={transaction._id}>
            <MobileTransactionItem
              day={transaction.day}
              month={transaction.month}
              year={transaction.year}
              description={transaction.description}
              category={transaction.category}
              sum={transaction.sum}
              onClick={() => onDeleteTransaction(transaction._id)}
            />
          </li>
        ))}
    </ul>
  );
};

export default MobileTransactionTable;
