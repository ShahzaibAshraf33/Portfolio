import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './contact/routes/contact.routes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { rateLimiter } from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ── Middleware ── */
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type'],
  }),
);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

/* ── Rate limiter on contact route ── */
app.use('/api/contact', rateLimiter);

/* ── Routes ── */
// ✅ FIX: Added '/contact' here so it matches the frontend call
app.use('/api/contact', routes); 

/* ── Health check ── */
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

/* ── Global error handler ── */
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;