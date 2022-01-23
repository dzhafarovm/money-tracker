import DebedCreditReport from 'components/DebetCreditReport';
import ExpensesReport from 'components/ExpensesReport';
import NavigationReport from 'components/NavigationReport';
import StatisticsReport from 'components/StatisticsReport';
import BalanceWithoutLinkToReport from 'components/Balance/BalanceWithBtn';

const ReportPage = () => {
  return (
    <>
      <BalanceWithoutLinkToReport />
      <NavigationReport />
      <DebedCreditReport />
      <ExpensesReport />
      <StatisticsReport />
    </>
  );
};

export default ReportPage;
