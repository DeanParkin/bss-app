// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const {
    giftContactName,
    giftContactEmail,
    giftContactMessage,
    amount,
    giftContactPhoneNumber,
  } = req.body;

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
      from: `${giftContactName} <${giftContactEmail}>`,
      to: "deanparkim1987@gmail.com",
      subject: `Contact Form Submission from ${giftContactName}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${giftContactName}</p><br>
      <p><strong>Email: </strong> ${giftContactEmail}</p><br>
      <p><strong>Phone Number: </strong> ${giftContactPhoneNumber}</p><br>
      <p><strong>Amount: </strong> ${amount}</p><br>
      <p><strong>Message: </strong> ${giftContactMessage}</p>`,
    });
    console.log("Message sent: %s", emailRes.messageId);
  } catch (error) {
    console.error(error);
  }

  console.log(req.body);
  res.status(200).json(req.body);
}
