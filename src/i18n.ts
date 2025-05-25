
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export const locales = ['en', 'ar', 'fa'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid.
  // The middleware is the primary guard, but this is an additional safety net.
  if (!locales.includes(locale as any)) {
    notFound();
  }

  let messages;
  try {
    switch (locale) {
      case 'en':
        messages = (await import('./messages/en.json')).default;
        break;
      case 'ar':
        messages = (await import('./messages/ar.json')).default;
        break;
      case 'fa':
        messages = (await import('./messages/fa.json')).default;
        break;
      default:
        // This should ideally not be reached if the check above works
        // and the middleware properly restricts locales.
        console.error(`getRequestConfig: Unhandled locale "${locale}", falling back to notFound().`);
        notFound();
    }
  } catch (error) {
    // Log the error for easier debugging if message files are missing or malformed.
    console.error(`Failed to load messages for locale "${locale}":`, error);
    // If message loading fails for a supposedly valid locale, it's a critical issue.
    // Re-throwing or calling notFound() might be appropriate.
    // For now, re-throwing to make the error visible.
    throw new Error(`Could not load messages for locale ${locale}. Cause: ${String(error)}`);
  }

  return {
    messages
  };
});
