import pkg from 'pg';
const { Pool } = pkg;

// Cria a conexão com o banco (Railway usa variáveis de ambiente)
const pool = new Pool({
  connectionString: process.env.Database_URL_Public,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;