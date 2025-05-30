
import type {Metadata} from 'next';
import { Geist, Roboto_Serif } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Roboto_Serif({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SwiftScan Landing - Your Modern Cashier System',
  description: 'Discover SwiftScan, the cashier system with seamless scanning, powerful reports, and offline capabilities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}> {/* Removed dark class */}
      {children}
      <Toaster />
    </body>
    </html>
  );
}
