const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');


exports.protect = asyncHandler(async (req, res, next) => {

  const token = req.header("x-auth-token");
  //check if there is no token

  if(req.cookies.token && !token){
    token = req.cookies.token
  }
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  //if there is a token, verify it
  try {
    const decoded = jwt.verify(token, require("../config/jwt").jwtSecret);
  
    req.user = { id: decoded.id }

    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};