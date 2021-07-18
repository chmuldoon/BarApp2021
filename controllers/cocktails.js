const asyncHandler = require("../middleware/async");
const Cocktail = require("../models/Cocktail");
const Ingredient = require("../models/Ingredient");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.getAllCocktails = asyncHandler(async (req, res, next) => {
  const cocktails = await Cocktail.find();

  res.status(200).json({
    success: true,
    data: cocktails
  })
});
exports.getMyCocktails = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("-password");
  const cocktails = await Cocktail.find({_id: { $in: user.cocktails }});
  res.status(200).json({
    success: true,
    data: cocktails
  })
})
exports.getOneCocktail = asyncHandler(async (req, res, next) => {
  const cocktail = await Cocktail.findById(req.params.id);
  if(!cocktail) {
    return next(
      new ErrorResponse(`Cocktail not found with id of ${req.params.id}`, 404)
    )
  }
  res.status(200).json({
    success: true,
    data: cocktail
  })

});
exports.search = asyncHandler(async (req, res, next) => {
  let cocktailList = await Cocktail.find({}).select("-glass -ingredients -instructions -measurements -using -using2 -__v");
  let ingredientList = await Ingredient.find({}).select("_id name img ");
  let cocktails = {};
  let ingredients = {};
  for(let i = 0; i < cocktailList.length; i++){
    cocktails[cocktailList[i]._id] = cocktailList[i];
  }
  for(let i = 0; i < ingredientList.length; i++){
    ingredients[ingredientList[i]._id] = ingredientList[i];
  }

  res.status(200).json({
    success: true,
    data: { cocktails, ingredients }
  })
});

