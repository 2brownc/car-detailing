import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

function sendEmail(name: any, message: any) {
  const from = `"PK Detailing Website Contact Form" <${process.env.EMAIL_FROM}>`;
  const to = `${process.env.EMAIL_TO}`;
  const subject = `${name} - Auto detailing onderzoek`;
  const text = `${message}`;
  // const html = `<p>${message}</p>`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  })
  return transporter.sendMail({
    from,
    to,
    subject,
    text,
    //html
  });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const name = req.body.name;
    const message = req.body.message;
    sendEmail(name, message)
      .then(m => {
        res.status(200).json(m);
      })
      .catch(e => {
        res.status(500).json(e);
      });
  }
}

