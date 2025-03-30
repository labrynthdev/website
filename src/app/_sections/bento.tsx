import Chart from "@/components/svgs/chart";
import Spheres from "@/components/svgs/spheres";
import Web3 from "@/components/svgs/web3";
import Image from "next/image";
export default function Bento({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-[#222222] rounded-3xl shadow-xl relative overflow-hidden">
          {/* Badge */}
          <div className="inline-block bg-[#7a8c21] text-[#e9ff00] px-6 py-2 m-8 rounded-full text-sm font-medium mb-6">
            lorem ipsum dolor
          </div>

          {/* Main Text */}
          <div className="mb-12 ml-8">
            <h2 className="text-white text-4xl font-bold leading-tight">
              Lorem ipsum dolor
              <br />
              sit amet, consectetur
            </h2>
            <h3 className="text-gray-400 text-4xl font-bold mt-2">
              adipiscing elit
            </h3>
          </div>

          {/* Chart */}
          <div className="h-64 relative mb-12">
            <Chart />
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#7a8c21] mr-2"></div>
              <span className="text-white">Before Labrynth</span>
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
              <span className="text-white">After Labrynth</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className=" overflow-hidden flex items-center justify-center">
              <Spheres />
            </div>
            <div className=" overflow-hidden flex items-center justify-center">
              <Web3 />
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden bg-[#ffffff] rounded-xl grid grid-cols-5">
            <div className="col-span-3">
              <div className="flex items-center gap-2 my-4 mx-8">
                <div className="w-4 h-4 rounded-full bg-[#16d151]"></div>
                <p className="text-[#000000] text-lg">
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {/* Main heading */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000] leading-tight mx-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </h1>
            </div>
            {/* Abstract shape - using a placeholder that would be replaced with the actual image */}
            <div className="w-full h-full col-span-2">
              <Image
                width={442}
                height={455}
                src="/img/flower.png"
                alt="Abstract shape"
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom banner */}
            <div className="absolute bottom-0 w-screen transform -rotate-6 origin-bottom-left translate-y-1/4 overflow-hidden">
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
                    <span className="text-[#ffffff] text-2xl">lorem ipsum</span>
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
