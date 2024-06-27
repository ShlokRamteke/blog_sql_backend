import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const db = mysql.createConnection({
  user: process.env.DB_USERS,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connected");
});

export default db;
