"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";

export default function Stats({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start justify-center ">
          <p className="text-[3rem]">.........................</p>
          <span className="">CLIENTS</span>

          <h1 className=" font-semibold text-[6rem] my-0">
            <NumberTicker value={200} />
            <span className="text-[#9BD500]">+</span>
          </h1>
        </div>

        <div className="flex flex-col items-start justify-center ">
          <p className="text-[3rem]">.........................</p>
          <span className="">PROJECTS</span>

          <h1 className=" font-semibold text-[6rem] my-0">
            <NumberTicker value={300} />
            <span className="text-[#9BD500]">+</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <p className="text-[3rem]">.........................</p>
          <span className="">FOLLOWERS</span>

          <h1 className=" font-semibold text-[6rem] my-0">
            <NumberTicker value={90} />
            <span className="text-[#9BD500]">K</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <p className="text-[3rem]">.........................</p>
          <span className="">HAPPY CLIENTS</span>

          <h1 className=" font-semibold text-[6rem] my-0">
            <NumberTicker value={100} />
            <span className="text-[#9BD500]">%</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
