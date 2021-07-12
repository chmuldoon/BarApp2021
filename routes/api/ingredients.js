const express = require("express");
const { getAllIngredients, getOneIngredient, getIngredientsByCocktail } = require("../../controllers/ingredients");
const router = express.Router();

router.route("/")
  .get(getAllIngredients)

router.route("/:id")
  .get(getOneIngredient)

router.route("/cocktail/:id")
  .get(getIngredientsByCocktail)


module.exports = router;
