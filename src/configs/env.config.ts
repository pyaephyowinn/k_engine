import { config } from 'dotenv';

config();

export const db = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db_name: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};
