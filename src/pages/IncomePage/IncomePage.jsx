import { useBreakpoint } from 'react-use-size';

import TransactionContainer from 'components/TransactionContainer';
import TransitionForm from 'components/TransitionForm';
import Button from 'components/TransactionContainer/Button';
import Summary from 'components/Summary';
// import TransactionTable from 'components/TransactionTable';
// import MobileTransactionTable from 'components/MobileTransactionTable';
import Balance from 'components/Balance';
import routes from 'routes/routes';

import style from './IncomePage.module.css';
import styleBtn from 'components/TransactionContainer/Button/Button.module.css';

const IncomePage = () => {
  const mobile = useBreakpoint(767);

  return (
    <>
      <Balance />

      <div className={style.buttonConteiner}>
        <Button
          title="Расход"
          route={routes.expenses}
          style={styleBtn.buttonTitle}
        />
        <Button
          title="Доход"
          route={routes.income}
          style={styleBtn.buttonActiveTitle}
        />
      </div>
      <TransactionContainer>
        <TransitionForm />

        <div className={style.wrapper}>
          {/* {mobile ? <MobileTransactionTable /> : <TransactionTable />} */}
          {mobile ? null : <Summary />}
        </div>
      </TransactionContainer>
    </>
  );
};

export default IncomePage;
