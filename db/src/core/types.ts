import { Request } from 'express';
import { ProfileSortKey } from 'profile/types';

export type Milliseconds = number;

export type RequestBody<T> = Request<unknown, unknown, T>;

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

interface ListParams<SortKey extends string> {
  pageNumber?: string;
  pageSize?: string;
  sortKey?: SortKey;
  sortDirection?: SortDirection;
}

export type ListParamsRequest<
  SortKey extends string,
  ReqQuery extends ListParams<SortKey> = ListParams<SortKey>,
> = Request<unknown, unknown, unknown, ReqQuery>;

export interface PaginatedResponse<T> {
  data: T[];
  hasNext: boolean;
  totalPages: number;
  totalElements: number;
  msg?: string;
}
