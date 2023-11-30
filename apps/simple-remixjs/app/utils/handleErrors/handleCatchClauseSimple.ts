import { json } from '@remix-run/server-runtime';
import { handleNativeError } from './handleNativeError';
import { handleUnknownError } from './handleUnknownError';

export const handleCatchClauseSimple = <Model = any, FieldsError = any>(error: unknown) => {
  if (error instanceof Error) {
    return json(...handleNativeError<Model, FieldsError>(error));
  }
  return json(...handleUnknownError<Model, FieldsError>(error));
};

export const handleCatchClauseSimpleAtClient = <Model = any, FieldsError = any>(error: unknown) => {
  if (error instanceof Error) {
    return handleNativeError<Model, FieldsError>(error)[0];
  }
  return handleUnknownError<Model, FieldsError>(error)[0];
};
