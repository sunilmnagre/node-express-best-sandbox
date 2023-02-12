"use strict";

const SERVER_IP = "localhost",
  PROTOCOL = "http";

module.exports = {
  settings: {
    baseURL: `${PROTOCOL}://${SERVER_IP}:<port>`,
  },
};
