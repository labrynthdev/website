import Chart from "@/components/svgs/chart";
import Spheres from "@/components/svgs/spheres";
import Web3 from "@/components/svgs/web3";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";
import textData from "@/lib/text-data";

export default function Bento({ className }: { className: string }) {
  const { width = 0 } = useWindowSize();

  const isMedium = width >= 768 && width < 1024;

  return (
    <section className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-0 md:gap-x-4   px-5 xl:px-0 w-full">
        <div className="col-span-1 bg-[#222222] rounded-3xl shadow-xl relative overflow-hidden w-full">
          <div className="inline-block bg-[#7a8c21] text-[#e9ff00] px-6 py-2 m-8 rounded-full text-sm font-medium mb-6">
            {textData.bento.tag}
          </div>
          <div className="mb-12 ml-8">
            <h2 className="text-white text-3xl sm:text-4xl md:text-3xl font-bold leading-tight">
              {textData.bento.heading.main}
            </h2>
            <h3 className="text-gray-400 text-3xl sm:text-4xl md:text-3xl  font-bold mt-2">
              {textData.bento.heading.sub}
            </h3>
          </div>
          <div className="h-48 md:h-32 relative mb-12 flex items-center justify-center">
            <Chart />
          </div>
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-2 lg:space-x-8 mb-8 xl:text-lg">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#7a8c21] mr-2"></div>
              <span className="text-white">
                {textData.bento.comparison.before}
              </span>
            </div>
            <div className="w-8">
              <svg viewBox="0 0 24 24" fill="none" className="w-full">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#e9ff00]  mr-2"></div>
              <span className="text-white">
                {textData.bento.comparison.after}
              </span>
            </div>
          </div>
        </div>
        {isMedium && (
          <BentoSvgs className="grid-cols-1 gap-y-4 hidden md:grid lg:hidden" />
        )}

        <div className="col-span-2 flex flex-col gap-y-4 gap-x-0 md:gap-x-4">
          {!isMedium && (
            <BentoSvgs className="grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-0 md:gap-x-4 grid lg:hidden xl:grid" />
          )}
          <div className="relative w-full h-full overflow-hidden bg-[#ffffff] rounded-xl grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-y-0">
            <div className="col-span-3">
              <div className="flex items-center gap-2 my-4 mx-8">
                <div className="w-4 h-4 rounded-full bg-[#16d151]"></div>
                <p className="text-[#000000] text-lg">
                  {textData.bento.section.tag}
                </p>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000] leading-tight mx-8">
                {textData.bento.section.heading}
              </h1>
            </div>

            <div className="w-full h-full col-span-2">
              <Image
                width={442}
                height={455}
                src="/img/flower.png"
                alt="Abstract shape"
                className="object-contain w-full"
                priority
              />
            </div>

            <div className="absolute bottom-30 md:bottom-0 w-screen transform -rotate-6 origin-bottom-left translate-y-1/4 overflow-hidden">
              <div className="bg-[#000000] py-4 flex items-center space-x-8 whitespace-nowrap">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center space-x-4">
                    <Image
                      src="/logo_white.svg"
                      alt="Abstract shape"
                      width={40}
                      height={40}
                      priority
                    />
                    <span className="text-[#ffffff] text-2xl">
                      {textData.bento.marquee}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoSvgs({ className }: { className: string }) {
  return (
    <div className={className}>
      <div className=" overflow-hidden flex items-center justify-center">
        <Spheres />
      </div>
      <div className=" overflow-hidden flex items-center justify-center">
        <Web3 />
      </div>
    </div>
  );
}
