import { pool } from '../config/database.js'

export const getCars = async (req, res) => {
  const result = await pool.query('SELECT * FROM cars ORDER BY created_at DESC')
  res.json(result.rows)
}

export const getCar = async (req, res) => {
  const { id } = req.params
  const result = await pool.query('SELECT * FROM cars WHERE id = $1', [id])
  res.json(result.rows[0])
}

export const createCar = async (req, res) => {
  const { name, color, wheels, interior, engine, total_price } = req.body
  const result = await pool.query(
    'INSERT INTO cars (name, color, wheels, interior, engine, total_price) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [name, color, wheels, interior, engine, total_price]
  )
  res.json(result.rows[0])
}

export const updateCar = async (req, res) => {
  const { id } = req.params
  const { name, color, wheels, interior, engine, total_price } = req.body
  const result = await pool.query(
    'UPDATE cars SET name=$1, color=$2, wheels=$3, interior=$4, engine=$5, total_price=$6 WHERE id=$7 RETURNING *',
    [name, color, wheels, interior, engine, total_price, id]
  )
  res.json(result.rows[0])
}

export const deleteCar = async (req, res) => {
  const { id } = req.params
  await pool.query('DELETE FROM cars WHERE id = $1', [id])
  res.json({ message: 'Car deleted' })
}