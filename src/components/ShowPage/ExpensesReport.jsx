import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import transOperations from 'redux/transaction/transactions-operation';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import currentDateSelectors from 'redux/currentDate/currentDate-selectors';

import style from './ExpensesReport.module.css';
import sprite from 'components/images/sprite.svg';

const ExpensesReport = ({ dataArr }) => {
  const dispatch = useDispatch();

  const currentDate = useSelector(currentDateSelectors.getcurrentDate);
  const month = currentDate.month;
  const year = currentDate.year;

  useEffect(() => {
    const date = {
      month,
      year,
    };

    dispatch(transOperations.getByMonth(date));
  }, [dispatch, month, year]);

  const { data } = useSelector(transactionsSelectors.getByMonth);

  let costsArr = [];

  if (data) {
    costsArr = data.costsTransactions;
  }

  let productsSum = null;
  let alcoholSum = null;
  let funSum = null;
  let healthSum = null;
  let transportSum = null;
  let homeSum = null;
  let technicSum = null;
  let utilitySum = null;
  let sportSum = null;
  let educationSum = null;
  let otherSum = null;

  if (costsArr !== []) {
    const products = costsArr.filter(el => el.category === 'products');
    if (products !== []) {
      productsSum = products.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const alcohol = costsArr.filter(el => el.category === 'alcohol');
    if (alcohol !== []) {
      alcoholSum = alcohol.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const fun = costsArr.filter(el => el.category === 'fun');
    if (fun !== []) {
      funSum = fun.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const health = costsArr.filter(el => el.category === 'health');
    if (health !== []) {
      healthSum = health.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const transport = costsArr.filter(el => el.category === 'transport');
    if (transport !== []) {
      transportSum = transport.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const home = costsArr.filter(el => el.category === 'home');
    if (home !== []) {
      homeSum = home.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const technic = costsArr.filter(el => el.category === 'technic');
    if (technic !== []) {
      technicSum = technic.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const utility = costsArr.filter(el => el.category === 'utility and phone');
    if (utility !== []) {
      utilitySum = utility.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }
    const sport = costsArr.filter(el => el.category === 'sport and hobby');
    if (sport !== []) {
      sportSum = sport.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const education = costsArr.filter(el => el.category === 'education');
    if (education !== []) {
      educationSum = education.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }

    const other = costsArr.filter(el => el.category === 'other');
    if (other !== []) {
      otherSum = other.reduce((acc, trans) => {
        return acc + trans.sum;
      }, 0);
    }
  }

  const expenses = [
    {
      value: 'products',
      label: 'Продукты',
      svg: '#products',
      sum: productsSum,
    },
    { value: 'alcohol', label: 'Алкоголь', svg: '#cocktail', sum: alcoholSum },
    { value: 'fun', label: 'Развлечения', svg: '#kite', sum: funSum },
    { value: 'health', label: 'Здоровье', svg: '#health', sum: healthSum },
    { value: 'transport', label: 'Транспорт', svg: '#car', sum: transportSum },
    { value: 'home', label: 'Всё для дома', svg: '#couch', sum: homeSum },
    { value: 'technic', label: 'Техника', svg: '#tools', sum: technicSum },
    {
      value: 'utility and phone',
      label: 'Коммуналка, связь',
      svg: '#invoice',
      sum: utilitySum,
    },
    {
      value: 'sport and hobby',
      label: 'Спорт, хобби',
      svg: '#clay',
      sum: sportSum,
    },
    {
      value: 'education',
      label: 'Образование',
      svg: '#book',
      sum: educationSum,
    },
    { value: 'other', label: 'Прочее', svg: '#ufo', sum: otherSum },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const firstSelectedObj = expenses.find(el => el.sum !== 0);

    if (firstSelectedObj) {
      dataArr(firstSelectedObj.value, 'expenses');
    }
  }, []);

  const btnClick = (e, index) => {
    setActiveIndex(index);
    const category = e.currentTarget.id;
    dataArr(category, 'expenses');
  };

  return (
    <div className={style.section}>
      <div className={style.box}>
        <ul className={style.list}>
          {expenses
            .filter(el => el.sum !== 0)
            .map((obj, index) => (
              <li key={obj.value} className={style.listItem}>
                <button
                  type="button"
                  className={
                    activeIndex === index
                      ? `${style.category} ${style.active}`
                      : `${style.category}`
                  }
                  onClick={e => btnClick(e, index)}
                  id={obj.value}
                >
                  <p className={style.title}>{obj.sum}</p>
                  <svg width="56" height="56" className={style.iconBox}>
                    <use href={`${sprite}${obj.svg}`}></use>
                  </svg>
                  <p className={style.title}>{obj.label}</p>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpensesReport;
