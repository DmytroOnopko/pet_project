import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { authRouter } from './auth/auth.router';
import { profileRouter } from './profile/profile.router';
import { userRouter } from './user/user.router';

dotenv.config();

const app = express();
const uri = `${process.env.MONGODB_URI}${process.env.MONGODB_NAME}`;

mongoose
  .connect(uri)
  .then(() => console.log('[SUCCESS]: Connected to MongoDB'))
  .catch((err) => console.error('[ERROR]: Failed to connect', `${err}`));

app.listen(process.env.PORT, () => {
  console.log(`[LISTENING]: port ${process.env.PORT}`);
});

app.use(express.json());

app.use(authRouter);
app.use(userRouter);
app.use(profileRouter);
