import { Location, Milliseconds, SortParams } from '../../core/types';

export enum ProfileStatus {
  ACTIVE = 'active',
  NOT_ACTIVE = 'not_active',
}

export interface Profile {
  id: string;

  email: string;
  password: string;

  firstName?: string;
  secondName?: string;

  location?: Location;
  description?: string;
  registrationTime: Milliseconds;
  expiredTime: Milliseconds;
  birthday: Milliseconds;
  country: string;
  city: string;
  status: ProfileStatus;
}

export interface ProfileSearchForm {
  startFrom: Milliseconds;
  startTo: Milliseconds;
  status: ProfileStatus[];
}

export enum SortKey {
  BIRTHDAY = 'birthday',
  NAME = 'name',
}

export type ProfileSearchParams = ProfileSearchForm & SortParams<SortKey>;
