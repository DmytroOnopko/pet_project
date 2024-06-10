import { Response } from 'express';

import { Profile, ProfileSortKey } from './types';
import {
  ListParamsRequest,
  PaginatedResponse,
  SortDirection,
} from '../core/types';
import { ProfileModel } from './profile.model';

export const getProfiles = async (
  req: ListParamsRequest<ProfileSortKey>,
  res: Response<PaginatedResponse<Profile>>,
) => {
  try {
    const page = req.query.pageNumber ? parseInt(req.query.pageNumber) : 1;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 10) : 10;
    const skip = (page - 1) * pageSize;

    const sortKey = req.query.sortKey ?? ProfileSortKey.USER_NAME;
    const sortOrder = req.query.sortDirection ?? SortDirection.ASC;

    let sortOptions: { [key: string]: 1 | -1 } = {};

    if (sortKey === 'userName') {
      sortOptions = {
        firstName: sortOrder === 'asc' ? 1 : -1,
        secondName: sortOrder === 'asc' ? 1 : -1,
      };
    } else {
      sortOptions[sortKey] = sortOrder === 'asc' ? 1 : -1;
    }

    const data = await ProfileModel.find()
      .sort(sortOptions)
      .skip(skip)
      .limit(pageSize);

    const totalElements: number = await ProfileModel.countDocuments();
    const totalPages: number = Math.ceil(totalElements / pageSize);
    const hasNext: boolean = page < totalPages;

    res.status(200).json({
      data,
      totalElements,
      totalPages,
      hasNext,
    });
  } catch (err) {
    //ToDo: fixed any
    res.status(403).json({ msg: 'error' } as any);
  }
};
