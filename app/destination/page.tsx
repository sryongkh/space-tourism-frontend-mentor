"use client";
import React from "react";
import destinations from "./destination.json";
import Image from "next/image";
import gsap from "gsap";
import Tab from "@/components/tab/tab";
import DestinationContent from "@/components/destinationContent/destinationContent";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function DestinationPage() {
  const pathname = usePathname();
  const [selectedPlanet, setSelectedPlanet] = React.useState(
    destinations[0].planet
  );
  const selectedDestination = destinations.find(
    (destination) => destination.planet === selectedPlanet
  );

  React.useEffect(() => {
    const starContainer = document.querySelector(".star-container");
    const star = document.querySelector(".destination");
    if (starContainer && star) {
      gsap
        .fromTo(
          starContainer,
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .then(() => {
          gsap.to(star, {
            rotation: 360,
            duration: 28,
            ease: "none",
            repeat: -1,
          });
        });
    }
  }, [selectedDestination]);
  return (
    <>
      <main className="w-full h-full lg:h-[80%] mt-[auto] px-6 xs:px-10 lg:px-[11.458vw] pt-24 xs:pt-36 lg:pt-0 pb-12 lg:pb-32 flex flex-col lg:flex-row text-white relative z-[0]">
        <div className="w-full lg:w-3/5">
          <h5 className="text-base text-h5-tablet md:text-h5 tracking-navtxt xs:tracking-h5 uppercase text-center xs:text-start">
            <span className="font-bold opacity-25 mr-5">01</span> Pick your
            destination
          </h5>
          <div className="w-full h-full flex justify-center items-center mt-4 lg:mt-0">
            {selectedDestination ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="star-container opacity-0 relative w-fit h-fit rounded-full overflow-hidden bg-primary shadow-star"
              >
                <div className="absolute -bottom-[20rem] md:-bottom-[28rem] lg:-bottom-[26rem] w-[513px] md:w-[713px] h-[513px] md:h-[713px] bg-primary rounded-full z-[1] blur-2xl"></div>
                <Image
                  src={selectedDestination.img}
                  alt={selectedDestination.planet}
                  width={445}
                  height={445}
                  sizes="(max-width: 1440px) 100vw"
                  className="destination w-[170px] xs:w-[300px] lg:w-[445px] relative z-[0]"
                  priority
                />
              </motion.div>
            ) : (
              <p className="text-center">Destination not found</p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-2/5 min-h-[445px] h-full flex flex-col pt-[8%] lg:pt-[10%] lg:pl-[3%]">
          <Tab destinations={destinations} onPlanetSelect={setSelectedPlanet} />
          {selectedDestination && (
            <DestinationContent destination={selectedDestination} />
          )}
        </div>
      </main>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[-2] mix-blend-lighten">
        {pathname === "/destination" ? (
          <div className="relative background-main w-full h-full">
            <Image
              src={"/bg-destination.png"}
              alt=""
              fill
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
