import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEV-MS",
  description: "프론트엔득 개발자 김민성의 개인 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
