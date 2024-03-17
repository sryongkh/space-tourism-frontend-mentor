import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="absolute top-0 md:top-10 left-0 w-full h-24 flex justify-between items-center pl-6 xs:pl-10 md:pl-16">
        <div className="mr-0 md:mr-16">
          <Link href="/" className="logo flex relative w-10 xs:w-12 h-10 xs:h-12">
            <Image
              src={"logo.svg"}
              alt=""
              fill
              priority
            />
          </Link>
        </div>

        <div className="line z-[1]"></div>
        <div className="menu-list text-white px-[5.215vw] md:px-[8vw] bg-white bg-opacity-[0.04] z-[0]">
          <ul className="flex items-center gap-[36px] md:gap-12 md:py-10 text-sm md:text-base uppercase tracking-[2.7px] h-24 md:h-content">
            {["home", "destination", "crew", "technology"].map(
              (item: string, index: number) => {
                let className = "menu-item flex gap-4 justify-center";
                if (index === 3) className += "pr-0 md:pr-10";
                return (
                  <li key={index} className="min-w-max">
                    <Link href={`#`} className={className}>
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
