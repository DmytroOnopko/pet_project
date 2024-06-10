import mongoose, { Schema } from 'mongoose';
import { User } from './types';

const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  firstName: String,
  secondName: String,

  refreshToken: String,
});

export const UserModel = mongoose.model<User>('User', UserSchema);
