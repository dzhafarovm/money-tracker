import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './BalanceWithBtn.module.css';
import GreetingNotification from 'components/Balance/GreetingNotification';

const BalanceWithBtn = () => {
  // const dispatch = useDispatch();

  const startValue = '00.00';
  const balance = 0;
  const [value, setValue] = useState(balance.toFixed(2));
  const [isLoading, setIsLoading] = useState(false);
  const [isNotifyShow, setIsNotifyShow] = useState(true);

  const handleChange = e => setValue(Number(e.target.value));

  const onNotifyClick = condition => setIsNotifyShow(condition);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      // setIsLoading(true);
      
      startValue = '';
      setValue(Number(value).toFixed(2));
      // TODO dispatch(setCurrentBalance(value));
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    },
    ['', value],
  );
  useEffect(() => {
    setValue(() => balance.toFixed(2));
  }, [balance]);
  return (
    <>
      <form className={s.wrapper} onSubmit={handleSubmit}>
        <label className={s.balanceTitle} htmlFor="balance">
          Баланс:
        </label>
        <div className={s.btnWrapper}>
          <button className={s.valueBtn}>{startValue} UAH</button>
          <button className={s.submitBtn} type="submit">
            подтвердить
          </button>
          {/* <input
            autoComplete="off"
            className={styles.inputBalance}
            type="number"
            value={isLoading ? null : value}
            onChange={handleChange}
            onFocus={() => setValue('')}
            onBlur={() => setTimeout(() => setValue(balance.toFixed(2)), delay)}
            id="balance"
            required
          />

          <span className={styles.span}>UAH</span> */}
        </div>
      </form>
      {isNotifyShow && startValue === '00.00' && (
        <GreetingNotification onNotifyClick={onNotifyClick} />
      )}
    </>
  );
};
export default BalanceWithBtn;
