import routes from 'routes/routes';

import TransactionContainer from 'components/TransactionContainer';
import Button from 'components/TransactionContainer/Button';
import Table from 'components/TransactionTable';
import Summary from 'components/Summary';
import TransitionForm from 'components/TransitionForm';

import styleBtn from 'components/TransactionContainer/Button/Button.module.css';
import style from './IncomePage.module.css';

const IncomePage = () => {
  return (
    <>
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
          <Table />
          <Summary />
        </div>
      </TransactionContainer>
    </>
  );
};

export default IncomePage;
