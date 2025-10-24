import pkg from "pg";
const { Pool } = pkg;

// Se estiver no Railway, ele vai usar a variável DATABASE_URL
const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: process.env.Database_URL_Public,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

export default pool;