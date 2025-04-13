"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import textData from "@/lib/text-data";

export default function Pillars({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto px-5 xl:px-0">
        <p className="text-left text-2xl w-[20rem]">
          {textData.pillars.intro.left}
        </p>

        <p className="text-right w-[20rem]">{textData.pillars.intro.right}</p>
      </div>
      <div className="flex justify-center mt-10 pr-20 overflow-hidden">
        <div className="flex gap-4 justify-between items-end  min-w-5xl w-full max-w-6xl  overflow-hidden">
          {textData.pillars.items.map((item, index) => (
            <Pillar
              key={index}
              name={item.name}
              description={item.description}
              value={item.value}
              size={
                index === 1
                  ? "sm"
                  : index === 2
                  ? "xl"
                  : index === 4
                  ? "lg"
                  : "md"
              }
            />
          ))}
        </div>
      </div>
      <div className="h-10 bg-white"></div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#DBF11F] gap-4">
        <Marquee pauseOnHover className="[--duration:10s]">
          <div className="flex items-center text-2xl gap-4">
            <Image src="/logo.svg" alt="logo" width={20} height={20} />
            {textData.pillars.marquee}
          </div>
          <div className="flex items-center text-2xl gap-4">
            <Image src="/logo.svg" alt="logo" width={20} height={20} />
            {textData.pillars.marquee}
          </div>
          <div className="flex items-center text-2xl gap-4">
            <Image src="/logo.svg" alt="logo" width={20} height={20} />
            {textData.pillars.marquee}
          </div>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}

function Pillar({
  size = "md",
  name,
  description,
  value,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  name: string;
  description: string;
  value: string;
}) {
  const pillarSize = {
    sm: "w-[6rem] h-[18rem]",
    md: "w-[8rem] h-[24rem]",
    lg: "w-[8rem] h-[26rem]",
    xl: "w-[10rem] h-[30rem]",
  };

  const containerSize = {
    sm: "w-[2.5rem] h-[18rem]",
    md: "w-[3rem] h-[24rem]",
    lg: "w-[3.5rem] h-[26rem]",
    xl: "w-[4rem] h-[30rem]",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-5xl font-semibold">{value}</p>
      <p className="text-center w-[10rem]">{description}</p>
      <div className="relative">
        <div
          className={`absolute bg-[url('/assets/pillar.svg')] bg-no-repeat bg-contain ${pillarSize[size]}`}
        ></div>
        <div
          className={`bg-contain flex items-center justify-center ${containerSize[size]}`}
        >
          <p className="-rotate-90 inline-block text-2xl whitespace-nowrap">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
