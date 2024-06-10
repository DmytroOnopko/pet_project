import mongoose, { Schema } from 'mongoose';
import { Location, Profile, ProfileStatus } from './types';

const LocationSchema = new Schema<Location>({
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
});

const ProfileSchema = new Schema<Profile>({
  email: { type: String, unique: true },
  password: String,

  firstName: String,
  secondName: String,

  description: String,

  registrationTime: Number,
  expiredTime: Number,
  birthday: Number,

  country: String,
  city: String,

  status: { type: String, enum: Object.values(ProfileStatus) },

  location: LocationSchema,
});

export const ProfileModel = mongoose.model<Profile>('Profile', ProfileSchema);
