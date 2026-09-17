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
    const { fullName, email, phone, roleOfInterest, experience, notes } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Full name, email and phone number are required.' },
        { status: 400 }
      );
    }

    // 1. Try MySQL Insert
    try {
      const sql = `
        INSERT INTO career_applications (full_name, email, phone, role_of_interest, experience, notes)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      await pool.execute(sql, [
        fullName,
        email,
        phone,
        roleOfInterest || 'General Application',
        experience || '',
        notes || '',
      ]);
      dbSuccess = true;
    } catch (err: any) {
      console.error('MySQL DB Error in /api/career:', err);
      dbError = err.message || 'Database error';
    }

    // 2. Try SMTP Email
    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #060b18; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">New Job Application - AHIL Careers</h2>
          </div>
          <div style="padding: 24px; color: #1e293b;">
            <p style="font-size: 16px;">A new candidate application has been submitted:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Applicant Name:</td><td style="padding: 8px;">${fullName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Role of Interest:</td><td style="padding: 8px;">${roleOfInterest || 'General Application'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Experience:</td><td style="padding: 8px;">${experience || 'N/A'}</td></tr>
            </table>
            ${
              notes
                ? `<div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #d4af37; border-radius: 4px;">
                    <p style="margin: 0; font-weight: bold;">Applicant Message / Cover Note:</p>
                    <p style="margin-top: 8px; white-space: pre-wrap;">${notes}</p>
                  </div>`
                : ''
            }
          </div>
        </div>
      `;

      const mailRes = await sendNotificationEmail({
        subject: `[AHIL Careers] Job Application from ${fullName} (${roleOfInterest || 'General'})`,
        html: emailHtml,
        replyTo: email,
      });

      mailSuccess = mailRes.success;
      if (!mailRes.success) {
        mailError = mailRes.error || mailRes.reason || 'Mail failed';
      }
    } catch (err: any) {
      console.error('SMTP Mail Error in /api/career:', err);
      mailError = err.message || 'SMTP error';
    }

    if (!dbSuccess && !mailSuccess) {
      return NextResponse.json(
        {
          error: `Server Error: ${dbError || mailError || 'Failed to process application.'}`,
          details: { dbError, mailError },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      dbSuccess,
      mailSuccess,
      message: 'Application recorded successfully.',
      warning: dbError || mailError || undefined,
    });
  } catch (error: any) {
    console.error('Fatal Error in /api/career:', error);
    return NextResponse.json(
      { error: error.message || 'Server Internal Error' },
      { status: 500 }
    );
  }
}
