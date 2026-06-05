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
);

type Stock = {
  id: number;
  company: string;
  price: number;
  date: string;
};

const Graph = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const labels = stocks.map((s) => s.date);
  const prices = stocks.map((s) => s.price);

  const data = {
    labels: labels || [],
    datasets: [
      {
        label: "Stock Price 📊",
        data: prices || [],
        borderColor: "blue",
        tension: 0.3,
      },
    ],
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/stocks")
      .then((res) => {
        setStocks(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Graph">
      <h1>Finance Dashboard 📊</h1>
      <Line data={data} />
    </div>
  );
};

export default Graph;
