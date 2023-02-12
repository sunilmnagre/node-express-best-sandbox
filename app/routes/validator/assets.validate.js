"use strict";

const { check } = require("express-validator");
const { validateRules } = require("./generic");

/**
 * Validate the input request
 * @param {Object} request The Standard ExpressJS request
 * @param {Object} response The Standard ExpressJS request
 * @param {Function} next The Standard ExpressJS callback function
 * @return {json} Error object or call next function
 */
const _post = (request, response, next) => {
  // Define rule for each params
  const rules = [
    check("title")
      .exists()
      .withMessage("title - Missing field")
      .isString()
      .withMessage("title - Must be string")
      .trim()
      .notEmpty()
      .withMessage("title - Required field"),
  ];

  // Lets validate request
  validateRules(rules, request, response, next);
};
module.exports = {
  _post,
};
