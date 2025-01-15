/**
 * otp service
 */
const nodemailer = require("nodemailer");
import { factories } from "@strapi/strapi";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_GMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

export default factories.createCoreService("api::otp.otp", ({ strapi }) => ({
  async sendMailWithOTP(email, OTPcode) {
    const mailOptions = {
      from: "b230305050@cse.jnu.ac.bd",
      to: email,
      subject: "OTP from LMS",
      text: `Your otp code is ${OTPcode}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
    console.log("got amil service", process.env.MAIL_PASSWORD);
  },
}));
