import { Inter, Noto_Sans_JP, Jost, Stick, Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const jost = Jost({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const stick = Stick({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-stick',
});

export const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

/**
 * @official https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
 * https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 * @see https://fonts.google.com/specimen/Inter
 * @see https://fonts.google.com/specimen/Noto+Sans+JP
 * @see https://fonts.google.com/specimen/Lusitana
 */
