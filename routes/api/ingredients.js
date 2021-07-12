const express = require("express");
const { getAllIngredients, getOneIngredient, getIngredientsByCocktail, addIngredientToShelf, removeIngredientToShelf } = require("../../controllers/ingredients");
const { protect } = require("../../middleware/auth");
const router = express.Router();
router.route("/")
  .get(getAllIngredients)

router.route("/:id")
  .get(getOneIngredient)

router.route("/cocktail/:id")
  .get(getIngredientsByCocktail)

router.route("/add/:id")
  .put(protect, addIngredientToShelf)
  
router.route("/remove/:id")
  .put(protect, removeIngredientToShelf)


module.exports = router;
