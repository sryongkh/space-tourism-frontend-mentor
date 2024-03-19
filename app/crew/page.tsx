"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function CrewPage() {
  const pathname = usePathname();
  return (
    <>
      <main
        className="text-white
    "
      >
        Crew Page
      </main>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[-2] mix-blend-lighten">
        {pathname === "/crew" ? (
          <div className="relative background-main w-full h-full">
            <Image
              src={"/bg-crew.png"}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw"
              className="hidden md:flex mix-blend-lighten"
              priority
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
