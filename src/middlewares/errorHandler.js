export function errorHandler(err, req, res, next) {
  const { status = 500, message } = err;
  
  res.status(status).json({
    message: message,
  });
}
