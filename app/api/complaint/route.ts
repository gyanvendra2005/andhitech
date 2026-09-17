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
    const {
      date,
      customerRailway,
      depot,
      coachNo,
      productionUnit,
      letterNo,
      letterDate,
      portalComplaintNo,
      product,
      failureDescription,
      failureDate,
      contactPersonName,
      contactDesignation,
      contactPhone,
      contactEmail,
    } = body;

    if (!customerRailway || !depot || !coachNo || !product || !failureDescription || !contactPersonName || !contactPhone || !contactEmail) {
      return NextResponse.json(
        { error: 'Please fill all required complaint fields.' },
        { status: 400 }
      );
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const ticketId = `TKT-${dateStr}-${randomNum}`;

    // 1. Try MySQL Insert
    try {
      const sql = `
        INSERT INTO complaints (
          ticket_id, date, customer_railway, depot, coach_no,
          production_unit, letter_no, letter_date, portal_complaint_no,
          product, failure_description, failure_date,
          contact_person_name, contact_designation, contact_phone, contact_email
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      await pool.execute(sql, [
        ticketId,
        date || new Date().toISOString().slice(0, 10),
        customerRailway,
        depot,
        coachNo,
        productionUnit || '',
        letterNo || '',
        letterDate || null,
        portalComplaintNo || '',
        product,
        failureDescription,
        failureDate || null,
        contactPersonName,
        contactDesignation || '',
        contactPhone,
        contactEmail,
      ]);
      dbSuccess = true;
    } catch (err: any) {
      console.error('MySQL DB Error in /api/complaint:', err);
      dbError = err.message || 'Database error';
    }

    // 2. Try SMTP Notification
    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #991b1b; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">Railway Depot Grievance / Failure Logged</h2>
            <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">Ticket ID: <strong>${ticketId}</strong> (2-Hour SLA)</p>
          </div>
          <div style="padding: 24px; color: #1e293b;">
            <h4 style="margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">1. Depot & Rolling Stock Info</h4>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px; font-weight: bold; width: 150px;">Railway Zone:</td><td style="padding: 6px;">${customerRailway}</td></tr>
              <tr><td style="padding: 6px; font-weight: bold;">Depot:</td><td style="padding: 6px;">${depot}</td></tr>
              <tr><td style="padding: 6px; font-weight: bold;">Coach No:</td><td style="padding: 6px;">${coachNo}</td></tr>
              <tr><td style="padding: 6px; font-weight: bold;">Production Unit:</td><td style="padding: 6px;">${productionUnit || 'N/A'}</td></tr>
              <tr><td style="padding: 6px; font-weight: bold;">Letter No / Date:</td><td style="padding: 6px;">${letterNo || 'N/A'} ${letterDate ? `(${letterDate})` : ''}</td></tr>
            </table>

            <h4 style="margin-top: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">2. Failure & Component Info</h4>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px; font-weight: bold; width: 150px;">Component/Product:</td><td style="padding: 6px; font-weight: bold; color: #991b1b;">${product}</td></tr>
              <tr><td style="padding: 6px; font-weight: bold;">Failure Date:</td><td style="padding: 6px;">${failureDate || 'N/A'}</td></tr>
            </table>
            <div style="margin-top: 12px; padding: 12px; background-color: #fef2f2; border-left: 4px solid #991b1b; border-radius: 4px;">
              <p style="margin: 0; font-weight: bold; color: #991b1b;">Failure Description:</p>
              <p style="margin-top: 6px; white-space: pre-wrap;">${failureDescription}</p>
            </div>

            <h4 style="margin-top: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">3. Contact Officer Details</h4>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px; font-weight: bold; width: 150px;">Officer Name:</td><td style="padding: 6px;">${contactPersonName} ${contactDesignation ? `(${contactDesignation})` : ''}</td></tr>
              <tr><td style="padding: 6px; font-weight: bold;">Phone Number:</td><td style="padding: 6px;">${contactPhone}</td></tr>
              <tr><td style="padding: 6px; font-weight: bold;">Email:</td><td style="padding: 6px;"><a href="mailto:${contactEmail}">${contactEmail}</a></td></tr>
            </table>
          </div>
        </div>
      `;

      const mailRes = await sendNotificationEmail({
        subject: `[CRITICAL GRIEVANCE] Ticket ${ticketId} - ${customerRailway} / ${depot}`,
        html: emailHtml,
        replyTo: contactEmail,
      });

      mailSuccess = mailRes.success;
      if (!mailRes.success) {
        mailError = mailRes.error || mailRes.reason || 'Mail failed';
      }
    } catch (err: any) {
      console.error('SMTP Error in /api/complaint:', err);
      mailError = err.message || 'SMTP error';
    }

    if (!dbSuccess && !mailSuccess) {
      return NextResponse.json(
        {
          error: `Server Error: ${dbError || mailError || 'Failed to record complaint.'}`,
          details: { dbError, mailError },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      ticketId,
      dbSuccess,
      mailSuccess,
      message: 'Complaint processed successfully.',
      warning: dbError || mailError || undefined,
    });
  } catch (error: any) {
    console.error('Fatal Error in /api/complaint:', error);
    return NextResponse.json(
      { error: error.message || 'Server Internal Error' },
      { status: 500 }
    );
  }
}
