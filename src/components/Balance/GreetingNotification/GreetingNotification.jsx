import { useLocation } from 'react-router-dom';

import style from './GreetingNotification.module.css';

const GreetingNotification = ({ onNotifyClick }) => {
  const { pathname } = useLocation();

  return (
    <div className={style.container} onClick={() => onNotifyClick(false)}>
      <div
        className={
          pathname === '/report' ? style.notificationReport : style.notification
        }
      >
        <h2 className={style.title}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </h2>
        <p className={style.text}>
          {'Ты не можешь тратить деньги, пока их у тебя нет :)'}
        </p>
      </div>
    </div>
  );
};

export default GreetingNotification;
