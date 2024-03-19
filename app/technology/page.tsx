"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
function TechPage() {
  const pathname = usePathname();
  return (
    <>
      <main
        className="text-white
    "
      >
        Technology Page
      </main>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[-2] mix-blend-lighten">
        {pathname === "/technology" ? (
          <div className="relative background-main w-full h-full">
            <Image
              src={"/bg-technology.png"}
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

export default TechPage;
