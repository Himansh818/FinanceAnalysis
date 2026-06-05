import { useEffect, useState } from "react";
import axios from "axios";
import Graph from "./components/Graph";
import StockList from "./components/StockList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './pp.css';


type Stock = {
  id: number;
  company: string;
  price: number;
  date: string;
};

function App() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [stockForm, setStockForm] = useState({
    company: "",
    price: "",
    date: "",
  });

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
    <Header />
      <div className="main">
        <section id="center">
          <div>
            
            <StockList />
           
          </div>
          <div>
            
            <Graph />

          </div>
        </section>
        
        <section id="down">
          <form
            className="addStocks"
            onSubmit={async (e) => {
              e.preventDefault();

              try {

                // console.log(stockForm);
                await axios.post("http://localhost:5000/stocks", {
                  company: stockForm.company,
                  price: Number(stockForm.price),
                  date: stockForm.date,
                });
                alert("hogya !")

                const res = await axios.get("http://localhost:5000/stocks");
                setStocks(res.data.result);
                console.log(stocks)
                setStockForm({
                  company: "",
                  price: "",
                  date: "",
                });
                
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <h3>Add Stock</h3>
            <input
              type="text"
              placeholder="Company Name"
              value={stockForm.company}
              onChange={(e) => {
                setStockForm({
                  ...stockForm,
                  company: e.target.value,
                });
              }}
            />

            <input
              type="Number"
              placeholder="Company Price"
              value={stockForm.price}
              onChange={(e) => {
                setStockForm({
                  ...stockForm,
                  price: e.target.value,
                });
              }}
            />

            <input
              type="date"
              placeholder="Date"
              value={stockForm.date}
              onChange={(e) => {
                setStockForm({
                  ...stockForm,
                  date: e.target.value,
                });
              }}
            />
            <button type="submit">Put In</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
