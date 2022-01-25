import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useBreakpoint } from 'react-use-size';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

import transOperations from 'redux/transaction/transactions-operation.jsx';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import currentDateSelectors from 'redux/currentDate/currentDate-selectors';

import style from './StatisticsReport.module.css';

const StatisticsReport = ({ categoryName, page }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const nameUrl = location.pathname;
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

  const trArr = useSelector(transactionsSelectors.getByMonth);
  let costsArr = [];
  let incomeArr = [];

  if (trArr.data) {
    const { data } = trArr;
    costsArr = data.costsTransactions;
  }

  if (trArr.data) {
    const { data } = trArr;
    incomeArr = data.incomeTransactions;
  }

  let costsCategoryFilter = [];
  let incomeCategoryFilter = [];

  if (categoryName) {
    costsCategoryFilter = costsArr.filter(el => el.category === categoryName);
  } else {
    costsCategoryFilter = costsArr.filter(el => el.category === 'products');
  }

  if (categoryName) {
    incomeCategoryFilter = incomeArr.filter(el => el.category === categoryName);
  }

  let data = [];

  if ((costsCategoryFilter !== []) & (page === 'expenses')) {
    data = costsCategoryFilter.map(el => ({
      name: el.description,
      uv: el.sum,
    }));
  }
  if ((costsCategoryFilter !== []) & (nameUrl === '/report')) {
    data = costsCategoryFilter.map(el => ({
      name: el.description,
      uv: el.sum,
    }));
  }

  if ((incomeCategoryFilter !== []) & (page === 'income')) {
    data = incomeCategoryFilter.map(el => ({
      name: el.description,
      uv: el.sum,
    }));
  }

  const barColors = ['#ff7f0e', '#FFDAC0', '#FFDAC0'];

  const mobile = useBreakpoint(767);

  return (
    <div className={style.wrapper}>
      <div className={style.section}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            align="right"
            fill="#52555F"
            fontSize={12}
            maxBarSize={38}
            layout={mobile ? 'vertical' : 'horizontal'}
          >
            <CartesianGrid
              horizontal={mobile ? false : true}
              vertical={false}
              // interval={mobile ? 0 : 40}
            />
            <XAxis
              dataKey={mobile ? '' : 'name'}
              type={mobile ? 'number' : 'category'}
              tickLine={false}
              axisLine={false}
              padding={mobile ? { left: 10 } : { top: 10 }}
              interval={0}
              hide={mobile ? true : false}
            />
            <YAxis
              dataKey={mobile ? 'name' : ''}
              // value={`${"name"}грн.`}
              type={mobile ? 'category' : 'number'}
              tickCount={mobile ? 0 : 9}
              tickLine={false}
              axisLine={false}
              hide={mobile ? false : true}
            />
            <Bar
              dataKey="uv"
              minBarSize={mobile ? 20 : 5}
              barCategoryGap={50}
              minPointSize={70}
              radius={mobile ? [0, 10, 10, 0] : [10, 10, 0, 0]}
              label={
                mobile
                  ? {
                      /*  value: `${"name"}грн.`, */ position: 'right',
                      fill: '#52555F',
                      fontSize: 12,
                    }
                  : { position: 'top', fill: '#52555F', fontSize: 12 }
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % 3]} />
              ))}
              {mobile && (
                <LabelList
                  dataKey="name"
                  position="insideLeft"
                  style={{ fill: '#52555F' }}
                />
              )}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsReport;
