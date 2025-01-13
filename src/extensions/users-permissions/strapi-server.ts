export default (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    console.log("fgauysu", ctx.request.body);

    let { name, phone, profilePicture } = ctx.request.body;
    console.log("hitting udaper me", ctx.state.user);
    try {
      const user = ctx.state.user;
      if (!user) {
        return ctx.unauthorized("You must be logged in to update your profile.");
      }
      const data = ctx.request.body;
      console.log("data", data);

      const updatedUser = await strapi.documents("plugin::users-permissions.user").update({
        documentId: user.documentId,
        data: { username: name, phoneNumber: phone, profilePic: profilePicture },
      });

      return ctx.send(updatedUser);
    } catch (err) {
      console.error("Error updating user:", err);
      return ctx.badRequest("Unable to update user.");
    }
  };
  plugin.routes["content-api"].routes.push({
    method: "PUT",
    path: "/user/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
      policies: [],
    },
  });

  return plugin;
};
