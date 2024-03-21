"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import classes from "./header.module.css";
const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="w-full top-0 md:top-10 left-0 h-24 flex justify-between items-center pl-6 xs:pl-10 md:pl-16">
        <div className="mr-0 md:mr-16 flex justify-between w-full xs:w-fit">
          <Link
            href="/"
            className="logo flex w-10 xs:w-12 h-10 xs:h-12 relative"
          >
            <Image src={"logo.svg"} alt="" fill className="w-8 h-8" priority />
          </Link>
          <div className="text-white flex justify-center items-center xs:hidden pr-6 z-[100]">
            <button
              className="burgermenu relative w-[24px] h-[21px]"
              
            >
              <input type="checkbox" id="toggle" onClick={handleOpenMenu} />
              <label htmlFor="toggle"></label>
              
            </button>
          </div>
        </div>
        <div className="line z-[2]"></div>
        <div
          className={`menu-list text-white pl-[5.215vw] md:pr-[10vw] md:pl-[8vw] bg-white bg-opacity-[0.04] z-[99] xs:z-[1] h-fit ${
            isOpen ? "translate-x-0 xs:translate-x-0" : "translate-x-[100%] xs:translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="w-[254px] xs:w-full flex flex-col xs:flex-row items-start xs:items-center gap-[8px] md:gap-12 text-sm md:text-base uppercase tracking-[2.7px] h-screen xs:h-24 md:h-content pt-24 xs:pt-0">
            {["home", "destination", "crew", "technology"].map(
              (item: string, index: number) => {
                let itempath = item === "home" ? "/" : `/${item}`;
                const isActive = pathname === itempath;
                return (
                  <li
                    key={index}
                    className={`w-full min-w-max h-[2.5rem] xs:h-full flex items-center ${
                      isActive ? classes.active : ""
                    }`}
                  >
                    <Link
                      href={itempath}
                      className="menu-item flex gap-4 justify-center"
                      onClick={handleOpenMenu}
                    >
                      <span className="font-[700]">0{index}</span> {item}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
