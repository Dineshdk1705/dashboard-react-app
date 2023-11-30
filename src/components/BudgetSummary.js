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

const DataFormatter = (number) => {
  if (number > 1000000000) {
    return `$ ${(number / 1000000000).toString()}B`;
  } else if (number > 1000000) {
    return `$ ${(number / 1000000).toString()}M`;
  } else if (number > 1000) {
    return `$ ${(number / 1000).toString()}K`;
  } else {
    return `$ ${number.toString()}`;
  }
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-[0.5px] rounded-xl shadow-lg border-gray-900 w-auto px-3">
        <p className="text-md text-black">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p className="text-md text-[#00a6fb]">{`${payload[1].name} : ${payload[1].value}`}</p>
        <p className="text-md text-[#ddb892]">{`${payload[2].name} : ${payload[2].value}`}</p>
      </div>
    );
  }
};

const BudgetSummary = (prop) => {
  const { data, title, w, h } = prop;
  return (
    <div
      className={`relative w-[${w ? w : "400px"}] h-[${
        h ? h : "350px"
      }] border-[0.5px] rounded-xl shadow-lg mb-6 bg-white p-1`}
    >
      <div className="absolute w-full mb-2 flex flex-col items-center justify-center font-semibold text-gray-500 text-sm">
        <h2>{title}</h2>
      </div>
      <div className="pr-5 pt-4 w-full h-full flex items-center justify-center">
        {" "}
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            width={130}
            height={40}
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
            <YAxis tick={{ fontSize: 10 }} tickFormatter={DataFormatter} />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={<CustomTooltip />}
            />
            <Legend iconType="circle" iconSize={8} />
            <Bar
              dataKey="Original Contract Amount"
              fill="#000"
              activeBar={<Rectangle fill="#6c757d" stroke="black" />}
            />
            <Bar
              dataKey="Present Contract Amount"
              fill="#00a6fb"
              activeBar={<Rectangle fill="#0582ca" stroke="black" />}
            />
            <Bar
              dataKey="Amount Billed to Date"
              fill="#ddb892"
              activeBar={<Rectangle fill="#e0afa0" stroke="gray" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BudgetSummary;
