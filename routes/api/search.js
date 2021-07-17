const express = require("express");
const { search } = require("../../controllers/cocktails");
const { protect } = require("../../middleware/auth");
const router = express.Router();

router.route("/")
  .get(protect, search)

module.exports = router;