import React from 'react';
// import React, { Fragment } from "react";
import { useBreakpoint } from 'react-use-size';
// import Media from 'react-media';
// import {useBreakpoint} from 'use-breakpoint';
import style from './StatisticsReport.module.css';

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Свинина',
    uv: 200,
  },
  {
    name: 'Говядина',
    uv: 4500,
  },
  {
    name: 'Курица',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
    // pv: 4300,
    // amt: 2210
  },
  // {
  //   name: "Свинина",
  //   uv: 200,
  // },
  // {
  //   name: "Говядина",
  //   uv: 4500,
  // },
  // {
  //   name: "Курица",
  //   uv: 2000,
  // },
  // {
  //   name: "Page G",
  //   uv: 3490,
  //   // pv: 4300,
  //   // amt: 2210
  // },
  // {
  //   name: "Свинина",
  //   uv: 200,
  // },
  // {
  //   name: "Говядина",
  //   uv: 4500,
  // },
  {
    name: 'Курица',
    uv: 2000,
  },
];

const barColors = ['#ff7f0e', '#FFDAC0', '#FFDAC0'];

const StatisticsReport = () => {
  const mobile = useBreakpoint(767);
  // console.log(mobile);

  return (
    <div className={style.wrapper}>
      <div className={style.section}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            align="right"
            fill="#52555F"
            fontSize={12}
            // scaleToFit={true}
            maxBarSize={38}
            layout={mobile ? 'vertical' : 'horizontal'}
          >
            <CartesianGrid
              horizontal={mobile ? false : true}
              vertical={false}
              interval={mobile ? 0 : 40}
            />
            <XAxis
              dataKey={mobile ? '' : 'name'}
              type={mobile ? 'number' : 'category'}
              tickLine={false}
              axisLine={false}
              padding={mobile ? { left: 10 } : { top: 10 }}
              // interval={0} angle={30} dx={20}
              interval={0}
              // interval="preserveStartEnd"
              hide={mobile ? true : false}
            />
            <YAxis
              dataKey={mobile ? 'name' : ''}
              type={mobile ? 'category' : 'number'}
              width={mobile ? 0 : 40}
              tickCount={mobile ? 0 : 9}
              tickLine={false}
              axisLine={false}
              hide={mobile ? false : true}
            />
            <Bar
              dataKey="uv"
              minBarSize={5}
              // barCategoryGap={25}
              // maxPointSize={420}
              minPointSize={5}
              radius={mobile ? [0, 10, 10, 0] : [10, 10, 0, 0]}
              label={
                mobile
                  ? { position: 'right', fill: '#52555F', fontSize: 12 }
                  : { position: 'top', fill: '#52555F', fontSize: 12 }
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % 3]} />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsReport;
