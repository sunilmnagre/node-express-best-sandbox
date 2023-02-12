"use strict";

const SERVER_IP = "127.0.0.1",
  PROTOCOL = "http";

module.exports = {
  settings: {
    baseURL: `${PROTOCOL}://${SERVER_IP}:` + (process.env.PORT || 8001),
  },
  vault: {
    key:
      process.env.ENCRYPTION_KEY ||
      "hFHXD29uVdsMDwz23I62hHw/PZZmzDtG7nAvJAzzyxg=",
    iv: process.env.IV || "TE0a4eBLVmMV2E6t",
  },
};
