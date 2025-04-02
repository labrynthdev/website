"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import Dots from "@/components/ui/dots";

export default function Stats({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full items-center justify-items-center">
        <div className="flex flex-col items-start justify-center ">
          <Dots className="" count={12} />
          <span className="">CLIENTS</span>
          <h1 className=" font-semibold text-5xl lg:text-7xl my-0">
            <NumberTicker value={200} />
            <span className="text-[#9BD500]">+</span>
          </h1>
        </div>

        <div className="flex flex-col items-start justify-center ">
          <Dots className="" count={12} />
          <span className="">PROJECTS</span>

          <h1 className=" font-semibold text-5xl lg:text-7xl my-0">
            <NumberTicker value={300} />
            <span className="text-[#9BD500]">+</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <Dots className="" count={12} />
          <span className="">FOLLOWERS</span>

          <h1 className=" font-semibold text-5xl lg:text-7xl my-0">
            <NumberTicker value={90} />
            <span className="text-[#9BD500]">K</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <Dots className="" count={12} />
          <span className="">HAPPY CLIENTS</span>

          <h1 className=" font-semibold text-5xl lg:text-7xl my-0">
            <NumberTicker value={100} />
            <span className="text-[#9BD500]">%</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
