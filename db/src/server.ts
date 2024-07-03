import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { authRouter } from './auth/auth.router';
import { profileRouter } from './profile/profile.router';
import { userRouter } from './user/user.router';

dotenv.config();

const app = express();
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_NAME}.nvadcft.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_NAME}`;
const clientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

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
