import { isAxiosError } from 'axios';

export const errorHandler = (error: unknown) => {
  if (typeof error === 'string') return error;
  if (isAxiosError(error)) return error.response?.data?.message || error.message;

  return 'Unexpected Error';
};
