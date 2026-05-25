import express from "express";
import cors from "cors";
import { pool } from "./db";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Finance API running 🚀");
});

app.post("/stock", async (req, res) => {
  const { company, price, date } = req.body;

  const result = await pool.query(
    "INSERT INTO stocks (company, price, date) VALUES ($1, $2, $3) RETURNING *",
    [company, price, date]
  );

  res.json({
    message: "Added stock successfully!",
    stock: result.rows[0],
  });
});

app.get("/stocks", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM stocks ORDER BY id ASC"
  );

  res.json({
    result:result.rows,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});