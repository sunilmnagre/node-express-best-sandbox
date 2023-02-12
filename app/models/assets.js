"use strict";

const mClient = require("../../boot/mongo-connect").init;
const MODEL = "User";

/**
 * Find objects with an optional filter for include/fields.
 * @param {Object} request The Standard ExpressJS request
 * @return {Object} - Collection object or error
 */
const find = async (request) => {
  try {
    let db = await mClient();
    // Build your query for execution
    //let exec = await mClient.find();

    const result = [
      {
        id: 123,
        title: "I'm asset",
        dateAdded: new Date(),
      },
      {
        id: 456,
        title: "I'm another asset",
        dateAdded: new Date(),
      },
    ];

    return result;
  } catch (error) {
    throw "Error fetching records";
  }
};

/**
 * Create an object(s) into model
 * @param {Object} data - Requested data
 * @return {Object} - Collection object or error
 */
const insert = async (data) => {
  // try {
  //   let db = await mClient();
  //   let result = await db.collection(MODEL).insertOne(data);
  //   if (result && result.result.ok === 1) {
  //     return {
  //       isSuccess: true,
  //       data: result.ops[0],
  //     };
  //   }
  //   return false;
  // } catch (error) {
  //   throw error;
  // }
};

/**
 * Update an object(s) into model
 * @param {String} criteria - Record ID
 * @param {Object} data - Requested data
 * @return {Object} - Collection object or error
 */
const updateOne = async (criteria, data) => {};

/**
 * Remove an object(s) from model
 * @param {String} id - Record ID
 * @return {Object} - Success or error
 */
const remove = async (id) => {};

module.exports = {
  find,
  insert,
  updateOne,
  remove,
};
