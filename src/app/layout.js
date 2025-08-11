import './globals.css';
import { Providers } from "./components/Providers";



export const metadata = {
  title: 'مطعمنا',
  description: 'منيو مطعم عربي مع بحث وفلترة',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-white text-gray-900">
      <Providers>{children}</Providers>

      </body>
    </html>
  );
}