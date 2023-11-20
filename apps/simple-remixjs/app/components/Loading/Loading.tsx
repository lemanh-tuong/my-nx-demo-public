import classNames from 'classnames';
import type { HTMLAttributes } from 'react';

export const Loading = (props: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={classNames(
        'loader inline-block h-4 w-4 animate-spin rounded-full border-r-2 border-t-2 border-solid border-r-transparent border-t-neutral-700',
        props.className,
      )}
    />
  );
};
