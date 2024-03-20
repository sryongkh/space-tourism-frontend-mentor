"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import tech from "./technology.json";
function TechPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const pathname = usePathname();
  return (
    <>
      <main className="w-full h-full lg:h-[80%] mt-[auto] pb-12 lg:pb-32 flex flex-col text-white relative z-[0]">
        <h5 className="text-base text-h5-tablet md:text-h5 tracking-navtxt xs:tracking-h5 uppercase text-center xs:text-start px-6 xs:px-10 lg:px-[11.458vw] pt-24 xs:pt-36 lg:pt-0">
          <span className="font-bold opacity-25 mr-5">03</span> SPACE LAUNCH 101
        </h5>
        <div className="flex flex-col gap-4 lg:flex-row w-full h-full lg:pl-[11.458vw]">
          <div className="w-full lg:w-full flex flex-col lg:flex-row gap-8 lg:gap-[80px] items-center order-2 lg:order-1 px-6 xs:px-0">
            <div className="pagination-num flex flex-row lg:flex-col gap-4">
              {tech.map((_, index) => (
                <button
                  key={index}
                  className={`w-[60px] lg:w-20 h-[60px] lg:h-20 border-[0.5px] rounded-full font-bellefair text-2xl lg:text-[2rem] ${
                    index === selectedIndex
                      ? "text-black bg-white"
                      : "text-white bg-transparent"
                  }`}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                >
                  {index}
                </button>
              ))}
            </div>
            <div className="flex flex-col">
              <p className="text-purple text-base uppercase mb-2 leading-8 text-center lg:text-start">
                THE TERMINOLOGY…
              </p>
              <h3 className="text-[24px] xs:text-[40px] lg:text-h3 font-bellefair uppercase mb-4 text-center lg:text-start">
                {tech[selectedIndex].vehicle}
              </h3>
              <p className="text-bodytxt leading-8 text-purple max-w-[480px] text-center lg:text-start">
                {tech[selectedIndex].description}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-full lg:max-w-[515px] flex items-center order-1 lg:order-2 py-10 lg:py-0">
            <div className="relative w-full flex items-center justify-center h-[310px] lg:h-[527px] overflow-hidden">
              <Image
                src={tech[selectedIndex].img}
                alt={tech[selectedIndex].vehicle}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                className="absolute lg:relative"
                priority
              />
            </div>
          </div>
        </div>
      </main>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[-2] mix-blend-lighten overflow-hidden">
        {pathname === "/technology" ? (
          <div className="relative background-main w-full h-full">
            <Image
              src={"/bg-technology.png"}
              alt=""
              fill
              objectFit="cover"
              objectPosition="center center"
              sizes="(max-width: 768px) 100vw"
              className="h-full flex mix-blend-lighten"
              priority
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TechPage;
