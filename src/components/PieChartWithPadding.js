import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Completed", value: 400 },
  { name: "On Going", value: 300 },
  { name: "Yet to be Started", value: 300 },
];

const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "#00C49F"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-[0.5px] rounded-xl shadow-lg border-gray-900 w-auto px-3">
        <p className="text-md text-gray-500">{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }
};

const PieChartWithPadding = () => {
  return (
    <div>
      <div className="w-100% h-[300px] flex items-center justify-center pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={150} height={150}>
            <Legend iconType="circle" iconSize={8} />
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={2}
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

export default PieChartWithPadding;
