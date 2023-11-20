import { createCookie } from '@remix-run/node';
import Backend from 'i18next-fs-backend';
import { RemixI18Next } from 'remix-i18next';
import { resolve } from 'node:path';
import i18n from './i18n'; // your i18n configuration file

export const i18nCookie = createCookie('i18n', {
  sameSite: 'lax',
  path: '/',
});

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: i18nCookie,
  },

  // This is the configuration for i18next used
  // when translating messages server-side only
  i18next: {
    ...i18n,
    ns: ['error-message', 'common'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
    },
  },
  // The backend you want to use to load the translations
  // Tip: You could pass `resources` to the `i18next` configuration and avoid
  // a backend here
  backend: Backend,
});

export default i18next;
