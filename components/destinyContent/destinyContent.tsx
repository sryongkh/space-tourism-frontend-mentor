"use client";
import React from "react";
export interface DestinationPath {
  destination: string;
}
const DestinyContent: React.FC<DestinationPath> = ({ destination }) => {
  const [currentDestination, setCurrentDestination] =
    React.useState(destination);
  return (
    <div className="flex flex-col">
      <h2 className="font-bellefair text-h2 uppercase my-9">
        {currentDestination}
      </h2>
      <p className="leading-8 text-purple text-bodytxt pb-7">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr className="my-7" />
      <div className="w-full flex">
        <div className="w-1/2 uppercase">
          <p className="label text-purple text-sm tracking-subheading mb-3">
            AVG. DISTANCE
          </p>
          <p className="text-subh1 font-bellefair">
            384,400 <span>km</span>
          </p>
        </div>
        <div className="w-1/2 uppercase">
          <p className="label text-purple text-sm tracking-subheading mb-3">
            Est. travel time
          </p>
          <p className="text-subh1 font-bellefair">
            3 <span>days</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinyContent;
