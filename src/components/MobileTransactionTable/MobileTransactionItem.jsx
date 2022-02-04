import sprite from 'components/images/sprite.svg';

import style from './MobileTransactionTable.module.css';

const MobileTransactionItem = ({
  day,
  month,
  year,
  description,
  category,
  sum,
  onClick,
  type,
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
      <h3
        className={
          type === '/expenses' ? `${style.sum}` : `${style.sum} ${style.green}`
        }
      >
        {type === '/expenses' ? '-' : null}
        {sum}
      </h3>
      <div className={style.deleteIcon} onClick={onClick}>
        <svg className={style.deleteleIcon} width="18" height="18">
          <use href={`${sprite}#delete`}></use>
        </svg>
      </div>
    </>
  );
};

export default MobileTransactionItem;
