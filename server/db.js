import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv-flow';
import pkg from 'pg';

const { Pool } = pkg;

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env from parent dir (root)
config({ path: path.join(__dirname, '..') });

console.log("DEBUG (dotenv-flow):", process.env.DB_PASSWORD);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default pool;
