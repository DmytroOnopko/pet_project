import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './tokenService';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.method === 'OPTIONS') next();

  const token = req.headers.authorization?.split(' ')?.[1];

  if (token) {
    try {
      verifyToken(token);
      next();
    } catch (_) {
      return res.status(403).json({ msg: 'User is not authorized' });
    }
  } else {
    res.status(403).json({ msg: 'User is not authorized' });
  }
};
