"use strict";

/**
 * Validate the input request
 * @param {Object} request The Standard ExpressJS request
 * @param {Object} response The Standard ExpressJS request
 * @param {Function} next The Standard ExpressJS callback function
 * @return {json} Error object or call next function
 */
const getToken = (request, response, next) => {
  const errors = [];
  const attributes = ["_Identity"];
  const params = request.body;

  attributes.forEach((attribute) => {
    if (!params.hasOwnProperty(attribute) || !params[attribute]) {
      errors.push(attribute);
    }
  });

  if (errors.length > 0) {
    // Keeping consistency on response
    let failed = {
      msg: "Missing field(s)",
      location: "body",
    };
    return response.status(400).jsend.fail([failed]);
  }
  return next();
};

module.exports = {
  getToken,
};
