import { useEffect } from 'react';
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

import Spinner from 'components/Spinner';
import transOperations from 'redux/transaction/transactions-operation.jsx';
import transactionsSelectors from 'redux/transaction/transactions-selectors';
import currentDateSelectors from 'redux/currentDate/currentDate-selectors';

import style from './StatisticsReport.module.css';

const StatisticsReport = ({ categoryName, page }) => {
  const dispatch = useDispatch();

  const mobile = useBreakpoint(767);
  const loading = useSelector(transactionsSelectors.getIsFetchingTransactions);
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

  const financeArr = useSelector(transactionsSelectors.getByMonth);

  let transactionsArr = [];

  if (financeArr.data) {
    const { data } = financeArr;

    page === 'expenses'
      ? (transactionsArr = data.costsTransactions)
      : (transactionsArr = data.incomeTransactions);
  }

  let categoryFiltered = [];

  if (categoryName) {
    categoryFiltered = transactionsArr.filter(
      el => el.category === categoryName,
    );
  }

  let creatObjForDrawingCharts = [];

  if (categoryFiltered !== []) {
    creatObjForDrawingCharts = categoryFiltered.map(el => ({
      name: el.description,
      uv: el.sum,
    }));
  }

  const calcSum = creatObjForDrawingCharts.reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.uv;
    return a;
  }, {});

  const entries = Object.entries(calcSum);

  let turnIntoObjForDrawingChartsArr = [];

  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    turnIntoObjForDrawingChartsArr.push({
      name: `${key}`,
      uv: Number(`${value}`),
    });
  }

  const sortArr = turnIntoObjForDrawingChartsArr.sort((a, b) => b.uv - a.uv);

  const data = sortArr.length > 0 ? sortArr : [1];

  const CustomizedAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          textAnchor="end"
          fill="#52555F"
          transform="rotate(-45)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  const CustomizedLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        dy={-12}
        fill="#52555F"
        fontSize={12}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  };

  const CustomizedMobileLabel = ({ x, y, width, height, value }) => {
    return (
      <text
        x={x + width}
        y={y + height / 1.6}
        dx={5}
        fill="#52555F"
        fontSize={12}
        textAnchor="right"
      >
        {value}
      </text>
    );
  };

  const CustomizedLabelList = ({ x, y, value }) => {
    return (
      <text x={x} y={y} dy={-5} fill="#52555F" fontSize={12} textAnchor="left">
        {value}
      </text>
    );
  };

  const barColors = ['#ff7f0e', '#FFDAC0', '#FFDAC0'];

  return (
    <>
      {loading ? (
        <div className={style.spinnerBox}>
          <div className={style.spinner}>
            <Spinner />
          </div>
        </div>
      ) : (
        <div>
          {data[0] === 1 ? (
            <p className={style.paragraph}>В этом месяце нет транзакций</p>
          ) : (
            <div className={style.wrapper}>
              <div className={style.section}>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={data}
                    align="right"
                    barCategoryGap={mobile ? 10 : 5}
                    fill="#52555F"
                    fontSize={12}
                    maxBarSize={45}
                    margin={
                      mobile
                        ? { top: 25, right: 45, left: 5, bottom: 5 }
                        : { top: 25, right: 10, left: 25, bottom: 110 }
                    }
                    layout={mobile ? 'vertical' : 'horizontal'}
                  >
                    <CartesianGrid
                      horizontal={mobile ? false : true}
                      vertical={false}
                    />
                    <XAxis
                      dataKey={mobile ? '' : 'name'}
                      type={mobile ? 'number' : 'category'}
                      angle={-45}
                      tick={<CustomizedAxisTick />}
                      tickMargin={5}
                      tickLine={false}
                      axisLine={false}
                      padding={mobile ? { left: 10 } : { top: 10 }}
                      interval={0}
                      hide={mobile ? true : false}
                    />
                    <YAxis
                      dataKey={''}
                      type={mobile ? 'category' : 'number'}
                      padding={{ left: 0 }}
                      tickCount={mobile ? 0 : 9}
                      tickLine={false}
                      axisLine={false}
                      hide
                    />
                    <Bar
                      dataKey="uv"
                      minBarSize={mobile ? 20 : 5}
                      minPointSize={5}
                      radius={mobile ? [0, 10, 10, 0] : [10, 10, 0, 0]}
                      label={mobile ? CustomizedMobileLabel : CustomizedLabel}
                    >
                      {data !== [1] &&
                        data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={barColors[index % 3]}
                          />
                        ))}
                      {mobile && (
                        <LabelList
                          dataKey="name"
                          content={CustomizedLabelList}
                        />
                      )}
                    </Bar>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default StatisticsReport;
