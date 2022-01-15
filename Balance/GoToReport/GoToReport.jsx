import { NavLink } from 'react-router-dom';
import { ReactComponent as ReportSvg } from '../../images/iconReports.svg';
import routes from '../../../routes/routes';
import s from './GoToReport.module.css';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

const GoToReport = () => {
  return (
    <div className={s.GoToReportsWrapper}>
      <NavLink exact to={routes.reportPage} className={s.GoToRepoirtText}>
        Перейти к отчетам
      </NavLink>
      <ReportSvg className={s.reportSvg} />
    </div>
  );
};
export default GoToReport;
