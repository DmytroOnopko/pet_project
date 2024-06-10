import express from 'express';

import { authMiddleware } from '../auth/auth.middleware';
import { getProfiles } from './profile.controller';

export const profileRouter = express.Router();

profileRouter.get('/profiles', authMiddleware, getProfiles);
