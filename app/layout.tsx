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
        className={`${barlow.className} relative bg-[#0B0D17] w-screen h-screen overflow-hidden flex`}
      >
        <Header />
        {children}
        {/* Background */}
        <div className="background absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[-2] mix-blend-lighten">
          <Image
            src={"/bg.png"}
            alt=""
            width={486}
            height={1024}
            className="hidden md:flex absolute top-0 mix-blend-lighten bg-desktop h-auto"
            priority
          />
          <Image
            src={"/bg-space.png"}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw"
            className="hidden md:flex world mix-blend-lighten"
            priority
          />
          <Image
            src={"/bg-tablet.png"}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw"
            className="max-[576.98px]:hidden xs:flex md:hidden mix-blend-lighten space bg-tablet"
            priority
          />
          <Image
            src={"/bg-tablet-space.png"}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw"
            className="max-[576.98px]:hidden xs:flex md:hidden bg-tablet mix-blend-lighten"
            priority
          />
          <Image
            src={"/bg-mobile.png"}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw"
            className="flex xs:hidden mix-blend-lighten bg-mobile"
            priority
          />
          <Image
            src={"/bg-mobile-space.png"}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw"
            className="flex xs:hidden mix-blend-lighten space bg-mobile"
            priority
          />
        </div>
      </body>
    </html>
  );
}
