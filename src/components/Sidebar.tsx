import {
  ArrowLeftToLine,
  ArrowRightToLine,
  LayoutDashboard,
  Package,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Deliveries",
      path: "/create-deliveries",
      icon: <Package size={20} />,
    },
  ];

  return (
    <div
      className={`h-screen bg-gray-800 text-white ${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <span className="text-lg font-bold">Delivery App</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          {collapsed ? (
            <ArrowRightToLine size={20} />
          ) : (
            <ArrowLeftToLine size={20} />
          )}
        </button>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 transition ${
              location.pathname === item.path ? "bg-gray-700" : ""
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
