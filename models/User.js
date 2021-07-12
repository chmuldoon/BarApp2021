const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
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
UserSchema.pre("save", async function (next) {
  if(!this.password){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
})

UserSchema.methods.getSignedJwtToken = function () {
  console.log("hit1")
  return jwt.sign({ id: this._id }, require("../config/jwt").jwtSecret, {
    expiresIn: "30d"
  })
}

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
module.exports = mongoose.model("user", UserSchema);