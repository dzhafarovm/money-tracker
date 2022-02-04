import { useBreakpoint } from 'react-use-size';

import Balance from 'components/Balance';
import TransactionTable from 'components/TransactionTable';
import MobileTransactionTable from 'components/MobileTransactionTable';
import TransitionForm from 'components/TransitionForm';
import AddTransactionButton from 'components/TransitionFormModal/AddTransactionButton.jsx';
import Button from 'components/TransactionContainer/Button';
import Summary from 'components/Summary';
import routes from 'routes/routes';

import styleBtn from 'components/TransactionContainer/Button/Button.module.css';
import style from './IncomePage.module.css';

const IncomePage = () => {
  const mobile = useBreakpoint(767);

  return (
    <>
      <Balance />

      {mobile ? (
        <div>
          <AddTransactionButton />

          <MobileTransactionTable />

          <div className={styleBtn.container}>
            <Button
              title="Расход"
              route={routes.expenses}
              styleActive={styleBtn.buttonActiveTitle}
              styleInActive={styleBtn.buttonTitle}
            />
            <Button
              title="Доход"
              route={routes.income}
              styleActive={styleBtn.buttonActiveTitle}
              styleInActive={styleBtn.buttonTitle}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className={styleBtn.container}>
            <Button
              title="Расход"
              route={routes.expenses}
              styleActive={styleBtn.buttonActiveTitle}
              styleInActive={styleBtn.buttonTitle}
            />
            <Button
              title="Доход"
              route={routes.income}
              styleActive={styleBtn.buttonActiveTitle}
              styleInActive={styleBtn.buttonTitle}
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

export default IncomePage;
