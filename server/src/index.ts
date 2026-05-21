import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

type Stock = {
  id: number;
  company: string;
  price: number;
  date: string;
};

const stocks: Stock[] = [
  { id: 1, company: "Tesla", price: 220, date: "2026-05-01" },
  { id: 2, company: "Apple", price: 180, date: "2026-05-02" },
  { id: 3, company: "Google", price: 250, date: "2026-05-03" },
  { id: 4, company: "JPMorgan", price: 180, date: "2026-05-04" },
];

app.get("/", (req, res) => {
  res.send("Finance API running 🚀");
});

app.get("/stocks", (req, res) => {
  res.json(stocks);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});