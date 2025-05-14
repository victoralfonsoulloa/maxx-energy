// src/pages/Dashboard.jsx
import React from "react";
import EnergyUsageChart from "../components/EnergyUsage/EnergyUsageChart";

const Dashboard = () => {
  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard: Energy Usage</h1>
      <EnergyUsageChart />
    </div>
  );
};

export default Dashboard;
