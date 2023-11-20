import { SimpleActionResponse } from '../../@types/SimpleActionResponse';
import type { RTHandleError } from './@types/RemixJsonFunction';

export const handleNativeError = <Model = any, FieldsError = any>(
  error: Error,
): RTHandleError<SimpleActionResponse<Model, FieldsError>> => {
  console.log('handleNativeError', error);
  return [
    {
      message: 'Error',
      hasError: true,
      error: error.message,
    },
    { status: 400 },
  ];
};
