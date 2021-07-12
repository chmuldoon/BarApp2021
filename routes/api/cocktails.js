const express = require("express");
const router = express.Router();
const { getAllCocktails, getOneCocktail } = require("../../controllers/cocktails");

router.route("/")
  .get(getAllCocktails)

router.route("/:id")
  .get(getOneCocktail)


module.exports = router;