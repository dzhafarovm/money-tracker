import { useState } from 'react';
//import { useDispatch } from 'react-redux';
import React from 'react';
import s from './BalanceWithBtn.module.css';
import GreetingNotification from 'components/Balance/GreetingNotification';

function BalanceWithBtn() {
  const [balance, setBalance] = useState('00.00');
  // const dispatch = useDispatch();
  const [isNotifyShow, setIsNotifyShow] = useState(true);

  const handleChange = e => {
    const data = e.currentTarget.value;
    switch (e.currentTarget.name) {
      case 'balance':
        setBalance(data);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { balance };
    console.log(data);
    localStorage.setItem('balance', data);
    //setBalance();
    // dispatch(console.log(data));
  };

  const onNotifyClick = condition => setIsNotifyShow(condition);

  return (
    <>
      <form
        className={s.wrapper}
        onSubmit={handleSubmit}
        //action="http://foo.com"
        method="get"
      >
        <h2 className={s.balanceTitle} htmlFor="balance">
          Баланс:
        </h2>
        <div className={s.inputAndBtn}>
          <div className="position_for_UAH">
            <input
              name="balance"
              onChange={handleChange}
              type="text"
              className={s.inputBalance}
              pattern="\d+(\.\d{2})?"
              title="Баланс должен состоять цифр"
              required
              value={balance}
            />
            <span className={s.span}>UAH</span>
          </div>
          <button className={s.submitBtn} type="submit">
            ПОДТВЕРДИТЬ
          </button>
        </div>
      </form>
      {isNotifyShow && balance === '00.00' && (
        <GreetingNotification onNotifyClick={onNotifyClick} />
      )}
    </>
  );
}
export default BalanceWithBtn;
