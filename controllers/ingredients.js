const asyncHandler = require("../middleware/async");
const Cocktail = require("../models/Cocktail");
const Ingredient = require("../models/Ingredient");
const ErrorResponse = require("../utils/errorResponse");

exports.getAllIngredients = asyncHandler(async (req, res, next) => {
  const ingredients = await Ingredient.find();

  res.status(200).json({
    success: true,
    data: ingredients
  })
});
exports.getOneIngredient = asyncHandler(async (req, res, next) => {
  const ingredient = await Ingredient.findById(req.params.id);
  if(!ingredient) {
    return next(
      new ErrorResponse(`Ingredient not found with id of ${req.params.id}`, 404)
    )
  }
  res.status(200).json({
    success: true,
    data: ingredient
  })

});

exports.getIngredientsByCocktail = asyncHandler(async (req, res, next) => {
  const cocktail = await Cocktail.findById(req.params.id).select("using2");
  if(!cocktail) {
    return next(
      new ErrorResponse(`Cocktail not found with id of ${req.params.id}`, 404)
    )
  }
  let ingredients = await Ingredient.find({_id: { $in: cocktail.using2 }}).select("-cocktails");
   res.status(200).json({
    success: true,
    data: ingredients
  })
});