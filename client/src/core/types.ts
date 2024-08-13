export interface Location {
  lat: number;
  lon: number;
}

export type Milliseconds = number;

export interface TableListProps<List> {
  data?: List[];
  isLoading?: boolean;
  onRemove?: (profile: any) => void;
}

export interface FieldOption<Value extends string = string> {
  value: Value;
  label: string;
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface SortParams<SortKey extends string> {
  sortDirection: SortDirection;
  sortKey: SortKey;
}

export enum Locale {
  EN = 'en',
  UA = 'ua',
}
