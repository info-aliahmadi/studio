import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {locales, defaultLocale} from './i18n';

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always' // always display the locale prefix in the URL
});

export default function middleware(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // Matcher entries are linked with a logical OR
  matcher: [
    // Match all pathnames except for
    // - …if they start with `/api`, `/_next` or `/_vercel`
    // - …the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
};