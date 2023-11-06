import { TryCatch } from "../utils/utils.js";

export const ErrorHandler = (err, req, res, next) => {
  let statusCode =
    req.statusCode === 200 ? 500 : res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? {} : err.stack,
  });
};

export const NotFound = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);

  res.status(404);

  next(error);
};
