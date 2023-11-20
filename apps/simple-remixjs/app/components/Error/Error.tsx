import { isRouteErrorResponse, Link, useRouteError } from '@remix-run/react';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

function ErrorComponent() {
  const { t } = useTranslation();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <img src="/assets/images/fix.png" alt="404" className="h-[200px] w-[200px] object-cover" />
        <h2 className="mt-[20px] text-[56px] font-semibold">{error.data}</h2>
        <Link to="/" className="flex space-x-2">
          <div className="h-5 w-5 font-semibold text-primary-base">←</div>
          <span className="text-sm font-semibold text-primary-base">{t('back_to_home')}</span>
        </Link>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error?.message}</p>
        <p>The stack trace is:</p>
        <pre>{error?.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
export default memo(ErrorComponent);
