import type{ Request, Response, NextFunction } from 'express';

/* Simple in-memory rate limiter — 5 requests per 10 minutes per IP */
const store = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

export const rateLimiter = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const ip = req.ip ?? 'unknown';
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    next();
    return;
  }

  if (entry.count >= MAX_REQUESTS) {
    res.status(429).json({
      success: false,
      message: 'Too many requests. Please wait a few minutes and try again.',
    });
    return;
  }

  entry.count += 1;
  next();
};