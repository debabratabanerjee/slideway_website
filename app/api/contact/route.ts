import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const {
        first_name,
        last_name,
        email,
        company_name,
        help,
        company_size,
        info,
      } = await req.json();

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "debabratabanerjee023@gmail.com",
          pass: "gwfu eoex sebd gavr ",
        },
      });

      const mailOptions = {
        from: email,
        to: "info@slideway.dev",
        subject: "Contact Form Submission from SLIDEWAY.DEV",
        html: `
          <h1>Contact Form</h1>
          <p>First Name: ${first_name}</p>
          <p>Last Name: ${last_name}</p>
          <p>Work Email: ${email}</p>
          <p>Company Name: ${company_name}</p>
          <p>Company Size: ${company_size}</p>
          <p>Help: ${help}</p>
          <p>Info: ${info}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json("Email has been sent");
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json("Email has not been sent");
    }
  } else {
    return NextResponse.json("Method not allowed");
  }
}
