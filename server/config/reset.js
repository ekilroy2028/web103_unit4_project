import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env') })

import { pool } from './database.js'

const createTables = async () => {
  const sql = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE cars (
      id          SERIAL PRIMARY KEY,
      name        TEXT NOT NULL,
      color       TEXT NOT NULL,
      wheels      TEXT NOT NULL,
      interior    TEXT NOT NULL,
      engine      TEXT NOT NULL,
      total_price NUMERIC NOT NULL,
      created_at  TIMESTAMP DEFAULT NOW()
    );
  `
  await pool.query(sql)
  console.log('Tables created!')
  pool.end()
}

createTables()