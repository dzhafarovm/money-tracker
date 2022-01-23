import React from "react";
import { useBreakpoint } from 'react-use-size';
import style from './StatisticsReport.module.css';

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";


const data = [
  {
    name: "Свинина",
    uv: 7000,
  },
  {
    name: "Говядина",
    uv: 4500,
  },
  {
    name: "Курица",
    uv: 2000,
  },
  {
    name: "Рыба",
    uv: 2780,
  },
  {
    name: "Чай",
    uv: 1890,
  },
  {
    name: "Кофе",
    uv: 2390,
  },
  {
    name: "Шоколад",
    uv: 3490,
  },
  {
    name: "Зелень",
    uv: 500,
  },
  {
    name: "Овощи",
    uv: 4500,
  },
  {
    name: "Фрукты",
    uv: 2000,
  },
  {
    name: "Крупы",
    uv: 3490,
  },
];

const barColors = ["#ff7f0e", "#FFDAC0", "#FFDAC0"];

const StatisticsReport = () => {
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
                      interval={mobile ? 0 : 40}
                    />
            <XAxis
              dataKey={mobile ? "" : "name"}
              type={mobile ? "number" : "category"}
              tickLine={false}
              axisLine={false}
              padding={mobile ? {left: 10} : { top: 10 }}
              interval={0} 
              hide={mobile ? true : false}
                    />
            <YAxis
              dataKey={mobile ? "name" : ''}
              value={`${"name"}грн.`}
              type={mobile ? "category" : 'number'} 
              width={mobile ? 0 : 40} 
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
              label={mobile ? {  value: `${"name"}грн.`, position: "right",  fill: "#52555F", fontSize: 12 } : { position: "top",  fill: "#52555F", fontSize: 12 }}                   
            >
              {
                  data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={barColors[index % 3]} />
                  ))
              }
              {mobile && (
                <LabelList
                  dataKey="name"
                  position="insideLeft"
                  style={{ fill: "#52555F" }} />)}
                    </Bar>
          </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
};

export default StatisticsReport;