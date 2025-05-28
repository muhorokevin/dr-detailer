import express from 'express';
import pool from '../db.js';

const router = express.Router();

// 🔴 POST /api/bookings → Save a booking
router.post('/', async (req, res) => {
  const { name, phone, email, service_type, car_type, car_details, date, time, addons } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO bookings 
        (name, phone, email, service_type, car_type, car_details, date, time, addons)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       RETURNING *`,
      [name, phone, email, service_type, car_type, car_details, date, time, addons]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

// 🟢 GET /api/bookings → Fetch all bookings
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookings ORDER BY date DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

export default router;
