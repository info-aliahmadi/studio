import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css'; // Adjusted path
import { Toaster } from "@/components/ui/toaster";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import { locales } from '@/i18n'; // Import locales
import {notFound} from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SwiftScan Landing - Your Modern Cashier System',
  description: 'Discover SwiftScan, the cashier system with seamless scanning, powerful reports, and offline capabilities.',
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function RootLayout(props: Readonly<{ // Changed to accept full props
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const { children, params } = props; // Destructure props here
  const locale = params.locale; // Access locale from params

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  const dir = (locale === 'ar' || locale === 'fa') ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
