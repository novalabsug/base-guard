export const TryCatch = (fn) => async (err, req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error);
  }
};
