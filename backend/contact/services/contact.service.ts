import nodemailer from 'nodemailer';
import type{ ContactInput } from '../valiadtion/contact.validation.js';

/* ── Budget label map ── */
const budgetLabels: Record<string, string> = {
  'under-500': 'Under $500',
  '500-1000': '$500 – $1,000',
  '1000-3000': '$1,000 – $3,000',
  '3000-5000': '$3,000 – $5,000',
  '5000+': '$5,000+',
};

/* ── Build transporter ── */
const buildTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });

/* ── HTML email template ── */
const buildEmailHtml = (data: ContactInput): string => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: Arial, sans-serif; background: #0f0f0f; color: #e2e8f0; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #1a1a1a; border-radius: 12px; overflow: hidden; border: 1px solid #2a2a2a; }
        .header { background: #b8f56a; padding: 28px 32px; }
        .header h1 { margin: 0; color: #0f0f0f; font-size: 22px; font-weight: 700; }
        .body { padding: 32px; }
        .field { margin-bottom: 20px; }
        .field-label { font-size: 11px; font-weight: 600; letter-spacing: 2px; color: #b8f56a; text-transform: uppercase; margin-bottom: 6px; }
        .field-value { font-size: 15px; color: #e2e8f0; background: #232323; border-radius: 8px; padding: 12px 16px; border: 1px solid #2e2e2e; }
        .footer { padding: 20px 32px; border-top: 1px solid #2a2a2a; font-size: 12px; color: #555; text-align: center; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>📬 New Contact Form Submission</h1>
        </div>
        <div class="body">
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${data.name}</div>
          </div>
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value">${data.email}</div>
          </div>
          <div class="field">
            <div class="field-label">Location</div>
            <div class="field-value">${data.location}</div>
          </div>
          <div class="field">
            <div class="field-label">Budget Range</div>
            <div class="field-value">${budgetLabels[data.budget]}</div>
          </div>
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${data.message}</div>
          </div>
          <div class="field">
            <div class="field-label">Project Details</div>
            <div class="field-value">${data.projectDetails}</div>
          </div>
        </div>
        <div class="footer">Sent via portfolio contact form • ${new Date().toUTCString()}</div>
      </div>
    </body>
  </html>
`;

/* ── Service function ── */
export const sendContactEmail = async (
  data: ContactInput,
): Promise<{ id: string; createdAt: string }> => {
  const transporter = buildTransporter();

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    replyTo: data.email,
    subject: `New message from ${data.name} — Portfolio`,
    html: buildEmailHtml(data),
  });

  return {
    id: `msg_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
};