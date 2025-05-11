import { useSelector } from "react-redux";
import ChartWrapper from "../components/ChartWrapper";

const chartTypes = ['bar', 'line', 'pie', 'doughnut'];

const UserChart = () => {
  const { monthCounts } = useSelector((state: any) => state.deliveries);
  const chartLabels = Object.keys(monthCounts);  
  const chartValues = Object.values(monthCounts);   

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'User birth count per month',
        data: chartValues,
        backgroundColor: [
          '#36A2EB',
          '#FF6384',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#C9CBCF',
        ],
        borderColor: '#333',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">DOB Count Charts</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {chartTypes.map((type) => (
          <div
            key={type}
            className="bg-white p-4 rounded-xl shadow-xl"
          >
            <h3 className="text-lg font-semibold capitalize mb-2">{type} chart</h3>
            <ChartWrapper type={type} data={chartData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserChart;
