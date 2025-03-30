import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SquareCta({ className }: { className: string }) {
  return (
    <section
      className={cn(
        className,
        "w-full bg-[url('/assets/pillars-2.svg')] bg-contain bg-center bg-no-repeat min-h-[45rem] flex items-center justify-center"
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-6xl text-center max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur
          <Image
            src="/assets/avatars.svg"
            width={150}
            height={50}
            alt="avatars"
            className="inline-block mx-2"
          />
          adipiscing.
        </p>
        <p className=" text-center max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
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
          />
        </motion.div>
      </div>
    </section>
  );
}
