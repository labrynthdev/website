"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
export default function Pillars({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
        <p className="text-left text-2xl w-[20rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>

        <p className="text-right w-[20rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex justify-center mt-10 pr-20">
        <div className="flex gap-4 justify-between items-end w-6xl">
          <Pillar
            name="Company Name"
            description="Lorem ipsum dolor sit amet, consectetur"
            value={1.2}
          />
          <Pillar
            size="sm"
            name="Company Name"
            description="Lorem ipsum dolor sit amet, consectetur"
            value={1.2}
          />
          <Pillar
            size="xl"
            name="Company Name"
            description="Lorem ipsum dolor sit amet, consectetur"
            value={1.2}
          />
          <Pillar
            name="Company Name"
            description="Lorem ipsum dolor sit amet, consectetur"
            value={1.2}
          />
          <Pillar
            size="lg"
            name="Company Name"
            description="Lorem ipsum dolor sit amet, consectetur"
            value={1.2}
          />
        </div>
      </div>
      <div className="h-10 bg-white"></div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#DBF11F] gap-4">
        <Marquee pauseOnHover className="[--duration:10s]">
          <div className="flex items-center text-2xl gap-4">
            <Image src="/logo.svg" alt="logo" width={20} height={20} />
            LOREM IPSUM
          </div>
          <div className="flex items-center text-2xl gap-4">
            <Image src="/logo.svg" alt="logo" width={20} height={20} />
            LOREM IPSUM
          </div>
          <div className="flex items-center text-2xl gap-4">
            <Image src="/logo.svg" alt="logo" width={20} height={20} />
            LOREM IPSUM
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
  value: number;
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
      <p className="text-5xl font-semibold">{value}M</p>
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
