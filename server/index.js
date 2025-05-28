// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bookingsRoute from './routes/bookings.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  "https://dr-detailer-i2dd0egcp-kevins-projects-34e71484.vercel.app",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Respond to preflight CORS requests
app.options("*", cors());

app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/bookings', bookingsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
