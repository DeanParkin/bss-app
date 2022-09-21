// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { contactName, contactEmail, contactMessage } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: `${contactName} <${contactEmail}>`,
      to: "deanparkim1987@gmail.com",
      subject: `Contact Form Submission from ${contactName}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${contactName}</p><br>
      <p><strong>Email: </strong> ${contactEmail}</p><br>
      <p><strong>Message: </strong> ${contactMessage}</p>`,
    });
    console.log("Message sent: %s", emailRes.messageId);
  } catch (error) {
    console.error(error);
  }

  console.log(req.body);
  res.status(200).json(req.body);
}
