import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';

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
    <html lang="ko">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
