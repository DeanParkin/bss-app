// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { mailingListEmail } = req.body;

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
      from: `${mailingListEmail}`,
      to: "deanparkim1987@gmail.com",
      subject: `New Mailing List Submission from ${mailingListEmail}`,
      html: `<p>Please add this contact to the mailing list</p><br>
      <p><strong>Email: </strong> ${mailingListEmail}</p><br>`,
    });
    console.log("Message sent: %s", emailRes.messageId);
  } catch (error) {
    console.error(error);
  }

  console.log(req.body);
  res.status(200).json(req.body);
}
