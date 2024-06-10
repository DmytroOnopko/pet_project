import { Milliseconds } from 'core/types';
import { User } from 'user/types';

export enum ProfileStatus {
  ACTIVE = 'active',
  NOT_ACTIVE = 'not_active',
}

export interface Location {
  lat: number;
  lon: number;
}

export interface Profile extends Omit<User, 'refreshToken'> {
  location: Location;
  description: string;
  registrationTime: Milliseconds;
  expiredTime: Milliseconds;
  birthday: Milliseconds;
  country: String;
  city: String;
  status: ProfileStatus;
}

export enum ProfileSortKey {
  BIRTHDAY = 'birthday',
  EXPIRED_TIME = 'expiredTime',
  REGISTRATION_TIME = 'registrationTime',
  USER_NAME = 'userName',
}
