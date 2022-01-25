import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import toast from 'react-hot-toast';

import style from './MobileTransactionTable.module.css';

import transactionsSelectors from 'redux/transaction/transactions-selectors';
import transOperations from 'redux/transaction/transactions-operation';
import MobileTransactionItem from 'components/MobileTransactionTable/MobileTransactionItem';
// import sprite from 'components/images/sprite.svg';

const MobileTransactionTable = () => {
  const dispatch = useDispatch();
  const pathname = useLocation();
  const [type, setType] = useState(null);

  useEffect(() => {
    if (pathname === '/expenses') {
      setType('costs');
    } else {
      setType('income');
    }
  }, [pathname]);

  useEffect(() => {
    dispatch(transOperations.getAll(type));
  }, [dispatch, type]);

  const { result } = useSelector(transactionsSelectors.getAll);

  const onDeleteTransaction = _id => {
    dispatch(transOperations.deleteTransaction(_id));
    // toast('Транзакция удалена');
  };

  console.log('transactions', result);

  return (
    <ul className={style.transactionList}>
      {result &&
        result.map(t => (
          <li className={style.row} key={t._id}>
            <MobileTransactionItem
              day={t.day}
              month={t.month}
              year={t.year}
              description={t.description}
              category={t.category}
              sum={t.sum}
              onClick={() => onDeleteTransaction(t._id)}
            />
          </li>
        ))}
    </ul>
  );
};

export default MobileTransactionTable;
