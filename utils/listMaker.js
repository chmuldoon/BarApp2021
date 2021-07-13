const mongoose = require("mongoose");
//will add a function that takes in a list of ingredients
//and outputs a list of cocktails
const Ingredient = mongoose.model("ingredient");
const Cocktail = mongoose.model("cocktail");
// const Igredient = require('../models/Ingredient')

async function _userCocktails(list) {
  if (list.length == 0) return [];
  let output = [];
  // console.log(list)
  let objs = await Ingredient.find({ _id: { $in: list } });
  let cocktails = objs.map((i) => i.cocktails);
  cocktails.forEach((c) => {
    output = output.concat(c);
  });

  output = output.map((c) => c.toString());
  output = [...new Set(output)]


  return output
}

function listMaker(list) {
  return _userCocktails(list).then((total) => {
    return total
    // .map((c) => Cocktail.findById(c));
  });
}
module.exports = { listMaker };