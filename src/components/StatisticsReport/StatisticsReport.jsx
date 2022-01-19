import style from './StatisticsReport.module.css';

const StatisticsReport = () => {
    return (
        <div className={style.section}>
            <p className={style.name}>Свинина</p>
            <p className={style.sum}>5 000 грн</p>
            <span>жирный столбик</span>
        </div>
    )
};

export default StatisticsReport;