const asyncHandler = require("../middleware/async");
const Cocktail = require("../models/Cocktail");
const Ingredient = require("../models/Ingredient");
const User = require("../models/User");

const ErrorResponse = require("../utils/errorResponse");
const { listMaker } = require("../utils/listMaker");


exports.getAllIngredients = asyncHandler(async (req, res, next) => {
  let ingredients = await Ingredient.find();
  

  res.status(200).json({
    success: true,
    data: ingredients.sort((a, b) => b.cocktails.length - a.cocktails.length)
  })
});
exports.getMyIngredients = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("-password");
  const ingredients = await Ingredient.find({_id: { $in: user.ingredients }});
  

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
exports.addIngredientToShelf = asyncHandler(async (req, res, next) => {
  

  let user = await User.findById(req.user.id)
  let newIngredientsList = user.ingredients.concat(req.params.id);


  user.ingredients = newIngredientsList;
  let newCocktailList = await listMaker(user.ingredients);
  user.cocktails = newCocktailList

  await user.save();
  
  let ingredient = await Ingredient.findById(req.params.id);


   res.status(200).json({
    success: true,
    data: {
     user, ingredient
    }
  })
});
exports.removeIngredientToShelf = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.user.id)
  let newIngredientsList = user.ingredients

  newIngredientsList = newIngredientsList
    .slice()
    .slice(0, newIngredientsList.indexOf(req.params.id))
    .concat(newIngredientsList.slice(newIngredientsList.indexOf(req.params.id) + 1));
  if(user.mustHave.includes(req.params.id)){
    
    let newMustHaveList = user.mustHave;
    newMustHaveList = newMustHaveList
      .slice()
      .slice(0, newMustHaveList.indexOf(req.params.id))
      .concat(
        newMustHaveList.slice(
          newMustHaveList.indexOf(req.params.id) + 1
        )
      );
    user.mustHave = newMustHaveList;
  }


  user.ingredients = newIngredientsList;
  let newCocktailList = await listMaker(user.ingredients);
  user.cocktails = newCocktailList

  await user.save();
  const ingredient = await Ingredient.findById(req.params.id)

  res.status(200).json({
  success: true,
  data: {
    user, ingredient
  }
})
});