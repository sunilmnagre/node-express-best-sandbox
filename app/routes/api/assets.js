"use strict";

const controller = require("../../controllers/assets");
const validate = require("../validator/assets.validate");
const router = require("express").Router();

/*
 * Get List of records or selected record by ID
 */
router.get("/:id?", controller._read);

/*
 * Create new record into the system
 */
router.post("/", validate._post, controller._create);

/*
 * Update existing record into the system
 */
router.put("/:id", controller._update);

/*
 * delete unwanted record from system
 */
router.delete("/:id", controller._delete);

module.exports = router;
