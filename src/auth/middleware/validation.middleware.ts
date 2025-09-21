import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../../common/utils/ApiError.js';

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ApiError(400, 'Invalid email format');
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!passwordRegex.test(password)) {
    throw new ApiError(400, 'Password must be at least 8 characters long, include uppercase, lowercase, number, and special character');
  }

  next();
};
