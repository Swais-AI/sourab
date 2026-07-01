import { NextResponse } from 'next/server';
import postgres from 'postgres';
export const dynamic = 'force-dynamic';
const sql = postgres(process.env.DATABASE_URL, { 
  ssl: "require",
  transform: postgres.camel
});
export async function GET(request) {
  try {
    const notices = await sql`
      SELECT 
        notice_id as id,
        notice_title as title,
        notice_text as description,
        applicable_class as target_audience,
        notice_date as notice_date,
        created_datetime as created_at,
        CASE WHEN record_status = 'Active' THEN 'active' ELSE 'inactive' END as status
      FROM sss_notice_board
      WHERE record_status = 'Active' OR record_status IS NULL
      ORDER BY notice_id DESC
      LIMIT 100
    `;
    
    const formatted = notices.map(n => ({
      id: n.id,
      title: n.title,
      description: n.description,
      targetAudience: n.targetAudience,
      noticeDate: n.noticeDate,
      createdAt: n.createdAt,
      status: n.status
    }));
    
    return NextResponse.json({ success: true, notices: formatted });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, description, targetAudience, noticeDate, status } = body;
    
    const isActive = status === 'active';
    const currentDate = noticeDate || new Date().toISOString().split('T')[0];
    
    const result = await sql`
      INSERT INTO sss_notice_board (
        notice_title,
        notice_text,
        applicable_class,
        notice_date,
        created_datetime,
        record_status
      )
      VALUES (
        ${title}, 
        ${description || null},
        ${targetAudience || null},
        ${currentDate},
        NOW(),
        'Active'
      )
      RETURNING notice_id as id
    `;
    
    return NextResponse.json({ success: true, message: 'Notice added successfully', notice: result[0] });
  } catch (error) {
    console.error('Error inserting notice:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
