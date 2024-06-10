import { Request, Response } from 'express';
import { UserModel } from './user.model';

export const getUser = (req: Request, res: Response) => {
  UserModel.findById(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ error: 'error' }));
};
