const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const router = express.Router();
const { register, login, currentUser, logout } = require("../../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", currentUser);
router.get("/logout", logout)


module.exports = router;
