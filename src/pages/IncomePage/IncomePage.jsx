import { useBreakpoint } from 'react-use-size';

// import TransactionContainer from 'components/TransactionContainer';
import TransitionForm from 'components/TransitionForm';
import Button from 'components/TransactionContainer/Button';
import Summary from 'components/Summary';
import TransactionTable from 'components/TransactionTable';
import MobileTransactionTable from 'components/MobileTransactionTable';
import Balance from 'components/Balance';
import routes from 'routes/routes';

import style from './IncomePage.module.css';
import styleBtn from 'components/TransactionContainer/Button/Button.module.css';

const IncomePage = () => {
  const mobile = useBreakpoint(767);

  return (
    <>
      <Balance />

      {mobile ? (
        <div>
          <TransitionForm />
          <MobileTransactionTable />

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
        </div>
      ) : (
        <div>
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

          <TransitionForm />

          <TransactionTable />

          <Summary />
        </div>
      )}
    </>
  );
};

export default IncomePage;
