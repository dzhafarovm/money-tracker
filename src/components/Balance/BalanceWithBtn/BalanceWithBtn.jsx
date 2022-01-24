import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import s from './BalanceWithBtn.module.css';
import GreetingNotification from 'components/Balance/GreetingNotification';
import balanceOperations from 'redux/balance/balance-operations';

const initialValues = {
  balance: '00.00',
};

const BalanceWithBtn = () => {
  const dispatch = useDispatch();
  const [isNotifyShow, setIsNotifyShow] = useState(true);

  // const handleChange = e => {
  //   const data = e.currentTarget.value;
  //   switch (e.currentTarget.name) {
  //     case 'balance':
  //       setBalance(data);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = ({ balance }) => {
    if (balance.trim() === '00.00') {
      return;
    }

    dispatch(balanceOperations.getCurrentUserBalance({ balance }));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formik => {
        const { values, handleChange } = formik;
        const onNotifyClick = condition => setIsNotifyShow(condition);
        return (
          <>
            <Form className={s.wrapper}>
              <h2 className={s.balanceTitle} htmlFor="balance">
                Баланс:
              </h2>
              <div className={s.inputAndBtn}>
                <div className="position_for_UAH">
                  <Field
                    name="balance"
                    onChange={handleChange}
                    type="text"
                    className={s.inputBalance}
                    pattern="\d+(\.\d{2})?"
                    title="Баланс должен состоять цифр"
                    required
                    value={values.balance}
                  />
                  <span className={s.span}>UAH</span>
                </div>
                <button className={s.submitBtn} type="submit">
                  ПОДТВЕРДИТЬ
                </button>
              </div>
            </Form>

            {isNotifyShow && initialValues !== '00.00' && (
              <GreetingNotification onNotifyClick={onNotifyClick} />
            )}
          </>
        );
      }}
    </Formik>
  );
};
export default BalanceWithBtn;
