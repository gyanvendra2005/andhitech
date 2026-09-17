import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { sendNotificationEmail } from '@/lib/mail';

export async function POST(req: Request) {
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

    // Generate Ticket ID e.g. TKT-20260917-8492
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const ticketId = `TKT-${dateStr}-${randomNum}`;

    // 1. Insert into MySQL (phpMyAdmin)
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

    // 2. Send SMTP Notification to Quality Control & Admin
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

    await sendNotificationEmail({
      subject: `[CRITICAL GRIEVANCE] Ticket ${ticketId} - ${customerRailway} / ${depot}`,
      html: emailHtml,
      replyTo: contactEmail,
    });

    return NextResponse.json({
      success: true,
      ticketId,
      message: 'Complaint logged successfully with Ticket ID.',
    });
  } catch (error: any) {
    console.error('Error in /api/complaint:', error);
    return NextResponse.json(
      { error: 'Failed to record complaint. Please try again.' },
      { status: 500 }
    );
  }
}
