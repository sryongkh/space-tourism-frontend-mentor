"use client";
import React from "react";
import classes from "./tab.module.css";
const Tab = ({ destinations, onPlanetSelect }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <ul className="flex gap-10 items-center justify-center lg:justify-start">
        {destinations.map((item: any) => (
          <li
            key={item.planet}
            className="flex justify-end items-center tracking-navtxt w-fit h-8 uppercase cursor-pointer"
          >
            <a onClick={() => onPlanetSelect(item.planet)}>{item.planet}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
