import { TFunction } from 'i18next';

export const getRequiredMessage = (t: TFunction, key: string) => {
  return t('common:type_required', { type: t(`common:${key}`) }).toString();
};
