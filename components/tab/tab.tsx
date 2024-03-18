"use client";
import React from "react";
import Link from "next/link";
import classes from "./tab.module.css";
export interface DestinationPath {
  destination: string;
}
const Tab = ({ destination }: DestinationPath) => {
  return (
    <div className="flex flex-col justify-center">
      <ul className="flex gap-10">
        {["moon", "mars", "europa", "titan"].map((item, index) => {
          return (
            <div
              key={index}
              className={`flex justify-end items-center tracking-navtxt ${classes.active}`}
            >
              <li className="w-fit h-8 uppercase">
                <Link href={"/"}>{item}</Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Tab;
