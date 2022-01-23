import DebedCreditReport from 'components/DebetCreditReport';
import ShowPage from 'components/ShowPage';
import NavigationReport from 'components/NavigationReport';
import StatisticsReport from 'components/StatisticsReport';

const ReportPage = () => {
  return (
    <>
      <NavigationReport />
      <DebedCreditReport />
      <ShowPage />
      <StatisticsReport />
    </>
  );
};

export default ReportPage;
