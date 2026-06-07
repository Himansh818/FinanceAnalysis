import { useEffect, useState } from "react";
import axios from "axios";

type Stock = {
  id: number;
  company: string;
  price: number;
  date: string;
};

const StockList = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/stocks")
      .then((res) => setStocks(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full rounded-3xl border border-slate-700 bg-slate-800 shadow-2xl">
  <div className="border-b border-slate-700 p-6">
    <h2 className="text-2xl font-bold text-white">
      Watchlist
    </h2>
    <p className="mt-1 text-sm text-slate-400">
      Track your stocks in real-time
    </p>
  </div>

  <div className="p-4">
    {stocks.map((s) => (
      <div
        key={s.id}
        className="mb-3 rounded-2xl bg-slate-900 p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-700"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {s.company}
            </h3>

            <p className="text-xs text-slate-400">
              {new Date(s.date).toLocaleDateString()}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold text-green-400">
              ₹{s.price}
            </p>

            <span className="text-xs text-green-400">
              ▲ Active
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default StockList;