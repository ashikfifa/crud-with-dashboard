import {
  Bar,
  Line,
  Pie,
  Doughnut,
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Tooltip,
  Legend
);

const ChartWrapper = ({ type, data }: { type: string; data: any }) => {
  switch (type) {
    case 'bar':
      return <Bar data={data} />;
    case 'line':
      return <Line data={data} />;
    case 'pie':
      return <Pie data={data} />;
    case 'doughnut':
      return <Doughnut data={data} />;
    default:
      return <div>Invalid chart type</div>;
  }
};

export default ChartWrapper;
