/* eslint-disable react/function-component-definition */
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: process.env.NEXT_PUBLIC_BRAND_NAME,
  description: 'Generated by create next app',
};

export default function ServerRootLayout({ children }) {
 
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
