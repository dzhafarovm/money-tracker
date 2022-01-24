import DebedCreditReport from 'components/DebetCreditReport';
import ShowPage from 'components/ShowPage';
import NavigationReport from 'components/NavigationReport';
import StatisticsReport from 'components/StatisticsReport';
import BalanceWithoutLinkToReport from 'components/Balance/BalanceWithBtn';

const ReportPage = () => {
  return (
    <>
      <BalanceWithoutLinkToReport />
      <NavigationReport />
      <DebedCreditReport />
      <ShowPage />
      <StatisticsReport />
    </>
  );
};

export default ReportPage;
