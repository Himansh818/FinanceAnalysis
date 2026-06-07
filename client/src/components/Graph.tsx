import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type Stock = {
  id: number;
  company: string;
  price: number;
  date: string;
};

const Graph = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/stocks")
      .then((res) => setStocks(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  const data = {
    labels: stocks.map((s) => s.date),
    datasets: [
      {
        label: "Portfolio Trend",
        data: stocks.map((s) => s.price),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      y: {
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
    },
  };

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Finance Dashboard 📈
          </h2>

          <p className="text-sm text-slate-400">
            Portfolio performance over time
          </p>
        </div>

        <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
          Live Data
        </div>
      </div>

      <div className="h-[300px] md:h-[450px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;