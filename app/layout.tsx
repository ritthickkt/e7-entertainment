import type { Metadata } from "next";
import { montserrat, openSans } from "./fonts";
import { WhatsAppButton } from "./components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.e7entertainments.com"),
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
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
