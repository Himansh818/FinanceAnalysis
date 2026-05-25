import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "financeDB",
  password: "@HimanshHelix8$_",
  port: 5432,
});