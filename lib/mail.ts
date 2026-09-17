import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587/other
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

interface SendEmailParams {
  to?: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendNotificationEmail({ to, subject, html, replyTo }: SendEmailParams) {
  // If SMTP user/pass not configured yet, log to console gracefully instead of throwing fatal crash
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('⚠️ SMTP Credentials missing in .env.local! Email notification skipped.');
    return { success: false, reason: 'SMTP credentials not configured' };
  }

  const recipient = to || process.env.ADMIN_RECEIVER_EMAIL || process.env.SMTP_USER;

  const mailOptions = {
    from: `"${process.env.SMTP_FROM_NAME || 'AHIL Website'}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
    to: recipient,
    replyTo: replyTo || undefined,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('❌ Error sending email via SMTP:', error);
    return { success: false, error: error.message };
  }
}
