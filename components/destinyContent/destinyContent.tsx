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
    <div className="flex flex-col">
      <h2 className="font-bellefair text-h2 uppercase my-9">
        {destination.planet}
      </h2>
      <p className="leading-8 text-purple text-bodytxt pb-7">
        {destination.description}
      </p>
      <hr className="my-7" />
      <div className="w-full flex">
        <div className="w-1/2 uppercase">
          <p className="label text-purple text-sm tracking-subheading mb-3">
            AVG. DISTANCE
          </p>
          <p className="text-subh1 font-bellefair uppercase">
            {destination.avgdistance}
          </p>
        </div>
        <div className="w-1/2 uppercase">
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
