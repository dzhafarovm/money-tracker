import style from './ExpensesReport.module.css';
import sprite from 'components/images/sprite.svg';

const ExpensesReport = () => {
  return (
    <div className={style.section}>
      <div className={style.slider}>
        <button type="button" className={style.arrowDate}>
          <svg
          width="12"
          height="18"
          viewBox="0 0 24 24"
          className={style.iconDate}
        >
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
        </button>
        
        <p className={style.date}>РАСХОДЫ</p>

        <button type="button" className={style.arrowDate}>
          <svg
          width="12"
          height="18"
          viewBox="0 0 24 24"
          className={style.iconDate}
        >
          <use href={`${sprite}#arrow-right`}></use>
        </svg>
        </button>        
      </div>

      <div className={style.box}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <button type="button" className={style.category}>
              <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#products`}></use>
            </svg>
            <p className={style.title}>ПРОДУКТЫ</p>
            </button>          
          </li>

          <li className={style.listItem}>
            <button type="button" className={style.category}>
              <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#cocktail`}></use>
            </svg>
            <p className={style.title}>АЛКОГОЛЬ</p>
            </button>          
          </li>

          <li className={style.listItem}>
            <button type="button" className={style.category}>
              <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#kite`}></use>
            </svg>
            <p className={style.title}>РАЗВЛЕЧЕНИЯ</p>
            </button>            
          </li>

          <li className={style.listItem}>
            <button type="button" className={style.category}>
              <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#health`}></use>
            </svg>
            <p className={style.title}>ЗДОРОВЬЕ</p>
            </button>            
          </li>

          <li className={style.listItem}>
            <button type="button" className={style.category}>
             <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#car`}></use>
            </svg>
            <p className={style.title}>ТРАНСПОРТ</p>
            </button>         
          </li>
          
          <li className={style.listItem}>
            <button type="button" className={style.category}>
            <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#couch`}></use>
            </svg>
            <p className={style.title}>ВСЕ ДЛЯ ДОМА</p>
            </button>           
          </li>

          <li className={style.listItem}>
            <button type="button" className={style.category}>
              <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#tools`}></use>
            </svg>
            <p className={style.title}>ТЕХНИКА</p>
            </button>           
          </li>

          <li className={style.listItem}>
            <button type="button" className={style.category}>
              <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#invoice`}></use>
            </svg>
            <p className={style.title}>КОМУНАЛКА</p>
            </button>   
          </li>

          <li className={style.listItem}>
            <button type="button" className={style.category}>
              <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#clay`}></use>
            </svg>
            <p className={style.title}>СПОРТ</p>
            </button>   
          </li>

          <li className={style.listItem}>
            <button type="button" className={style.category}>
              <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#book`}></use>
            </svg>
            <p className={style.title}>ОБРАЗОВАНИЕ</p>
            </button>   
          </li>

          <li className={style.listItem}>
            <button type="button" className={style.category}>
              <p className={style.title}>5000.00</p>
            <svg width="65" height="57" className={style.iconBox}>
              <use href={`${sprite}#ufo`}></use>
            </svg>
            <p className={style.title}>ПРОЧЕЕ</p>
            </button>   
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpensesReport;
