import React, { useState } from "react";
import PieChartWithPadding from "./PieChartWithPadding";
import DoubleSimplePieChart from "./DoubleSimplePieChart";

const ContractComp = ({ data }) => {
  const [type, setType] = useState("pieChart");
  const handleTypeChange = (value) => {
    setType(value);
    console.log(type);
  };
  return (
    <div className="w-[500px] h-[350px] border-[0.5px] rounded-xl shadow-lg mb-6 p-2 bg-white">
      <div>
        <input
          type="radio"
          name="type"
          value="pieChart"
          checked={type === "pieChart"}
          onChange={(e) => handleTypeChange(e.target.value)}
        />
        <label className="ml-1 text-gray-500 text-sm font-semibold">
          Project Completion Rate
        </label>
      </div>
      <div>
        <input
          type="radio"
          className=""
          name="type"
          value="graph"
          checked={type === "graph"}
          onChange={(e) => handleTypeChange(e.target.value)}
        />
        <label className="ml-1 text-gray-500 text-sm font-semibold">
          Original Contract Time Vs Present Contract
        </label>
      </div>

      {type === "pieChart" ? (
        <div className="w-100% h-[200px]">
          <PieChartWithPadding />
        </div>
      ) : (
        <div className="w-100% h-[300px]">
          <DoubleSimplePieChart data={data} />
        </div>
      )}
    </div>
  );
};

export default ContractComp;
