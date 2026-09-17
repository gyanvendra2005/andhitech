import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { sendNotificationEmail } from '@/lib/mail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, product, notes } = body;

    if (!name || !email || !product) {
      return NextResponse.json(
        { error: 'Name, email and product selection are required.' },
        { status: 400 }
      );
    }

    // 1. Save in MySQL
    const sql = `
      INSERT INTO quote_requests (name, email, company, phone, product, notes)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    await pool.execute(sql, [
      name,
      email,
      company || '',
      phone || '',
      product,
      notes || '',
    ]);

    // 2. Send SMTP Email Notification
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #060b18; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; color: #d4af37;">New RFQ / Quote Request</h2>
        </div>
        <div style="padding: 24px; color: #1e293b;">
          <p style="font-size: 16px;">A new quote request has been received:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Product:</td><td style="padding: 8px; font-weight: bold; color: #060b18;">${product}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Business Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${company || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone || 'N/A'}</td></tr>
          </table>
          ${
            notes
              ? `<div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #060b18; border-radius: 4px;">
                  <p style="margin: 0; font-weight: bold;">Technical Notes / Specifications:</p>
                  <p style="margin-top: 8px; white-space: pre-wrap;">${notes}</p>
                </div>`
              : ''
          }
        </div>
      </div>
    `;

    await sendNotificationEmail({
      subject: `[Technical RFQ] Quote Request for ${product} from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request recorded and team notified.',
    });
  } catch (error: any) {
    console.error('Error in /api/quote:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request. Please try again.' },
      { status: 500 }
    );
  }
}
