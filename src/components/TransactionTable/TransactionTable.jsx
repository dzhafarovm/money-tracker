import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Modal from 'components/Modal';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import transOperations from 'redux/transaction/transactions-operation';
import Constants from 'Constants/';
import sprite from 'components/images/sprite.svg';

import style from './TransactionTable.module.css';

const TransactionTable = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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

  const onDeleteTransaction = id => {
    setSelectedId(id);
    showModal();
  };

  const showModal = () => setModal(prev => !prev);

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
        {modal && (
          <Modal message="Вы уверены?" onClose={showModal} id={selectedId} />
        )}
      </ul>
    </div>
  );
};

export default TransactionTable;
