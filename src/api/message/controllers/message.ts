/**
 * message controller
 */

import { factories } from "@strapi/strapi";
//https://youtu.be/gI1oCYibrAg?si=tu9tn1pq4yve8Olk
export default factories.createCoreController("api::message.message", ({ strapi }) => ({
  async addCourse(ctx) {
    console.log(ctx.request.query);
    // await strapi.documents("plugin::users-permissions.user").update({
    //   documentId: "tqim98kdq874uueqk1r24idi",
    //   data: { enrolledCourses: ["1"] },
    // });
    return { data: "custo,controller,Alhamdulillah" };
  },
}));
