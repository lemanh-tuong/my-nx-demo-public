import { zodResolver } from '@hookform/resolvers/zod';
import { object, string } from 'zod';
import { getRequiredMessage } from '../../../utils/common';
import type { TFunction } from 'i18next';

export const getFormCreateResolver = (t: TFunction) => {
  const title = { required: getRequiredMessage(t, '...') };
  const body = { required: getRequiredMessage(t, '...') };
  return zodResolver(
    object({
      title: string({ required_error: title.required }).trim().nonempty({
        message: title.required,
      }),
      body: string({ required_error: body.required }).trim().nonempty({
        message: body.required,
      }),
    }),
  );
};

export const getFormUpdateResolver = (t: TFunction) => {
  const title = { required: getRequiredMessage(t, '...') };
  const body = { required: getRequiredMessage(t, '...') };
  return zodResolver(
    object({
      title: string({ required_error: title.required }).trim().nonempty({
        message: title.required,
      }),
      body: string({ required_error: body.required }).trim().nonempty({
        message: body.required,
      }),
    }),
  );
};
