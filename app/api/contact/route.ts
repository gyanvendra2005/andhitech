import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { sendNotificationEmail } from '@/lib/mail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, organization, phone, inquiryType, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Full name, email and message are required.' },
        { status: 400 }
      );
    }

    // 1. Save in MySQL (phpMyAdmin database)
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

    // 2. Send SMTP Email Notification
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

    await sendNotificationEmail({
      subject: `[Contact Form] ${inquiryType || 'Inquiry'} from ${fullName}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry saved to database and email notification sent.',
    });
  } catch (error: any) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
