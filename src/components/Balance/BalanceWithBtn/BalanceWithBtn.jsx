import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import GreetingNotification from 'components/Balance/GreetingNotification';
import balanceOperations from 'redux/balance/balance-operations';
import balanceSelectors from 'redux/balance/balance-selectors';

import style from './BalanceWithBtn.module.css';

const BalanceWithBtn = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    dispatch(balanceOperations.getCurrentUserBalance());
  }, []);

  const currentBalance = useSelector(balanceSelectors.getCurrentUserBalance);

  useEffect(() => {
    if (currentBalance !== null) {
      setBalance(currentBalance);
    } else setBalance(null);
  }, [currentBalance]);

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.balance.value.trim() === '') {
      return;
    }

    dispatch(balanceOperations.updateBalance(e.target.balance.value));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={pathname === '/report' ? style.wrapperReport : style.wrapper}
      >
        <span className={style.balanceTitle}>Баланс:</span>
        <div
          className={
            pathname === '/report' ? style.inputAndBtnReport : style.inputAndBtn
          }
        >
          <label htmlFor={balance}>
            <input
              className={
                pathname === '/report'
                  ? style.inputBalanceReport
                  : style.inputBalance
              }
              type="text"
              name="balance"
              placeholder={balance === null ? '00.00' : balance}
              // value={balance === null ? '00.00' : balance}
              id={balance}
              pattern="^\d*(\.\d{0,2})?$"
              title="Введите положительное число"
              required
            />
          </label>

          <span
            className={pathname === '/report' ? style.spanReport : style.span}
          >
            UAH
          </span>

          <button
            type="submit"
            className={
              pathname === '/report' ? style.submitBtnReport : style.submitBtn
            }
          >
            Подтвердить
          </button>
        </div>
      </form>
      {balance === null ? <GreetingNotification /> : null}
    </div>
  );
};

export default BalanceWithBtn;
