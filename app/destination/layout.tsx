"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Tab from "@/components/tab/tab";
import DestinyContent from "@/components/destinyContent/destinyContent";
export default function DestinationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full h-[80%] mt-[auto] px-[11.458vw] pb-32 flex text-white relative z-[0]">
        {children}
        <div className="w-2/5 min-h-[445px] h-full flex flex-col justify-center">
          <Tab destination={pathname} />
          <DestinyContent destination={pathname} />
        </div>
      </div>
    </>
  );
}
