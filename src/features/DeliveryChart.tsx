import ChartWrapper from "../components/ChartWrapper";

const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const chartValues = [400, 300, 200, 278, 189];

const chartData = {
  labels: chartLabels,
  datasets: [
    {
      label: 'Deliveries',
      data: chartValues,
      backgroundColor: [
        '#36A2EB',
        '#FF6384',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
      ],
      borderColor: '#333',
      borderWidth: 1,
    },
  ],
};

const chartTypes = ['bar', 'line', 'pie', 'doughnut'];

const DeliveryChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Delivery Charts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {chartTypes.map((type) => (
          <div
            key={type}
            className="bg-white p-4 rounded-xl shadow border"
          >
            <h3 className="text-lg font-semibold capitalize mb-2">{type} chart</h3>
            <ChartWrapper type={type} data={chartData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryChart;
