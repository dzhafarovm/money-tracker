import DebedCreditReport from 'components/DebetCreditReport';
import ShowPage from 'components/ShowPage';
import NavigationReport from 'components/NavigationReport';
import StatisticsReport from 'components/StatisticsReport';
import Balance from 'components/Balance';

const ReportPage = () => {
  return (
    <>
      <Balance />
      <NavigationReport />
      <DebedCreditReport />
      <ShowPage />
      <StatisticsReport />
    </>
  );
};

export default ReportPage;
