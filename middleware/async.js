// Cleans up code by handling aync logic within this middleware, so a try catch in every controller is no longer necessary
const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;