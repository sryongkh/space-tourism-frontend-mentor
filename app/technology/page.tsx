"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
function TechPage() {
  const pathname = usePathname();
  return (
    <>
      <main className="w-full h-full lg:h-[80%] mt-[auto] px-6 xs:px-10 lg:px-[11.458vw] pt-24 xs:pt-36 lg:pt-0 pb-12 lg:pb-32 flex flex-col lg:flex-row text-white relative z-[0]">
        <div className="w-full lg:w-1/2">
          <h5 className="text-base text-h5-tablet md:text-h5 tracking-navtxt xs:tracking-h5 uppercase text-center xs:text-start">
            <span className="font-bold opacity-25 mr-5">03</span> SPACE LAUNCH
            101
          </h5>
        </div>
        <div className="w-full lg:w-1/2 min-h-[445px] h-full flex flex-col pt-[8%] lg:pt-[10%] lg:pl-[3%]"></div>
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
