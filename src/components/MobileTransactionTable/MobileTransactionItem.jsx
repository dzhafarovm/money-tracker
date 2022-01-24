import style from './MobileTransactionTable.module.css';
import sprite from 'components/images/sprite.svg';

const MobileTransactionItem = ({
  day,
  month,
  year,
  description,
  category,
  sum,
  onClick,
}) => {
  return (
    <>
      <div className={style.descriptionDateCategory}>
        <h3 className={style.description}>{description}</h3>
        <div className={style.dateCategory}>
          <h4 className={style.date}>
            {day}.{month}.{year}
          </h4>
          <h4 className={style.category}>{category}</h4>
        </div>
      </div>
      <h3 className={style.sum}>{sum}</h3>
      <div className={style.deleteIcon} onClick={onClick}>
        <svg className={style.deleteleIcon} width="18" height="18">
          <use href={`${sprite}#delete`}></use>
        </svg>
      </div>
    </>
  );
};

export default MobileTransactionItem;
