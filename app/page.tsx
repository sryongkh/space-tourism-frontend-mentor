"use client";
import Image from "next/image";
import Button from "@/components/button/button";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <main className="w-full h-full text-white relative flex">
        <div className="main-content w-full h-full md:h-fit relative mt-auto flex flex-row justify-between items-center px-6 xs:px-[11.458vw] pb-12 xs:pb-24 xs:p-24">
          <div className="mt-[20%] md:mt-0 flex flex-col items-center md:items-start gap-6 xs:w-[min-content] max-w-[450px]">
            <h5 className="text-base xs:text-xl md:text-h5 uppercase text-purple tracking-h5">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="leading-normal uppercase text-h1-mobile xs:text-h1 font-bellefair">
              space
            </h1>
            <p className="leading-6 xs:leading-8 text-purple text-center md:text-start text-base md:text-bodytxt">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Button />
        </div>
      </main>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[-2] mix-blend-lighten">
        {pathname === "/" ? (
          <div className="relative background-main w-full h-full">
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
        ) : null}
      </div>
    </>
  );
}
