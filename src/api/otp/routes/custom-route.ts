module.exports = {
  routes: [
    {
      method: "GET",
      path: "/otps/generate",
      handler: "otp.generateOtp",
    },
    {
      method: "GET",
      path: "/otps/verify",
      handler: "otp.verifyOtp",
    },
  ],
};
