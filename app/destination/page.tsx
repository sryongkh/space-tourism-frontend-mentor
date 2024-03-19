"use client";
import React from "react";
import destinations from "./destination.json";
import Image from "next/image";
import gsap from "gsap";
import Tab from "@/components/tab/tab";
import DestinationContent from "@/components/destinyContent/destinyContent";
import { motion } from "framer-motion";
export default function destinationPage() {
  const [selectedPlanet, setSelectedPlanet] = React.useState(
    destinations[0].planet
  );
  const selectedDestination = destinations.find(
    (destination) => destination.planet === selectedPlanet
  );
  React.useEffect(() => {
    const starContainer = document.querySelector(".star-container");
    const star = document.querySelector(".destination");
    if (star) {
      gsap
        .fromTo(
          starContainer,
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .then(() => {
          gsap.to(star, {
            rotation: 360,
            duration: 32,
            ease: "ease",
            repeat: -1,
          });
        });
    }
  }, []);
  return (
    <>
      <div className="w-full h-[80%] mt-[auto] px-[11.458vw] pb-32 flex text-white relative z-[0]">
        <div className="w-3/5">
          <h5 className="text-h5 tracking-h5 uppercase">
            <span>01</span> Pick your destination
          </h5>
          <div className="relative top-0 left-0 w-full h-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="star-container opacity-0 relative w-fit h-fit rounded-full overflow-hidden bg-primary shadow-star shadow-white"
            >
              <div className="absolute -bottom-[26rem] w-[761px] h-[761px] bg-primary rounded-full z-[1] blur-2xl"></div>
              {selectedDestination ? (
                <Image
                  src={selectedDestination.img}
                  alt={selectedDestination.planet}
                  width={445}
                  height={445}
                  className="destination w-auto m-auto relative z-[0]"
                  priority
                />
              ) : (
                <p>Destination not found</p>
              )}
            </motion.div>
          </div>
        </div>
        <div className="w-2/5 min-h-[445px] h-full flex flex-col">
          <Tab destinations={destinations} onPlanetSelect={setSelectedPlanet} />
          {selectedDestination && (
            <DestinationContent destination={selectedDestination} />
          )}
        </div>
      </div>
    </>
  );
}