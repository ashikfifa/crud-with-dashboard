import { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import UserChart from "../features/UserChart";
import UserTable from "../features/UserTable";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Table");

  return (
    <div>
      <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-4">
        {activeTab === "Table" && <UserTable />}
        {activeTab === "Chart" && <UserChart />}
      </div>
    </div>
  );
};

export default Dashboard;
