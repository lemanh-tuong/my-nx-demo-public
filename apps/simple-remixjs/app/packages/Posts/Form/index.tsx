import { FormProps as RemixFormProps, Form as RemixForm } from '@remix-run/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRemixForm } from 'remix-hook-form';
import { Post } from 'services';
import { Field } from '../../../components/Field/Field';
import Input from '../../../components/Input/Input';

export type FormCreateValues = Pick<Post, 'body' | 'title'>;
export type FormUpdateValues = FormCreateValues;

interface FormBaseProps extends Omit<RemixFormProps, 'id' | 'children' | 'onSubmit'> {
  // Uniq ID - Dùng cho việc submit form
  uid: string;
  isSubmiting: boolean;
}
export interface FormCreateProps extends FormBaseProps {
  variant: 'Create';
  // Giá trị mặc định của form
  defaultValues?: Partial<FormCreateValues>;
  // Lỗi từ action submit
  fieldsError?: Partial<Record<keyof FormCreateValues, string>>;
  onSubmit?: (values: FormCreateValues) => void;
}
export interface FormUpdateProps extends FormBaseProps {
  variant: 'Update';
  // Giá trị mặc định của form
  defaultValues?: Partial<FormUpdateValues>;
  // Lỗi từ action submit
  fieldsError?: Partial<Record<keyof FormUpdateValues, string>>;
  onSubmit?: (values: FormUpdateValues) => void;
}
export type FormProps = FormCreateProps | FormUpdateProps;

export const Form = ({ defaultValues, uid, fieldsError = {}, onSubmit, isSubmiting, ...formProps }: FormProps) => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
    reset,
  } = useRemixForm<Partial<FormCreateValues | FormUpdateValues>>({
    submitHandlers: {
      onValid: onSubmit as any,
      onInvalid: console.log,
    },
  });

  useEffect(() => {
    Object.keys(fieldsError).forEach(key => {
      const key_ = key as keyof typeof fieldsError;
      if (fieldsError[key_]) {
        setError(key_, {
          message: fieldsError[key_],
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldsError]);

  useEffect(() => {
    reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  return (
    <RemixForm {...formProps} id={uid} onSubmit={handleSubmit}>
      <Field label={t('common:title')} withRequiredMark error={errors.title?.message}>
        <Input
          {...register('title')}
          disabled={isSubmiting}
          placeholder={t('common:input', {
            type: t('common:title').toLowerCase(),
          }).toString()}
        />
      </Field>
      <Field label={t('common:body')} withRequiredMark error={errors.body?.message}>
        <Input
          {...register('body')}
          disabled={isSubmiting}
          placeholder={t('common:input', {
            type: t('common:body').toLowerCase(),
          }).toString()}
        />
      </Field>
    </RemixForm>
  );
};
