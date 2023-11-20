import { MetaFunction } from '@remix-run/node';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

const Index: FC = () => {
  const { t } = useTranslation(['common']);
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>{t('common:welcome', { name: 'Remix!' })}</h1>
    </div>
  );
};

export default Index;
