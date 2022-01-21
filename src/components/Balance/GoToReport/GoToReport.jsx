import { Link } from 'react-router-dom';
import { ReactComponent as ReportSvg } from '../../images/iconReports.svg';
//import routes from '../../../routes/routes';
import s from './GoToReport.module.css';
// import eachDayOfInterval from 'date-fns/eachDayOfInterval';

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
