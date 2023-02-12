"use strict";

const router = require("express").Router();
const { authorization } = require("../controllers/auth");

router.use("/auth", require("./api/auth"));
router.use("/assets", authorization, require("./api/assets"));

module.exports = router;
