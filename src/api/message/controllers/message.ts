/**
 * message controller
 */

import { factories } from "@strapi/strapi";
//https://youtu.be/gI1oCYibrAg?si=tu9tn1pq4yve8Olk
export default factories.createCoreController("api::message.message", ({ strapi }) => ({
  async find(ctx) {
    const entry = await strapi.db.query("plugin::users-permissions.user").findOne({ where: { email: "b2303050500000@jnu.cse.ac.bd" } });
    console.log("users", entry);
  },
  async addCourse(ctx) {
    console.log(ctx.request.query);
    await strapi.documents("plugin::users-permissions.user").update({
      documentId: "tqim98kdq874uueqk1r24idi",
      data: { enrolledCourses: ["1"] },
    });
    return { data: "custo,controller,Alhamdulillah" };
  },
}));
