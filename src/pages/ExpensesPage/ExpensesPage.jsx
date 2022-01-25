import { useBreakpoint } from 'react-use-size';

import TransactionContainer from 'components/TransactionContainer';
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

      <div className={style.buttonConteiner}>
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

      <TransactionContainer>
        <TransitionForm />

        <div className={style.wrapper}>
          {mobile ? <MobileTransactionTable /> : <TransactionTable />}
          {mobile ? null : <Summary />}
        </div>
      </TransactionContainer>
    </>
  );
};

export default ExpensesPage;
