/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    let entry = await strapi.entityService.findMany("api::product.product", {
      populate: { image: true, ProductSeo: { populate: { shareImage: true } } },
    });

    console.log("entry", entry);
    return { data: entry };
  },
  async create(ctx) {
    console.log("ctx in post of ", ctx.request.body);
    strapi.entityService.create("api::product.product", {
      ...ctx.request.body,
    });
  },
}));
