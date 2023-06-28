const express = require("express");
const { user } = require("../../controllers");
const { authCheck } = require("../../middlewares/authCheck");

const router = express.Router();

router.patch("/update", authCheck, user.updateUser);

module.exports = router;
