import express from 'express';

import { getUser } from './user.controller';
import { authMiddleware } from '../auth/auth.middleware';

export const userRouter = express.Router();

userRouter.get('/user/:id', authMiddleware, getUser);
