import DebedCreditReport from 'components/DebetCreditReport';
import ExpensesReport from 'components/ExpensesReport';
import NavigationReport from 'components/NavigationReport';
import StatisticsReport from 'components/StatisticsReport';

const ReportPage = () => {
  return (
    <>
      <NavigationReport />
      <DebedCreditReport />
      <ExpensesReport />
      <StatisticsReport />
    </>
  );
};

export default ReportPage;
