const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const router = express.Router();

const { register, login } = require("../../controllers/auth");


router.route("/register")
  .post(register)

router.route("/login")
  .post(login)


module.exports = router;
