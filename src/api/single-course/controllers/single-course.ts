/**
 * single-course controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::single-course.single-course", ({ strapi }) => ({
  async enrolledCourseforUser(ctx) {
    const { courseId, userDocId } = ctx.request.query;
    let courseIdx = String(courseId);
    let userDocIdx = String(userDocId);
    console.log("co", courseIdx);

    let data = await strapi.documents("plugin::users-permissions.user").update({
      documentId: userDocIdx,
      data: { enrolledCourses: [courseIdx] },
    });

    await strapi.documents("api::single-course.single-course").update({
      documentId: courseIdx,
      data: {
        enrolledUsers: [{ documentId: userDocIdx }],
      },
    });
    // await strapi.db.query("api::single-course.single-course").update({
    //   where: { id: courseIdx },
    //   data: {},
    // });
    if (data) {
      return {
        data: {
          message: "Successfully,enrolled this course",
          color: "green",
        },
      };
    } else {
      return {
        data: {
          message: "Failed to enroll this course",
          color: "red",
        },
      };
    }
  },
}));
