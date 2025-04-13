"use client";

import Dots from "@/components/ui/dots";
import Image from "next/image";
import textData from "@/lib/text-data";

export default function Description({
  id,
  className,
}: {
  id: string;
  className: string;
}) {
  return (
    <section id={id} className={className}>
      <div className="flex flex-col items-center justify-center w-full  max-w-5xl mx-auto text-3xl sm:text-4xl xl:text-5xl px-5 xl:px-0 ">
        <p className="text-left md:text-center">
          {textData.description.paragraph1}
        </p>

        <p className="text-left md:text-center mt-10">
          {textData.description.paragraph2}
        </p>

        <div className="flex items-center justify-center gap-6 mt-20 w-full overflow-hidden">
          <Dots className="text-[#0000003B]" count={30} />
          <Image src="/logo_3x.svg" alt="avatars" width={50} height={50} />
          <Dots className="text-[#0000003B]" count={30} />
        </div>
      </div>
    </section>
  );
}
