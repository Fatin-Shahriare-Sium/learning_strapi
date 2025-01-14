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
    user: "b230305050@cse.jnu.ac.bd",
    pass: "aasn qhrt kebo gpcg",
  },
});

export default factories.createCoreService("api::otp.otp", ({ strapi }) => ({
  async sendMailWithOTP(email, OTPcode) {
    const mailOptions = {
      from: "b230305050@cse.jnu.ac.bd",
      to: "sium1206@gmail.com",
      subject: "Allah is Almighty",
      text: "This is a test email sent using Nodemailer.",
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
