import '../globals.css';
import { Providers } from "../components/Providers";
import {routing} from "../../i18n/routing";
import { NextIntlClientProvider } from 'next-intl';

export const metadata = {
  title: 'Flower Terrace',
  description: 'منيو مطعم ',
};

export default async function RootLayout({ children, params }) {
  const locale = params?.locale ?? routing.defaultLocale;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    messages = (await import(`../../../messages/ar.json`)).default;
  }

  return (
    <html lang={locale} dir={dir}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}