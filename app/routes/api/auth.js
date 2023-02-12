"use strict";

const router = require("express").Router();
const validate = require("../validator/auth.validate");
const controller = require("../../controllers/auth");

/*
 * Create new token into the system
 */
router.post("/token", validate.getToken, controller.authentication);

module.exports = router;
