import { useEffect, useState } from "react";
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

function App() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const labels  = stocks.map((s) => s.date);
  const prices = stocks.map((s) => s.price);
  const [sto, setSto] = useState<string>("");

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
    <>
    <div className="main">
      <section id="center">
        <div>
          <h1>Stocks Lists 📊</h1>

          {stocks.map((s) => (
            <div key={s.id}>
              {s.company} - ₹{s.price}
            </div>
          ))}
        </div>

        <div>
          <h1>Finance Dashboard 📊</h1>

          <Line data={data} />
        </div>
      </section>
      <section id="down">
          <form className="addStocks"
          onSubmit={(e)=>{
              e.preventDefault();
              console.log(sto);
              setSto("");
            }}>
            <input 
            value={sto}
            onChange={(e)=>{
              setSto(e.target.value);
            }}
            type="text" placeholder="Add Stocks.." />
            <button type="submit">
              Put In
            </button>
          </form>
      </section>
    </div>
      
    </>
  );
}

export default App;
