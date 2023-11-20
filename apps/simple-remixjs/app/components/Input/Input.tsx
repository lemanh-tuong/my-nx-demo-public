import cx from 'classnames';
import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: HTMLDivElement['className'];
  prefixElement?: ReactNode;
  suffixElement?: ReactNode;
}
function Input(
  {
    placeholder,
    className,
    containerClassName,
    id,
    name,
    type = 'text',
    prefixElement,
    suffixElement,
    value,
    disabled,
    ...rest
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={containerClassName}>
      <div className="relative flex items-center overflow-hidden">
        {!!prefixElement && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">{prefixElement}</div>
        )}
        <input
          disabled={disabled}
          value={value}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={cx(
            className,
            'block h-12 w-full rounded-xl border border-grey-400  text-sm text-gray-900 outline-none transition duration-150 focus:border-primary-base',
            {
              'pl-10 pr-8': !!prefixElement,
              'px-6': !prefixElement,
            },
            disabled ? 'cursor-not-allowed opacity-60' : '',
          )}
          {...rest}
          ref={ref}
        />
        {!!suffixElement && <div className="absolute inset-y-0 right-0 flex items-center pr-2">{suffixElement}</div>}
      </div>
    </div>
  );
}

export default forwardRef(Input);
