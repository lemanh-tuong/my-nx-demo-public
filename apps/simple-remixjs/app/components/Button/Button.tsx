import cx from 'classnames';
import React, { memo } from 'react';
import { Loading } from '../Loading/Loading';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: HTMLButtonElement['className'];
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
}
function Button({ isLoading, className, onClick, children, disabled, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cx(
        'flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-base px-[20px] text-white',
        disabled ? 'cursor-not-allowed opacity-80' : '',
        className,
      )}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
}

export default memo(Button);
