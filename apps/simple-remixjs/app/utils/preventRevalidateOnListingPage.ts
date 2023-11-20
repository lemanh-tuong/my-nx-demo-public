import { includes } from 'ramda';
import type { ShouldRevalidateFunction } from '@remix-run/react';

const paths = [
  '/expense',
  '/orders',
  '/merchandises',
  '/mails',
  '/replacement-parts',
  '/fuel-loading',
  '/cleaning-service',
  '/departure',
];

export const preventRevalidateOnListingPage: ShouldRevalidateFunction = ({ currentUrl }) => {
  if (includes(currentUrl.pathname, paths)) {
    return true;
  }
  return false;
};
