import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactUsEmailToClient from "@/components/emails/ContactUsEmailToClient";

export async function POST(request) {
  const data = await request.json();
  const { firstName, lastName, emailAddress, phoneNumber } = data;

  const emailToClientHtml = render(
    <ContactUsEmailToClient
      firstName={firstName}
      emailAddress={emailAddress}
      phoneNumber={phoneNumber}
    />
  );

  // const emailToAgencyHtml = render(
  //   <ContactUsEmailToAgency
  //     firstName={firstName}
  //     lastName={lastName}
  //     emailAddress={emailAddress}
  //     phoneNumber={phoneNumber}
  //     companyName={companyName}
  //     websiteURL={websiteURL}
  //     projectDescription={projectDescription}
  //     expectedResults={expectedResults}
  //     budget={budget}
  //   />,
  // );

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_NODEMAILER_HOST,
      port: process.env.NEXT_PUBLIC_NODEMAILER_PORT,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_USER,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
      },
    });

    const mailOptionToAgency = {
      from: `Ultra GSM Construction <${process.env.NEXT_PUBLIC_NODEMAILER_USER}>`,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      subject: "Contact Us Submission",
      html: `
          <h3>Contact Us Submission</h3>
          <li> Name: ${firstName} ${lastName}</li>
          <li> Email: ${emailAddress}</li>
          <li> Phone Number: ${phoneNumber}</li>
          `,
    };

    const mailOptionToClient = {
      from: `Ultra GSM Construction <${process.env.NEXT_PUBLIC_NODEMAILER_USER}>`,
      to: emailAddress,
      subject: "Thank You for Contacting Ultra GSM Construction",
      html: emailToClientHtml,
    };

    await transporter.sendMail(mailOptionToAgency);
    await transporter.sendMail(mailOptionToClient);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
