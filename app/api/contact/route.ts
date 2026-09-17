import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { sendNotificationEmail } from '@/lib/mail';

export async function POST(req: Request) {
  let dbSuccess = false;
  let dbError = '';
  let mailSuccess = false;
  let mailError = '';

  try {
    const body = await req.json();
    const { fullName, email, organization, phone, inquiryType, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Full name, email and message are required.' },
        { status: 400 }
      );
    }

    // 1. Try to Save in MySQL (phpMyAdmin database)
    try {
      const sql = `
        INSERT INTO contact_inquiries (full_name, email, organization, phone, inquiry_type, message)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      await pool.execute(sql, [
        fullName,
        email,
        organization || '',
        phone || '',
        inquiryType || 'General Inquiry',
        message,
      ]);
      dbSuccess = true;
    } catch (err: any) {
      console.error('MySQL DB Error in /api/contact:', err);
      dbError = err.message || 'Database connection error';
    }

    // 2. Try to Send SMTP Email Notification
    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #060b18; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">New Contact Inquiry - AHIL</h2>
          </div>
          <div style="padding: 24px; color: #1e293b;">
            <p style="font-size: 16px;">A new contact inquiry has been submitted via the AHIL website:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${fullName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Organization:</td><td style="padding: 8px;">${organization || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Inquiry Type:</td><td style="padding: 8px;">${inquiryType || 'General Inquiry'}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #d4af37; border-radius: 4px;">
              <p style="margin: 0; font-weight: bold;">Message:</p>
              <p style="margin-top: 8px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `;

      const mailRes = await sendNotificationEmail({
        subject: `[Contact Form] ${inquiryType || 'Inquiry'} from ${fullName}`,
        html: emailHtml,
        replyTo: email,
      });

      mailSuccess = mailRes.success;
      if (!mailRes.success) {
        mailError = mailRes.error || mailRes.reason || 'Failed to send SMTP mail';
      }
    } catch (err: any) {
      console.error('SMTP Mail Error in /api/contact:', err);
      mailError = err.message || 'SMTP Email error';
    }

    // If both failed, return error with details
    if (!dbSuccess && !mailSuccess) {
      return NextResponse.json(
        {
          error: `Server Error: ${dbError || mailError || 'Failed to process inquiry.'}`,
          details: { dbError, mailError },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      dbSuccess,
      mailSuccess,
      message: dbSuccess
        ? 'Inquiry recorded successfully in database!'
        : 'Inquiry received and notification email sent!',
      warning: dbError || mailError || undefined,
    });
  } catch (error: any) {
    console.error('Fatal Error in /api/contact:', error);
    return NextResponse.json(
      { error: error.message || 'Server Internal Error' },
      { status: 500 }
    );
  }
}
