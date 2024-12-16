module.exports = {
  routes: [
    {
      method: "GET",
      path: "/add",
      handler: "message.addCourse",
      config: {
        auth: false,
      },
    },
  ],
};
