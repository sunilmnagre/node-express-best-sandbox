"use strict";

const model = require("../models/assets");

/**
 * Fetch records
 * @param {Object} request The Standard ExpressJS request
 * @param {Object} response The Standard ExpressJS request
 * @return {json} Error object or call next function
 */
const _read = async (request, response) => {
  try {
    return response.jsend.success(await model.find(request));
  } catch (error) {
    return response.status(500).jsend.fail(error);
  }
};

/**
 * Insert Record(s)
 * @param {Object} request The Standard ExpressJS request
 * @param {Object} response The Standard ExpressJS request
 * @return {json} Error object or call next function
 */
const _create = async (request, response) => {};

/**
 * Update Record(s)
 * @param {Object} request The Standard ExpressJS request
 * @param {Object} response The Standard ExpressJS response
 * @return {json} Error object or call next function
 */
const _update = async (request, response) => {};

/**
 * Delete Record(s)
 * @param {Object} request The Standard ExpressJS request
 * @param {Object} response The Standard ExpressJS response
 * @return {object} Error object or call next function
 */
const _delete = async (request, response) => {};

module.exports = {
  _read,
  _create,
  _update,
  _delete,
};
