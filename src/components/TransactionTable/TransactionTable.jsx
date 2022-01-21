// import React from 'react';
// import { useTable } from 'react-table';

import style from './TransactionTable.module.css';

const TransactionTable = () => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th>Дата</th>
          <th>Описание</th>
          <th>Категория</th>
          <th colSpan="2">Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>05.01.2022</td>
          <td>Метро</td>
          <td>Трарспорт</td>
          <td>-30.00 грн.</td>
          <td>удалить</td>
        </tr>

        <tr>
          <td>05.01.2022</td>
          <td>Бананы</td>
          <td>Продукты</td>
          <td>-50.00 грн.</td>
          <td>удалить</td>
        </tr>

         <tr>
          <td>05.01.2022</td>
          <td>Бананы</td>
          <td>Продукты</td>
          <td>-50.00 грн.</td>
          <td>удалить</td>
        </tr>

         <tr>
          <td>05.01.2022</td>
          <td>Бананы</td>
          <td>Продукты</td>
          <td>-50.00 грн.</td>
          <td>удалить</td>
        </tr>

         <tr>
          <td>05.01.2022</td>
          <td>Бананы</td>
          <td>Продукты</td>
          <td>-50.00 грн.</td>
          <td>удалить</td>
        </tr>
      </tbody>
    </table>
  )
};

export default TransactionTable;