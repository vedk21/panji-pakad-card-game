export interface APIResponse<T> {
  statusCode?: number;
  message: string;
  result: T;
}

// Application Entity Interfaces
export interface User {
  id?: string;
  username: string;
  password?: string;
  name?: string;
  email?: string;
}
