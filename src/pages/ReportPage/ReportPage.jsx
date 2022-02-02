import { useState } from 'react';
import DebedCreditReport from 'components/DebetCreditReport';
import ShowPage from 'components/ShowPage';
import NavigationReport from 'components/NavigationReport';
import StatisticsReport from 'components/StatisticsReport';
import Balance from 'components/Balance';

const ReportPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [pageName, setPageName] = useState('');
  const [act, setAct] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const dataArr = (category, page) => {
    setCategoryName(category);
    setPageName(page);
  };

  return (
    <>
      <NavigationReport
        act={act}
        setAct={setAct}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Balance />
      <DebedCreditReport />
      <ShowPage
        dataArr={dataArr}
        act={act}
        setAct={setAct}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <StatisticsReport categoryName={categoryName} page={pageName} />
    </>
  );
};

export default ReportPage;
