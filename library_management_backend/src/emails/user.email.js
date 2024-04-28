import nodemailer from 'nodemailer';
import generateToken from '../utils/generateToken.js';
import * as dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async (options) => {
  try {
    console.log('Sending email...');
    console.log(process.env.USER_ID)
    console.log(process.env.USER_PASS)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_ID, // generated ethereal user
        pass: process.env.USER_PASS // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Elonsol Library 👻" <${process.env.USER_ID}>`, // sender address
      to: options.email, // list of receivers
      subject: "Elonsol Library ✔", // Subject line
      html: options.html // html body
    });
    console.log("email sent");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // re-throw the error to propagate it to the caller
  }
};
