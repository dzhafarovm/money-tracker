import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import GreetingNotification from 'components/Balance/GreetingNotification';
import balanceOperations from 'redux/balance/balance-operations';
import balanceSelectors from 'redux/balance/balance-selectors';
import s from './BalanceWithBtn.module.css';

const FormSchema = Yup.object().shape({
  balance: Yup.number().required('Введите баланс'),
});

const BalanceWithBtn = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const initialValues = {
    balance: null,
  };

  useEffect(() => {
    dispatch(balanceOperations.getCurrentUserBalance());
  }, [dispatch]);

  const currentBalance = useSelector(balanceSelectors.getCurrentUserBalance);

  if (currentBalance !== null) {
    initialValues.balance = currentBalance;
  }

  const handleSubmit = ({ balance }) => {
    dispatch(balanceOperations.updateBalance(balance));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {formik => {
        const { values, handleChange } = formik;

        return (
          <div>
            {currentBalance === null && <GreetingNotification />}

            <Form
              className={pathname === '/report' ? s.wrapperReport : s.wrapper}
            >
              <span className={s.balanceTitle}>Баланс:</span>
              <div className={s.inputAndBtn}>
                <Field
                  className={
                    pathname === '/report'
                      ? s.inputBalanceReport
                      : s.inputBalance
                  }
                  value={values.balance}
                  type="text"
                  name="balance"
                  id="balance"
                  placeholder={
                    initialValues.balance === null
                      ? '00.00'
                      : initialValues.balance
                  }
                  onChange={handleChange}
                />
                <span
                  className={pathname === '/report' ? s.spanReport : s.span}
                >
                  UAH
                </span>
                {/* <ErrorMessage
                  name="balance"
                  component="span"
                  className={s.error}
                /> */}

                <button
                  className={
                    pathname === '/report' ? s.submitBtnReport : s.submitBtn
                  }
                  type="submit"
                >
                  Подтвердить
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default BalanceWithBtn;
