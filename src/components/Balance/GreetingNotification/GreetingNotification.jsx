import s from './GreetingNotification.module.css';
import { useLocation } from 'react-router-dom';
const GreetingNotification = ({ onNotifyClick }) => {
  const { pathname } = useLocation();
  return (
    <div className={s.container} onClick={() => onNotifyClick(false)}>
      <div
        className={
          pathname === '/report' ? s.notificationReport : s.notification
        }
      >
        <h2 className={s.title}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </h2>
        <p className={s.text}>
          {'Ты не можешь тратить деньги пока их у тебя нет :)'}
        </p>
      </div>
    </div>
  );
};
export default GreetingNotification;
