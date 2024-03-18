import React from "react";
import Tab from "@/components/tab/tab";
export default function DestinationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full h-[80%] mt-[auto] px-[11.458vw] pb-32 flex text-white relative z-[0]">
        {children}
        <div className="w-2/5 min-h-[445px] h-full flex flex-col justify-center">
          <Tab />
          <h2 className="font-bellefair text-h2 uppercase my-9">Moon</h2>
          <p className="leading-8 text-purple text-bodytxt pb-7">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr className="my-7" />
          <div className="w-full flex">
            <div className="w-1/2 uppercase">
              <p className="label text-purple text-sm tracking-subheading mb-3">AVG. DISTANCE</p>
              <p className="text-subh1 font-bellefair">
                384,400 <span>km</span>
              </p>
            </div>
            <div className="w-1/2 uppercase">
              <p className="label text-purple text-sm tracking-subheading mb-3">Est. travel time</p>
              <p className="text-subh1 font-bellefair">
                3 <span>days</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
