import { useBreakpoint } from 'react-use-size';

// import TransactionContainer from 'components/TransactionContainer';
import TransitionForm from 'components/TransitionForm';
import Button from 'components/TransactionContainer/Button';
import Summary from 'components/Summary';
import TransactionTable from 'components/TransactionTable';
import MobileTransactionTable from 'components/MobileTransactionTable';
import routes from 'routes/routes';
import Balance from 'components/Balance';

import style from './ExpensesPage.module.css';
import styleBtn from 'components/TransactionContainer/Button/Button.module.css';

const ExpensesPage = () => {
  const mobile = useBreakpoint(767);

  return (
    <>
      <Balance />

      {mobile ? (
        <div>
          <TransitionForm />
          <MobileTransactionTable />

          <div className={style.buttonContainer}>
            <Button
              title="Расход"
              route={routes.expenses}
              style={styleBtn.buttonActiveTitle}
            />
            <Button
              title="Доход"
              route={routes.income}
              style={styleBtn.buttonTitle}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className={style.buttonContainer}>
            <Button
              title="Расход"
              route={routes.expenses}
              style={styleBtn.buttonActiveTitle}
            />
            <Button
              title="Доход"
              route={routes.income}
              style={styleBtn.buttonTitle}
            />
          </div>
           
            <div className={style.transactionSummaryContainer}>
             
              <TransitionForm />
                <div className={style.tableSummaryContainer}>
                <TransactionTable />
             
                 <Summary />
              </div>
            </div>
          
        </div>
      )}
    </>
  );
};

export default ExpensesPage;