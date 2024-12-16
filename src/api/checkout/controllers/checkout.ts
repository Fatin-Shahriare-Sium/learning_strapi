/**
 * checkout controller
 */

import { factories } from "@strapi/strapi";
const { BkashGateway } = require("bkash-payment-gateway");

const bkashConfig = {
  baseURL: "https://checkout.sandbox.bka.sh/v1.2.0-beta", //do not add a trailing slash
  key: "abcdxx2369",
  username: "bkashTest",
  password: "bkashPassword1",
  secret: "bkashSup3rS3cRet",
};
const bkash = new BkashGateway(bkashConfig);
export default factories.createCoreController("api::checkout.checkout", ({ strapi }) => ({
  async create(ctx) {
    //console.log("ctx in post of ", bkash);
    const paymentRequest = {
      amount: 1000,
      orderID: "ORD1020069",
      intent: "sale",
    };

    const result = await bkash.createPayment(paymentRequest);
    console.log("result checkout", result);
    // strapi.entityService.create("api::product.product", {
    //   ...ctx.request.body,
    // });
  },
}));
