const express = require("express");
const router = express.Router();
const { getAllCocktails, getOneCocktail, getMyCocktails } = require("../../controllers/cocktails");
const { protect } = require("../../middleware/auth");
router.route("/")
  .get(protect, getMyCocktails)

router.route("/:id")
  .get(getOneCocktail)


module.exports = router;