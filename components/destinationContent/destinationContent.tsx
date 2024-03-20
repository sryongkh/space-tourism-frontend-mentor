"use client";
import React from "react";
interface Destination {
  img: string;
  planet: string;
  description: string;
  avgdistance: string;
  travelTime: string;
}
interface DestinationContentProps {
  destinations: Destination[];
}
const DestinationContent = ({ destination }: any) => {
  return (
    <div className="flex flex-col xs:px-10 lg:px-0">
      <h2 className="font-bellefair text-h3 xs:text-h1-mobile lg:text-h2 text-center lg:text-start uppercase my-4 xs:my-8 lg:my-9">
        {destination.planet}
      </h2>
      <p className="leading-8 text-purple text-bodytxt text-center lg:text-start pb-0 xs:pb-5 lg:pb-7">
        {destination.description}
      </p>
      <div className="w-full h-[0.5px] bg-[#383B4B] my-7"></div>
      <div className="w-full flex flex-col xs:flex-row gap-8">
        <div className="w-full xs:w-1/2 uppercase flex flex-col items-center lg:items-start">
          <p className="label text-purple text-sm tracking-subheading mb-3">
            AVG. DISTANCE
          </p>
          <p className="text-subh1 font-bellefair uppercase">
            {destination.avgdistance}
          </p>
        </div>
        <div className="w-full xs:w-1/2 uppercase flex flex-col items-center lg:items-start">
          <p className="label text-purple text-sm tracking-subheading mb-3">
            Est. travel time
          </p>
          <p className="text-subh1 font-bellefair">{destination.travelTime}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
