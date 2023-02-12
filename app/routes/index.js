"use strict";

const router = require("express").Router();
const { authorization } = require("../controllers/auth");

router.use("/assets", authorization, require("./api/assets"));
router.use("/auth", require("./api/auth"));

module.exports = router;
