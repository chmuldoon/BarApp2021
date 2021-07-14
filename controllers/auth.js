const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");


exports.register = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.create({
    email,
    password
  })
  
  sendTokenResponse(user, 200, res);

});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log("hit")
  if(!email || !password){
    return next(new ErrorResponse("Please provide email and password", 400))
  }

  const user = await User.findOne({ email }).select("+password")
  
  if(!user){
    return next(new ErrorResponse("Invalid Credentials", 401))
  }
  console.log(user)

  const passwordMatch = await user.matchPassword(password);

  if(!passwordMatch) {
    return next(new ErrorResponse("Invalid Credentials", 401))
  }

  sendTokenResponse(user, 200, res);
});

exports.currentUser = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.user.id)
  if(!user) {
    user = null;
  }
  console.log(user)
  res.status(200).json({
    success: true,
    data: user
  })
})
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  })
  res.status(200).json({
    success: true,
    data: {}
  })
})

const sendTokenResponse = (user, statusCode, res) => {

  const token = user.getSignedJwtToken()

  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true
  }

  if(process.env.NODE_ENV === 'production'){
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      token
    })
}