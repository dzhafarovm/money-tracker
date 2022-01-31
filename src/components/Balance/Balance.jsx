import { useLocation } from 'react-router-dom';

import GoToReport from './GoToReport';
import BalanceWithBtn from 'components/Balance/BalanceWithBtn';
import routes from '../../routes/routes';

import s from './Balance.module.css';

const Balance = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div
        className={
          pathname === '/report' ? s.balanceWrapperReport : s.balanceWrapper
        }
      >
        {pathname === routes.report ? null : <GoToReport />}
        <BalanceWithBtn />
      </div>
    </div>
  );
};

export default Balance;
