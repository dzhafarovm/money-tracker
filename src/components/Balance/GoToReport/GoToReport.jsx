import { Link } from 'react-router-dom';

import { ReactComponent as ReportSvg } from '../../images/iconReports.svg';

import s from './GoToReport.module.css';

const GoToReport = () => {
  return (
    <div className={s.GoToReportsWrapper}>
      <Link to={`/report`} className={s.GoToRepoirtText}>
        Перейти к отчетам
      </Link>
      <ReportSvg className={s.reportSvg} />
    </div>
  );
};
export default GoToReport;
