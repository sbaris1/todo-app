//  Imports the pg module (PostgreSQL driver for Node.js).
import pkg from 'pg';

//  Loads .env values for database connection.
import dotenv from 'dotenv';
dotenv.config();


//  Extracts Pool class — used to create a pool of database connections.
const { Pool } = pkg;


//  Creates the actual database pool using .env values. This lets your app send queries to PostgreSQL.
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


// Makes this pool available to other files (like todos.js).
export default pool;