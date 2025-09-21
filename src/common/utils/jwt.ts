import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import type { StringValue } from 'ms';

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'supersecret';

export interface JwtPayload {
  userId?: string;
  email?: string;
}

export function generateToken(payload: JwtPayload, expiresIn: StringValue = '1d'): string {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, JWT_SECRET, options);
}

export function verifyToken<T = JwtPayload>(token: string): T {
  return jwt.verify(token, JWT_SECRET) as T;
}
