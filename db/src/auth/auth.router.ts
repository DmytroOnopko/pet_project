import express from 'express';

import { authMiddleware } from './auth.middleware';
import { login, refreshToken } from './auth.controller';

export const authRouter = express.Router();

authRouter.get('/login', login);
authRouter.get('/refreshToken', authMiddleware, refreshToken);
