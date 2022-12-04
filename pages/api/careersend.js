// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import { Writable } from "stream";
import formidable from "formidable";

const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 10_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 7,
  allowEmptyFiles: false,
  multiples: false,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

function formidablePromise(req, opts) {
  return new Promise((accept, reject) => {
    const form = formidable(opts);

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return accept({ fields, files });
    });
  });
}

const fileConsumer = (acc) => {
  const writable = new Writable({
    write: (chunk, _enc, next) => {
      acc.push(chunk);
      next();
    },
  });

  return writable;
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(404).end();

  try {
    const chunks = [];

    const { fields, files } = await formidablePromise(req, {
      ...formidableConfig,
      // consume this, otherwise formidable tries to save the file to disk
      fileWriteStreamHandler: () => fileConsumer(chunks),
    });

    //console.log({ fields });
    //console.log({ files });
    const { careerCV } = files;

    const fileData = Buffer.concat(chunks);

    const filename = careerCV?.originalFilename;

    // here you'd pass all the fields and files to the nodemailer transport layer
    const {
      careerName,
      careerEmail,
      careerMessage,
      careerTelephone,
      careerBadge,
    } = fields;

    const attachments = [{ content: fileData, filename }];
    console.log({
      attachments,
      careerName,
    });

    //Email Transporter Settings
    const emailRes = await transporter.sendMail({
      from: `No-reply <site@bevingtonsecurity.com>`,
      replyTo: `${careerName} <${careerEmail}>`,
      to: "deanparkim1987@gmail.com",
      subject: `Career Form Submission from ${careerName}`,
      html: `<p>You have a new Career form submission</p><br>
          <p><strong>Name: </strong> ${careerName}</p><br>
          <p><strong>Email: </strong> ${careerEmail}</p><br>
          <p><strong>Phone Number: </strong> ${careerTelephone}</p><br>
          <p><strong>Badge Number: </strong> ${careerBadge}</p><br>
          <p><strong>Message: </strong> ${careerMessage}</p>`,
      attachments: attachments,
    });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
