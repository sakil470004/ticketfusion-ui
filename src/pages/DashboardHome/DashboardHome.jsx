import React from "react";
import BarChart from "./BarChart";
import PolarAreaChart from "./PolarAreaChart";
import LineChart from "./LineChart";

function DashboardHome() {
  return (
    <div className="py-8 md:py-10 px-4 bg-cover bg-center">
      <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
        All Of Your Events
      </span>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl ">Total Ticket</h2>
            <p className="text-lg text-sky-400 font-bold">100</p>
          </div>
        </div>
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl">Book Per Event</h2>
            <p className="text-lg text-sky-400 font-bold">50</p>
          </div>
        </div>
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl">Total Revenue</h2>
            <p className="text-lg text-sky-400 font-bold">$5000</p>
          </div>
        </div>
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl">Total Users</h2>
            <p className="text-lg text-sky-400 font-bold">500</p>
          </div>
        </div>
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl">Total Event</h2>
            <p className="text-lg text-sky-400 font-bold">10</p>
          </div>
        </div>
      </div>
      <LineChart />
      <PolarAreaChart />

      <BarChart />
    </div>
  );
}

export default DashboardHome;
