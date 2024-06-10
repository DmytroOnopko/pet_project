import { Request, Response } from 'express';

import {
  generateRefreshToken,
  generateToken,
  verifyRefreshToken,
} from './tokenService';
import { Credential } from '../user/types';
import { UserModel } from '../user/user.model';
import { RequestBody } from '../core/types';

export const login = (
  { body: { email, password } }: RequestBody<Credential>,
  res: Response,
) => {
  UserModel.findOne({ email })
    .then((user) => {
      if (!user || user.password !== password) {
        throw Error();
      }

      const token = generateToken({ id: user._id });
      const refreshToken = generateRefreshToken({ id: user._id });

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
      res.status(200).json({ token });
    })
    .catch(() => res.status(400).json({ msg: 'Wrong email or password' }));
};

export const refreshToken = (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const decodedRefreshToken = verifyRefreshToken(refreshToken);

  UserModel.findById(decodedRefreshToken.id)
    .then((user) => {
      if (!user || user.refreshToken !== refreshToken) {
        throw Error('Invalid refresh token');
      }

      const newToken = generateToken({ id: user._id });
      const newRefreshToken = generateRefreshToken({ id: user._id });

      res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
      res.status(200).json({ token: newToken });
    })
    .catch((err) => res.status(403).json({ msg: err }));
};
