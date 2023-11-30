import React from "react";
import PieChartCom from "./components/PieChartCom";
import BarChartCom from "./components/BarChartCom";
import ContractComp from "./components/ContractComp";
import SidebarComp from "./components/SidebarComp";
import BudgetSummary from "./components/BudgetSummary";

const dataHighPerformance = [
  {
    name: "E4W39",
    pi: 95,
  },
  {
    name: "T4613",
    pi: 100,
  },
];

const dataLowPerformance = [];

const dataBudgetSummary = [
  {
    name: "E4W39",
    "Present Contract Amount": 40000000,
    "Original Contract Amount": 30000000,
    "Amount Billed to Date": 10000000,
  },
  {
    name: "T4613",
    "Present Contract Amount": 160000000,
    "Original Contract Amount": 140000000,
    "Amount Billed to Date": 0,
  },
];

const dataContractTime = [
  {
    name: "E4W39",
    "Present Contract Time": 4000,
    "Original Contract Time": 2400,
  },
  {
    name: "T4613",
    "Present Contract Time": 3000,
    "Original Contract Time": 1398,
  },
];

const App = () => {
  return (
    <div className="bg-slate-100 flex">
      <div className="w-[10rem] h-auto">
        <SidebarComp />
      </div>
      <div className="p-4 pt-0 w-screen h-auto">
        <div className="p-3">
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            type="date"
          />
        </div>
        <div className="flex flex-wrap justify-around">
          <PieChartCom title={"Contracts"} />
          <BarChartCom
            color="#7bf1a8"
            title={"High Performing Projects"}
            data={dataHighPerformance}
            activeBarColor="#5bba6f"
          />
          <BarChartCom
            color="#ffadad"
            title={"Low Performing Projects"}
            data={
              dataLowPerformance ? dataLowPerformance : "No Projects Available"
            }
            activeBarColor="#ff6b6b"
          />
        </div>
        <div className="flex flex-wrap w-full justify-between">
          <div className="w-[45rem]">
            <BudgetSummary
              w={"100%"}
              color="black"
              title={"Budget Summary"}
              data={dataBudgetSummary}
            />
          </div>
          <div className="pr-2">
            <ContractComp data={dataContractTime ? dataContractTime : ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
