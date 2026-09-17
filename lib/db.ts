import mysql from 'mysql2/promise';

// Clean DB_HOST by stripping http://, https://, and trailing slashes if accidentally entered
const rawHost = process.env.DB_HOST || 'localhost';
const cleanHost = rawHost.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').trim();

// Create a connection pool to MySQL database
const pool = mysql.createPool({
  host: cleanHost || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'andhitech_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
