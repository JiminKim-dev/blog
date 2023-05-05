import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/Header';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "Dobby's Blog",
  description: '도비의 블로그 입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body className="flex flex-col w-full mx-auto max-w-screen-2xl">
        <Header />
        <main className="p-4 grow">{children}</main>
      </body>
    </html>
  );
}
