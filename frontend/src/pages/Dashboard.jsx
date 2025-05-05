import { useEffect, useState } from "react";
import { fetchEnergyUsage } from "../services/api";

const Dashboard = () => {
  const [usageData, setUsageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchEnergyUsage({
        account_no: "12345",         // Replace with valid ID if needed
        start_date: "2024-01-01",
        end_date: "2024-01-02",
      });
      if (data) setUsageData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard: Energy Usage</h1>

      {loading ? (
        <p>Loading...</p>
      ) : usageData.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <pre className="bg-black/30 p-4 rounded-md overflow-x-auto text-sm">
          {JSON.stringify(usageData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default Dashboard;
