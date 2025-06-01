"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import Dots from "@/components/ui/dots";
import textData from "@/lib/text-data";

export default function Stats({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full items-center justify-items-center">
        <div className="flex flex-col items-start justify-center ">
          <Dots className="" count={12} />
          <span className="">{textData.stats.clients.label}</span>
          <h1 className=" font-semibold text-5xl lg:text-7xl my-0">
            <NumberTicker value={50} />
            <span className="text-[#9BD500]">+</span>
          </h1>
        </div>

        <div className="flex flex-col items-start justify-center ">
          <Dots className="" count={12} />
          <span className="">{textData.stats.projects.label}</span>

          <h1 className=" font-semibold text-5xl lg:text-7xl my-0">
            <NumberTicker value={120} />
            <span className="text-[#9BD500]">+</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <Dots className="" count={12} />
          <span className="">{textData.stats.impressions.label}</span>

          <h1 className=" font-semibold text-5xl lg:text-7xl my-0">
            <NumberTicker value={1} />
            <span className="text-[#9BD500]">B+</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <Dots className="" count={12} />
          <span className="">{textData.stats.happy_clients.label}</span>

          <h1 className=" font-semibold text-5xl lg:text-7xl my-0">
            <NumberTicker value={100} />
            <span className="text-[#9BD500]">%</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
