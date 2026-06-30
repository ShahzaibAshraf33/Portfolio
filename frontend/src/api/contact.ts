import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .trim(),
  location: z
    .string()
    .min(2, 'Location must be at least 2 characters')
    .max(100, 'Location must be less than 100 characters')
    .trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
    .trim(),
  projectDetails: z
    .string()
    .min(20, 'Project details must be at least 20 characters')
    .max(1000, 'Project details must be less than 1000 characters')
    .trim(),
  budget: z
    .string()
    .min(1, 'Please select a budget range'),
});

export type ContactFormData = z.infer<typeof contactSchema>;