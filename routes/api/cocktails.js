const express = require("express");
const router = express.Router();
const { getAllCocktails, getOneCocktail } = require("../../controllers/cocktails");
const { protect } = require("../../middleware/auth");
router.route("/")
  .get(protect, getAllCocktails)

router.route("/:id")
  .get(getOneCocktail)


module.exports = router;