import { Inter, Noto_Sans_JP } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

/**
 * @official https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
 * @see https://fonts.google.com/specimen/Inter
 * @see https://fonts.google.com/specimen/Noto+Sans+JP
 */
