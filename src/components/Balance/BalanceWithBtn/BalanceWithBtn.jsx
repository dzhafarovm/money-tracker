import { useEffect } from 'react';
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
    console.log('BalanceWithBtn > balance', balance);

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

            <span>Баланс:</span>

            <Form>
              <div>
                <Field
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

                <ErrorMessage
                  name="balance"
                  component="span"
                  className={s.error}
                />
              </div>

              <button type="submit">Подтвердить</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default BalanceWithBtn;

// <Formik initialValues={balance} onSubmit={handleSubmit}>
//   {formik => {
//     const { values, handleChange } = formik;
//     // const onNotifyClick = condition => setIsNotifyShow(condition);
//     return (
//       <>
//         <Form className={s.wrapper}>
//           <h2 className={s.balanceTitle} htmlFor="balance">
//             Баланс:
//           </h2>
//           <div className={s.inputAndBtn}>
//             <div className="position_for_UAH">
//               <Field
//                 name="balance"
//                 onChange={handleChange}
//                 type="text"
//                 className={s.inputBalance}
//                 pattern="\d+(\.\d{2})?"
//                 title="Баланс должен состоять из цифр"
//                 required
//                 value={values.balance}
//               />
//               <span className={s.span}>UAH</span>
//             </div>
//             <button className={s.submitBtn} type="submit">
//               ПОДТВЕРДИТЬ
//             </button>
//           </div>
//         </Form>

//       </>
//     );
//   }}
// </Formik>
