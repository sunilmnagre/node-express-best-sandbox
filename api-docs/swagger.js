"use strict";

const config = require("config");

module.exports = {
  openapi: "3.0.1",
  info: {
    title: "<project> REST API's",
    description: "HTTP requests to access and use data using API's",
    version: "1.0.0",
  },
  servers: [
    {
      url: `${config.settings.baseURL}/api`,
    },
  ],
  paths: require("./index"),
  components: {
    securitySchemes: {
      csrf: {
        type: "apiKey",
        name: "csrf",
        in: "header",
      },
    },
  },
};
