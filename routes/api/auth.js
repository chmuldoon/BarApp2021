const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const { register, login, currentUser, logout } = require("../../controllers/auth");
const { protect } = require("../../middleware/auth");
router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, currentUser);
router.get("/logout", protect, logout)


module.exports = router;
