"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import crews from "./crews.json";
import { motion } from "framer-motion";
export interface Crew {
  img: string;
  name: string;
  position: string;
  description: string;
}
export default function CrewPage() {
  const pathname = usePathname();
  const [selectedCrewIndex, setSelectedCrewIndex] = React.useState(0);
  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <>
      <motion.div
        key={selectedCrewIndex}
        {...fadeInAnimation}
        className="flex w-[90%] xs:w-full lg:w-5/12 max-w-[60%] xs:max-w-[400px] lg:max-w-[700px] max-h-[834px] absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-24 translate-y-[20%] xs:translate-y-0 bottom-1/2 xs:bottom-0 px-12 border-b-[0.5px] xs:border-b-0 border-[#383B4B]"
      >
        <Image
          src={crews[selectedCrewIndex].img}
          width={568}
          height={712}
          alt={crews[selectedCrewIndex].name}
          className="w-full"
          priority
        ></Image>
      </motion.div>
      <main className="relative w-full h-full lg:h-[80%] mt-[auto] px-6 xs:px-10 lg:px-[11.458vw] pt-24 xs:pt-36 lg:pt-0 flex flex-col lg:flex-row justify-start text-white">
        <div className="w-full h-full flex flex-col items-start justify-start relative z-[1]">
          <h5 className="text-base text-h5-tablet md:text-h5 tracking-navtxt xs:tracking-h5 uppercase text-center xs:text-start">
            <span className="font-bold opacity-25 mr-5">02</span> Meet your crew
          </h5>
          <div className="w-full h-full flex flex-col items-center lg:items-start justify-end xs:justify-start lg:justify-center mt-12 order-2">
            <h4 className="text-base xs:text-[24px] lg:text-h4 mb-2 lg:mb-4  font-bellefair uppercase opacity-25">
              {crews[selectedCrewIndex].role}
            </h4>
            <h2 className="text-[24px] xs:text-[40px] lg:text-h3 mb-4 lg:mb-7 font-bellefair uppercase">
              {crews[selectedCrewIndex].name}
            </h2>
            <p className="text-center lg:text-start text-base lg:text-bodytxt leading-8 max-w-[444px] text-purple">
              {crews[selectedCrewIndex].information}
            </p>
            <div className="pagination flex justify-center lg:justify-start gap-4 lg:gap-6 py-8 lg:py-32 order-1">
              {crews.map((_, index) => (
                <div
                  key={index}
                  className={`cursor-pointer w-[10px] lg:w-4 h-[10px] lg:h-4 rounded-full bg-white transition-all hover:opacity-50 ${
                    index === selectedCrewIndex ? "opacity-100" : "opacity-25"
                  }`}
                  onClick={() => setSelectedCrewIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[-2] mix-blend-lighten">
        {pathname === "/crew" ? (
          <div className="relative background-main w-full h-full">
            <Image
              src={"/bg-crew.png"}
              alt=""
              fill
              objectFit="cover"
              objectPosition="center center"
              sizes="(max-width: 768px) 100vw"
              className="flex mix-blend-lighten"
              priority
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
