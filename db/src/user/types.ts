export interface Credential {
  email: string;
  password: string;
}

export interface User extends Credential {
  firstName?: string;
  secondName?: string;
  refreshToken?: string;
}
