export interface Page<T> {
  total: number;
  totalPages: number;
  page: number;
  pageSize:number;
  data:T;
}
