const express = require("express");
const { hello } = require("../controller/user");
const router = express.Router();
router.get("/", hello);

module.exports = router;
