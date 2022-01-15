import s from './GreetingNotification.module.css';

const GreetingNotification = ({ onNotifyClick }) => {
  return (
    <div className={s.container} onClick={() => onNotifyClick(false)}>
      <div className={s.square} />
      <div className={s.notification}>
        <h2 className={s.title}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </h2>
        <p className={s.text}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
      </div>
    </div>
  );
};
export default GreetingNotification;
