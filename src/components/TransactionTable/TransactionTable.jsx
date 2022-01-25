import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import sprite from 'components/images/sprite.svg';
// import toast from 'react-hot-toast';

import transactionsSelectors from 'redux/transaction/transactions-selectors';
import transOperations from 'redux/transaction/transactions-operation';
import TransactionTableItem from 'components/TransactionTable';
import style from './TransactionTable.module.css';
// import sprite from 'components/images/sprite.svg';

const TransactionTable = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // const [type, setType] = useState('costs');

  useEffect(() => {
    if (pathname === '/expenses') {
      // setType('costs');
      dispatch(transOperations.getAll('costs'))
    } else {
      // setType('income');
      dispatch(transOperations.getAll('income'))
    }
    console.log('pathname', pathname);

  }, [pathname]);

  // useEffect(() => {
  //   dispatch(transOperations.getAll(type));
  // }, [dispatch, type]);

  const result = useSelector(transactionsSelectors.getAll);

  const onDeleteTransaction = _id => {
    dispatch(transOperations.deleteTransaction(_id));
    // toast('Транзакция удалена');
  };
  
  console.log('trans result', result);

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
              <h3 className={style.descriptionColumn}>{transaction.description}</h3>
              <h3 className={style.categoryColumn}>{transaction.category}</h3>
              <h3 className={style.sumColumn}>{transaction.sum}</h3>
              <div className={style.deleteIcon} onClick={() => onDeleteTransaction(transaction._id)}>
                <svg className={style.deleteleIcon} width="18" height="18">
                  <use href={`${sprite}#delete`}></use>
                </svg>
              </div>

              {/* <TransactionTableItem
                day={transaction.day}
                month={transaction.month}
                year={transaction.year}
                description={transaction.description}
                category={transaction.category}
                sum={transaction.sum}
                onClick={() => onDeleteTransaction(transaction._id)}
              /> */}
            </li>
          ))}
      </ul>
    </>
  );
};

export default TransactionTable;