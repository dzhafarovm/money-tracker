// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useWindowWidth } from '@react-hook/window-size';
import GoToReport from './GoToReport';
// import useWindowWidth from './helpers/useWindowWidth';
import s from './Balance.module.css';
import BalanceWithBtn from 'components/Balance/BalanceWithBtn/BalanceWithBtn';

const Balance = () => {
  // const balance = 0;
  // const location = useLocation();
  // const [isLoading, setIsLoading] = useState(false);
  // const width = useWindowWidth();
  // const [value, setValue] = useState(balance.toFixed(2));

  // const handleChange = e => setValue(Number(e.target.value));

  return (
    <div className={s.balanceWrapper}>
      <GoToReport />
      <BalanceWithBtn />
    </div>
  );
};

export default Balance;

///{location.pathname === routes.reportPage &&
///width > 319 &&
///width < 1280 ?
