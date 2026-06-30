import type{ Request, Response, NextFunction } from 'express';
import { contactSchema } from '../valiadtion/contact.validation.js';
import { sendContactEmail } from '../services/contact.service.js';
import { ZodError } from 'zod';

export const submitContact = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    /* 1. Validate request body */
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      res.status(422).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
      return;
    }

    /* 2. Call service */
    const result = await sendContactEmail(parsed.data);

    /* 3. Return success */
    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};