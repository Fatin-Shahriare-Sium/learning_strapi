/**
 * single-course controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::single-course.single-course", ({ strapi }) => ({
  async enrolledCourseforUser(ctx) {
    const { courseId, userDocId } = ctx.request.query;
    let courseIdx = String(courseId);
    let userDocIdx = String(userDocId);
    await strapi.documents("plugin::users-permissions.user").update({
      documentId: userDocIdx,
      data: { enrolledCourses: [courseIdx] },
    });
    return { data: ctx.request.query };
  },
}));
