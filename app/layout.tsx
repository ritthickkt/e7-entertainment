import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { generalSans } from "./fonts";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E7 Entertainments Group",
  description:
    "E7 Entertainments — entertainment, leisure and lifestyle venture delivering amusement parks, game zones, cinemas, festival trade and government projects across Asia, Africa, the Middle East and Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
