// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer";
import multer from "multer";

export default async function handler(req, res) {
  let Storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "../../files");
    },
    filename: (req, file, callback) => {
      console.log(file);
      callback(
        null,
        file.fieldname + "_" + Date.now() + "_" + file.originalname
      );
    },
  });

  let upload = multer({
    storage: Storage,
  }).single("careerCV");

  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("something went wrong");
    } else {
      var {
        careerName,
        careerEmail,
        careerMessage,
        careerTelephone,
        careerBadge,
        careerCV,
      } = req.body;
      console.log(careerName);
      console.log(careerEmail);
      console.log(careerMessage);
      console.log(careerTelephone);
      console.log(careerBadge);
      console.log(careerCV);
    }
  });

  // const {
  //   careerName,
  //   careerEmail,
  //   careerMessage,
  //   careerTelephone,
  //   careerBadge,
  //   careerCV,
  // } = req.body;

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.user,
  //     pass: process.env.pass,
  //   },
  // });

  // try {
  //   const emailRes = await transporter.sendMail({
  //     from: `${careerName} <${careerEmail}>`,
  //     replyTo: `${careerName} <${careerEmail}>`,
  //     to: "deanparkim1987@gmail.com",
  //     subject: `Career Form Submission from ${careerName}`,
  //     html: `<p>You have a new Career form submission</p><br>
  //     <p><strong>Name: </strong> ${careerName}</p><br>
  //     <p><strong>Email: </strong> ${careerEmail}</p><br>
  //     <p><strong>Phone Number: </strong> ${careerTelephone}</p><br>
  //     <p><strong>Badge Number: </strong> ${careerBadge}</p><br>
  //     <p><strong>Message: </strong> ${careerMessage}</p>`,
  //     attachments: careerCV,
  //   });
  //   console.log("Message sent: %s", emailRes.messageId);
  // } catch (error) {
  //   console.error(error);
  // }

  console.log(req.body);
  res.status(200).json(req.body);
}
