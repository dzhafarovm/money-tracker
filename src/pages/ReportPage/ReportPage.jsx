import DebedCreditReport from 'components/DebetCreditReport';
import ExpensesReport from 'components/ExpensesReport';
import NavigationReport from 'components/NavigationReport';
import StatisticsReport from 'components/StatisticsReport';

const ReportPage = () => {
  return (
    <>
      <DebedCreditReport />
      <ExpensesReport />
      <NavigationReport />
      <StatisticsReport />
    </>
  );
};

export default ReportPage;
