import type { Metadata } from "next";
import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "Space Tourism",
  description:
    "if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} relative bg-[#0B0D17] w-screen h-screen overflow-hidden flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
