// import React from 'react';
// import { useTable } from 'react-table';

import style from './TransactionTable.module.css';
import sprite from 'components/images/sprite.svg';

const TransactionTableItem = ({day, month, year, description, category, sum, onClick }) => {
    return (
        <>
        <h3 className={style.dataColumn}>{day}.{month}.{year}</h3>
            <h3 className={style.descriptionColumn}>{description}</h3>
            <h3 className={style.categoryColumn}>{category}</h3>
            <h3 className={style.sumColumn}>{sum}</h3>
            <div className={style.deleteIcon}
                onClick={onClick}>
                <svg className={style.deleteleIcon} width="18" height="18">
                    <use href={`${sprite}#delete`}></use>
                </svg>
            </div>
        </>
            
        
    )
};

export default TransactionTableItem;
