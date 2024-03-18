import Image from "next/image";
import Button from "@/components/button/button";
export default function Home() {
  return (
    <main className="w-full h-full text-white relative flex">
      <div className="main-content w-full h-full md:h-fit relative mt-auto flex flex-row justify-between items-center px-6 xs:px-[11.458vw] pb-12 xs:pb-24 xs:p-24">
        <div className="mt-[20%] md:mt-0 flex flex-col items-center md:items-start gap-6 xs:w-[min-content] max-w-[450px]">
          <h5 className="text-base xs:text-xl md:text-h5 uppercase text-purple tracking-h5">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="leading-normal uppercase text-h1-mobile xs:text-h1 font-bellefair">
            space
          </h1>
          <p className="leading-6 xs:leading-8 text-purple text-center md:text-start text-base md:text-bodytxt">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Button />
      </div>
    </main>
  );
}
