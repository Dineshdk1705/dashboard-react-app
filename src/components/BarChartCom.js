import React from "react";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-[0.5px] rounded-xl shadow-lg border-gray-900 w-auto px-3">
        <p className="text-md text-gray-500">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
};

const BarChartCom = (props) => {
  const { color, title, w, h, data, activeBarColor } = props;
  console.log(data);

  return (
    <div
      className={`relative w-[${w ? w : "400px"}] h-[${
        h ? h : "350px"
      }] border-[0.5px] rounded-xl shadow-lg mb-6 bg-white p-1`}
    >
      <div className="absolute w-full mb-2 flex flex-col items-center justify-center font-semibold text-gray-500 text-sm">
        <h2>{title}</h2>
      </div>
      <div className="pr-5 mt-4 w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="80%">
          <BarChart width={130} height={40} data={data}>
            <CartesianGrid vertical={false} />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <XAxis tick={{ fontSize: 10 }} dataKey={"name"} />
            <YAxis
              tick={{ fontSize: 10 }}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            />
            <Bar
              dataKey="pi"
              fill={color}
              barSize={50}
              activeBar={{ fill: activeBarColor }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartCom;
