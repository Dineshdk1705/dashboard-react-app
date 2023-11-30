import React from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Delayed Contract", value: 400 },
  { name: "Average Contract", value: 300 },
  { name: "On Time Contract", value: 300 },
];

const COLORS = ["#0088FE", "#FF8042", "#FFBB28", "#00C49F"];

const RADIAN = Math.PI / 180;

const customizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-[0.5px] rounded-xl shadow-lg border-gray-900 w-auto px-3">
        <p className="text-md text-gray-500">{`${payload[0].name}  : ${payload[0].value}`}</p>
      </div>
    );
  }
};

const PieChartCom = (prop) => {
  const { title } = prop;
  return (
    <div className="relative w-[400px] h-[350px] border-[0.5px] rounded-xl shadow-lg mb-6 bg-white p-2">
      <div className="absolute w-full mb-2 flex flex-col items-center justify-center font-semibold text-gray-500 text-sm">
        <h2>{title}</h2>
      </div>
      <div className="absolute pb-8 w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={200} height={200}>
            <Legend iconType="circle" iconSize={8} />
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={customizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartCom;
