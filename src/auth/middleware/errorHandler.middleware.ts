import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../../common/utils/ApiError.js';


export function errorHandler(
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Error caught by middleware:", err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  return res.status(500).json({
    statusCode: 500,
    message: "Internal server error",
  });
}
