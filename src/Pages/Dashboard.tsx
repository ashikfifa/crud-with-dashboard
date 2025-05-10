import { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import UserChart from "../features/UserChart";
import DeliveryTable from "../features/DeliveryTable";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Table");

  return (
    <div>
      <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-4">
        {activeTab === "Table" && <DeliveryTable />}
        {activeTab === "Chart" && <UserChart />}
      </div>
    </div>
  );
};

export default Dashboard;
