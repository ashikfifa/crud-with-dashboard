interface IActiveType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }
  
  const DashboardNav = ({ activeTab, setActiveTab }: IActiveType) => {
    const tabs = ["Table", "Chart"];
  
    return (
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-2 flex space-x-6 text-gray-600 capitalize dark:text-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-colors cursor-pointer duration-300 transform border-b-2 mx-1.5 sm:mx-6 ${
                activeTab === tab
                  ? "text-gray-800 dark:text-gray-200 border-blue-500"
                  : "border-transparent hover:text-gray-800 hover:border-blue-500 dark:hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>
    );
  };
  
  export default DashboardNav;
  