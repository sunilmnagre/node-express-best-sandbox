"use strict";

const { validationResult } = require("express-validator");
/**
 * Validate Request body params
 * @param {Array} rules The rules array
 * @param {Object} request The Standard ExpressJS request
 * @param {Object} response The Standard ExpressJS request
 * @param {Function} next The Standard ExpressJS callback function
 * @return {json} Error object or call next function
 */
const validateRules = async (rules, request, response, next) => {
  // Lets run all the valiation rules
  try {
    await Promise.all(rules.map((rule) => rule.run(request)));
  } catch (error) {
    return response.status(400).jsend.fail(error);
  }

  // Check if we get any validation error
  const errors = validationResult(request);
  if (errors.isEmpty()) {
    return next();
  }

  return response.status(400).jsend.fail(errors.array());
};

module.exports = {
  validateRules,
};
