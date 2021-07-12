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

  if(!email || !password){
    return next(new ErrorResponse("Please provide email and password", 400))
  }

  const user = await User.findOne({ email }).select("+password")
  
  if(!user){
    return next(new ErrorResponse("Invalid Credentials", 401))
  }

  const passwordMatch = await user.matchPassword(password);

  if(!passwordMatch) {
    return next(new ErrorResponse("Invalid Credentials", 401))
  }

  sendTokenResponse(user, 200, res);
});

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