"use client";

import Dots from "@/components/ui/dots";
import Image from "next/image";

export default function Description({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="flex flex-col items-center justify-center w-full text-5xl max-w-5xl mx-auto">
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          <span className="text-[#9BD500]">elit, sed do eiusmod.</span>
        </p>

        <p className="text-center mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <span className="text-[#9BD500]"> eiusmod</span> tempor incididunt ut
          labore et dolore magna aliqua.
        </p>

        <div className="flex items-center justify-center gap-6 mt-20">
          <Dots className="text-[#0000003B]" count={30} />
          <Image src="/logo_3x.svg" alt="avatars" width={50} height={50} />
          <Dots className="text-[#0000003B]" count={30} />
        </div>
      </div>
    </section>
  );
}
