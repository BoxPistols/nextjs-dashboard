import '@/app/ui/global.css';

import { Inter, Noto_Sans_JP, Stick, Jost } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'], // TODO: ['japanese'] 未対応？
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  preload: true,
});

export const stick = Stick({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-stick',
  preload: true,
});

export const jost = Jost({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-jost',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      style={{
        fontFamily: `${jost.style.fontFamily}, ${stick.style.fontFamily}`,
      }}
    >
      <body
        className={
          //`${inter.className} ${notoSansJP.className}
          `body-style antialiased`
        }
      >
        {children}
      </body>
    </html>
  )
}
// TODO: このように複合的には出来ない？ <body className={`${[inter.className, notoSansJP.className].join(' ')} antialiased`}
