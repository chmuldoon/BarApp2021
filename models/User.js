const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "ingredient",
  },
  mustHave: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "ingredient",
  },
  cocktails: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "cocktails",
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "cocktails",
  }
});

module.exports = mongoose.model("user", UserSchema);