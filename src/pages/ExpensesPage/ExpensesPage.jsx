//import { NavLink } from 'react-router-dom';
import routes from 'routes/routes';
import Balance from 'components/Balance';
import TransactionContainer from 'components/TransactionContainer';
import Button from 'components/TransactionContainer/Button';
import Table from 'components/TransactionTable';
import Summary from 'components/Summary';
import TransitionForm from 'components/TransitionForm';

import style from './ExpensesPage.module.css';
import styleBtn from 'components/TransactionContainer/Button/Button.module.css';

const ExpensesPage = () => {
  return (
    <>
      {/* <nav>
        <NavLink to={routes.report}>Отчёт</NavLink>
      </nav> */}

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
          <Table />
          <Summary />
        </div>
      </TransactionContainer>
    </>
  );
};

export default ExpensesPage;
