"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
export default function DestinationPage() {
  const image = ["moon", "mars", "europa", "titan"];
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
    <div className="w-3/5">
      <h5 className="text-h5 tracking-h5 uppercase">
        <span>01</span> Pick your destination
      </h5>
      <div className="relative top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="star-container opacity-0 relative w-fit h-fit rounded-full overflow-hidden bg-primary shadow-star shadow-white">
          <div className="absolute -bottom-[26rem] w-[761px] h-[761px] bg-primary rounded-full z-[1] blur-2xl"></div>
          <Image
            src="/media/moon.png"
            alt=""
            width={445}
            height={445}
            className="destination w-auto m-auto relative z-[0]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
