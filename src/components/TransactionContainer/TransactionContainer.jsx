import React from 'react';

import style from './TransactionContainer.module.css';

const TransactionContainer = ({ children }) => {
   return (
      <div className={style.section}>{children}</div>   
  );
}

export default TransactionContainer;