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
    check("firstname")
      .exists()
      .withMessage("firstname - Missing field")
      .isString()
      .withMessage("firstname - Must be string")
      .trim()
      .notEmpty()
      .withMessage("firstname - Required field"),

    check("lastname")
      .exists()
      .withMessage("lastname - Missing field")
      .isString()
      .withMessage("lastname - Must be string")
      .trim()
      .notEmpty()
      .withMessage("lastname - Required field"),
  ];

  // Lets validate request
  validateRules(rules, request, response, next);
};
module.exports = {
  _post,
};
