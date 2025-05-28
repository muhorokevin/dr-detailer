// server/routes/admin.js
import express from 'express';
import pool from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecurekey';

// ✅ Admin Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM admin_users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// ✅ Admin Signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing = await pool.query('SELECT * FROM admin_users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO admin_users (email, password) VALUES ($1, $2)',
      [email, hashedPassword]
    );

    res.status(201).json({ message: 'Admin registered' });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: 'Internal error' });
  }
});

// ✅ Forgot Password
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const result = await pool.query("SELECT * FROM admin_users WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "15m" });
    const resetLink = `http://localhost:5173/reset-password/${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reset Password - Dr.Detailer",
      html: `<p>Click the link below to reset your password:</p><a href="${resetLink}">${resetLink}</a>`,
    });

    res.json({ message: "Password reset link sent" });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Reset Password
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const hashed = await bcrypt.hash(password, 10);

    await pool.query("UPDATE admin_users SET password = $1 WHERE email = $2", [hashed, decoded.email]);
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Reset error:", err);
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

export default router;
