import style from './ExpensesReport.module.css';
import sprite from 'components/images/sprite.svg';

const ExpensesReport = () => {
  return (
    <div className={style.section}>
      <div className={style.slider}>
        <svg
          width="12"
          height="18"
          viewBox="0 0 24 24"
          className={style.iconDate}
        >
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
        <p className={style.date}>РАСХОДЫ</p>
        <svg
          width="12"
          height="18"
          viewBox="0 0 24 24"
          className={style.iconDate}
        >
          <use href={`${sprite}#arrow-right`}></use>
        </svg>
      </div>

      <div className={style.box}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#products`}></use>
            </svg>
            <p className={style.title}>ПРОДУКТЫ</p>
          </li>

          <li className={style.listItem}>
            <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#cocktail`}></use>
            </svg>
            <p className={style.title}>АЛКОГОЛЬ</p>
          </li>

          <li className={style.listItem}>
            <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#kite`}></use>
            </svg>
            <p className={style.title}>РАЗВЛЕЧЕНИЯ</p>
          </li>

          <li className={style.listItem}>
            <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#kite`}></use>
            </svg>
            <p className={style.title}>РАЗВЛЕЧЕНИЯ</p>
          </li>
          <li className={style.listItem}>
            <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#kite`}></use>
            </svg>
            <p className={style.title}>РАЗВЛЕЧЕНИЯ</p>
          </li>
          <li className={style.listItem}>
            <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#kite`}></use>
            </svg>
            <p className={style.title}>РАЗВЛЕЧЕНИЯ</p>
          </li>
          <li className={style.listItem}>
            <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#kite`}></use>
            </svg>
            <p className={style.title}>РАЗВЛЕЧЕНИЯ</p>
          </li>
          <li className={style.listItem}>
            <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#kite`}></use>
            </svg>
            <p className={style.title}>РАЗВЛЕЧЕНИЯ</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpensesReport;
