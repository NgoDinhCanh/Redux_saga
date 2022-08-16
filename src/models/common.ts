export interface PaginationParams {
  total: number;
  limit: number;
  page: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}
export interface ListParams {
  page: number;
  limit: number;
  sort: string;
  [key: string]: any;
}
