import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: Request) {
  try {
    const {  email, message,topic } = await request.json();
    
    const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'akhileshmalik908@gmail.com', 
              pass: 'jenddoblgcazatmn',  
            },
          });

          const mailOptions = {
            from: email,
            to: 'akhileshmalik908@gmail.com',
            subject: topic,
            text: ` ${message}`,
          };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Failed to send message.", { status: 500 })
  }
}
