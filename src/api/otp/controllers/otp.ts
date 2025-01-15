/**
 * otp controller
 */
function generateOTPCode() {
  // Declare a digits variable
  // which stores all digits
  let digits = "0123456789";
  let OTP = "";
  let len = digits.length;
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * len)];
  }

  return OTP;
}

import { data } from "@remix-run/router";
import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::otp.otp", ({ strapi }) => ({
  async generateOtp(ctx) {
    let { otpEmail } = ctx.request.query as { otpEmail: string };
    let otpCode = generateOTPCode();

    let otpData = await strapi.entityService.create("api::otp.otp", {
      data: {
        email: otpEmail,
        code: otpCode,
      },
    });
    await strapi.service("api::otp.otp").sendMailWithOTP(otpEmail, otpCode);
    console.log("generate otp log", otpData);
    return {
      isOTPGenerated: true,
      data: otpData,
    };
  },
  async verifyOtp(ctx) {
    let { OTPdocumentId, OTPcode } = ctx.request.query as { OTPdocumentId: string; OTPcode: string };
    console.log(ctx.request.query);

    let gotOTPData = await strapi.documents("api::otp.otp").findOne({
      documentId: OTPdocumentId,
    });
    console.log(gotOTPData);

    if (gotOTPData.code == OTPcode) {
      return {
        verifiedOTP: true,
      };
    } else {
      return {
        verifiedOTP: false,
      };
    }
  },
}));
