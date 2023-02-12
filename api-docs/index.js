"use strict";

const token = require("./token");
const assets = require("./assets");

const routes = {
  ...token,
  ...assets,
};

module.exports = routes;
