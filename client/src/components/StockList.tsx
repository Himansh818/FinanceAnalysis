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
      .then((res) => {
        setStocks(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="stockLists">
      <h1>Stocks Lists 📊</h1>

            {stocks.map((s) => (
              <div key={s.id}>
                {s.company} - ₹{s.price}
              </div>
            ))}
    </div>
  )
}

export default StockList
