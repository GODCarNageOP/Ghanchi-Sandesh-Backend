const ErrorHandler = require("../utils/Errorhandler");



const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Problem";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

module.exports = errorMiddleware;
