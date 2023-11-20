import classNames from 'classnames';
import { createElement } from 'react';
import type { ReactNode, HtmlHTMLAttributes } from 'react';

interface Props {
  label: ReactNode;
  children: ReactNode;
  error?: ReactNode;
  withRequiredMark?: boolean;
  tagName?: keyof HTMLElementTagNameMap;
  className?: string;
  fieldWrapperClassName?: string;
  labelWrapperClassName?: string;
}

export const FieldError = ({
  error,
  className,
  ...props
}: Pick<Props, 'error'> & Omit<HtmlHTMLAttributes<HTMLDivElement>, 'children'>) => {
  return (
    <div {...props} className={classNames('text-xs font-medium text-status-error', className)}>
      {error}
    </div>
  );
};

export const Field = ({
  label,
  children,
  error,
  withRequiredMark,
  tagName = 'label',
  className,
  fieldWrapperClassName,
  labelWrapperClassName,
}: Props) => {
  const renderRequiredMark = () => {
    if (withRequiredMark) {
      return <span className="mr-1 text-sm font-semibold text-status-error">*</span>;
    }
    return null;
  };

  return createElement(
    tagName,
    {
      className: classNames('cursor-pointer', className),
    },
    <>
      <div className={classNames('mb-2', labelWrapperClassName)}>
        {renderRequiredMark()}
        <span className={classNames('text-sm font-semibold text-neutral-500')}>{label}</span>
      </div>
      <div className={classNames('mb-2', fieldWrapperClassName)}>{children}</div>
      {!!error && <FieldError className="mt-2" error={error} />}
    </>,
  );
};
