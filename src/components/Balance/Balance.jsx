import GoToReport from './GoToReport';
import { useLocation } from 'react-router-dom';
import s from './Balance.module.css';
import BalanceWithBtn from 'components/Balance/BalanceWithBtn';
import routes from '../../routes/routes';
const Balance = () => {
  const { pathname } = useLocation();

  return (
    <div className={s.balanceWrapper}>
      {pathname === routes.report ? null : <GoToReport />}
      <BalanceWithBtn />
    </div>
  );
};

export default Balance;
