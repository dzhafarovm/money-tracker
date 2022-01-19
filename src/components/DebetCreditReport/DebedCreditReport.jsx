import style from './DebetCreditReport.module.css'

const DebedCreditReport = () => {
    return (
        <div className={style.section}>
            <div  className={style.boxSpending}>
                <p className={style.spending}>Расходы:</p>
            <span className={style.minus}>- 18 000 грн</span>
            </div>
            <div className={style.boxIncom}>
                <p className={style.income}>Доходы:</p>
            <span className={style.plus}>+ 45 000 грн</span>
            </div>
            
        </div>
    )
};

export default DebedCreditReport;