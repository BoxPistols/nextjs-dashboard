import '@/app/ui/global.css';

import { Inter, Noto_Sans_JP } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-inter',
  // preload: true,
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'], // TODO: ['japanese'] 未対応？
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  // preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`body-fonts ${[inter.className, notoSansJP.className].join(' ')} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
// TODO: このように複合的には出来ない？ <body className={`${[inter.className, notoSansJP.className].join(' ')} antialiased`}
