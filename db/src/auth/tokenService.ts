import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

interface Payload {
  id: ObjectId;
}

type Token = string;

export const generateToken = (payload: Payload): Token =>
  jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: `${process.env.JWT_EXPIRATION}`,
  });

export const generateRefreshToken = (payload: Payload): Token =>
  jwt.sign(payload, `${process.env.JWT_REFRESH_SECRET_KEY}`, {
    expiresIn: `${process.env.JWT_REFRESH_EXPIRATION}`,
  });

export const verifyToken = (token: Token) =>
  jwt.verify(token, `${process.env.JWT_SECRET_KEY}`) as Payload;

export const verifyRefreshToken = (token: Token) =>
  jwt.verify(token, `${process.env.JWT_REFRESH_SECRET_KEY}`) as Payload;
