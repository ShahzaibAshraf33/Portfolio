import { Router } from 'express';
import { submitContact } from '../controller/contact.controller.js';

const router = Router();

/**
 * POST /api/contact
 * Submit the contact form
 */
router.post('/', submitContact);

export default router;