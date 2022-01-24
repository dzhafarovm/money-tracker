// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';

// import transOperations from 'redux/transaction/transactions-operation';
// import transactionsSelectors from 'redux/transaction/transactions-selectors';
import style from './Summary.module.css';

const Summary = () => {
  // const dispatch = useDispatch();
  // const { pathname } = useLocation();
  // const type = pathname === '/expenses' ? 'costs' : 'income';

  // useEffect(() => {
  //   dispatch(transOperations.getAll(type));
  // }, [dispatch, type]);

  // const { result } = useSelector(transactionsSelectors.getAll);

  // let arrTransaction = [];

  // if (result) {
  //   arrTransaction = result;
  // }

  return (
    <div>
      <table className={style.table}>
        <tbody>
          <tr key="sum">
            <th className={style.tableHeader} colSpan="2">
              CВОДКА
            </th>
          </tr>

          <tr>
            <th className={style.month}>Январь</th>
            <th className={style.sum}>10000</th>
          </tr>
          <tr>
            <th className={style.month}>Декабрь</th>
            <th className={style.sum}>16000</th>
          </tr>
          <tr>
            <th className={style.month}>Ноябрь</th>
            <th className={style.sum}>6000</th>
          </tr>
          <tr>
            <th className={style.month}>Октябрь</th>
            <th className={style.sum}>0</th>
          </tr>
          <tr>
            <th className={style.month}>Сентябрь</th>
            <th className={style.sum}>0</th>
          </tr>
          <tr>
            <th className={style.month}>Август</th>
            <th className={style.sum}>0</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
