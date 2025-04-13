import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import textData from "@/lib/text-data";

export default function SquareCta({ className }: { className: string }) {
  return (
    <section
      className={cn(
        className,
        `w-full bg-[url('/assets/pillars-bg.svg')] sm:bg-[url('/assets/pillars-2.svg')] 
        bg-contain bg-center bg-no-repeat 
        min-h-[50rem] md:min-h-[50rem] 
        flex justify-center
        items-start sm:items-center
        pt-[10rem] sm:pt-[0rem]`
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <div className=" text-center text-3xl md:text-4xl lg:text-5xl max-w-lg md:max-w-xl lg:max-w-3xl ">
          <div className="hidden sm:inline-block">
            {textData.square_cta.heading}
            <br />
            <Image
              src="/assets/avatars.svg"
              width={150}
              height={50}
              alt="avatars"
              className="inline-block mx-2 w-24 sm:w-28 md:w-32 lg:w-32"
            />
          </div>
          <div className="inline-block sm:hidden">
            <Image
              src="/assets/avatars.svg"
              width={150}
              height={50}
              alt="avatars"
              className="inline-block mx-2 w-24 sm:w-28 md:w-32 lg:w-40"
            />
            <br />
            {textData.square_cta.heading}
          </div>
        </div>
        <p className="text-center max-w-xl">
          {textData.square_cta.description}
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="mx-2 mt-5"
        >
          <Image
            src="/assets/call-cta.svg"
            width={150}
            height={50}
            alt="avatars"
            className="w-32 sm:w-24 md:w-32 lg:w-40"
          />
        </motion.div>
      </div>
    </section>
  );
}
