import { isAxiosError } from 'axios';
import { ResponseCode } from '../../@types';

export const getErrorCode = (error: unknown): ResponseCode => {
  if (isAxiosError(error)) {
    return error.response?.status ? 'Service' : 'Network';
  }

  if (error instanceof Error) {
    return 'Frontend';
  }

  return 'Unknown';
};
