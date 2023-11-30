import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-[0.5px] rounded-xl shadow-lg border-gray-900 w-auto px-3">
        <p className="text-md text-[#8884d8]">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p className="text-md text-[#82ca9d]">{`${payload[1].name} : ${payload[1].value}`}</p>
      </div>
    );
  }
};

const DoubleSimplePieChart = ({ data }) => {
  return (
    <div>
      <div className="w-full h-[300px] pb-3 pt-3">
        {" "}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis tick={{ fontSize: 10 }} dataKey="name" />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={<CustomTooltip />}
            />
            <Legend iconType="circle" iconSize={8} />
            <Bar
              dataKey="Original Contract Time"
              fill="#8884d8"
              barSize={20}
              activeBar={<Rectangle fill="#d1c0f3" stroke="gray" />}
            />
            <Bar
              dataKey="Present Contract Time"
              fill="#82ca9d"
              barSize={20}
              activeBar={<Rectangle fill="#c1fba4" stroke="gray" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DoubleSimplePieChart;
