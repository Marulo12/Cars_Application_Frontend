export interface ResponseApi<T> {
  entity?: T;
  entities?: T[];
  message: string;
  success: boolean;
  errors?: string[];
}
