import React from "react";
import style from './StatisticsReport.module.css';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
    CartesianGrid,
  Cell,
  Label,
  LabelList,
  ResponsiveContainer,
//   Tooltip,
} from "recharts";

const data = [
  {
    name: "Свинина",
    uv: 3300,
  },
  {
    name: "Говядина",
    uv: 3000,
  },
  {
    name: "Курица",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
    // pv: 4300,
    // amt: 2210
  }
];

const barColors = ["#ff7f0e", "#FFDAC0", "#FFDAC0"];

const StatisticsReport = () => {
    return (
        <div className={style.section}>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
                // className={style.barchart}
                data={data}
                margin={{
                    top: 50,
                    right: 51,
                    left: 51,
                    bottom: 5
                }}
        >
                    <CartesianGrid
                        vertical={false}
                        interval={40}
                    />
                    <XAxis
                        fill="#ff7f0e"
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        width={40}
                        type="number"
                        tickCount={9} hide
                    />
                    <Label dataKey="name"/>
                    <Bar
                        dataKey="uv"
                        barSize={38}
                        barCategoryGap={25}
                        minPointSize={5}
                        maxPointSize={390}
                        radius={[10, 10, 0, 0]}
                        label={{ position: "top" }}                    
                        >
                            {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={barColors[index % 3]} />
                                ))
                            }
                    </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
    )
};

export default StatisticsReport;