"use client";

import Dots from "@/components/ui/dots";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import textData from "@/lib/text-data";
import { scrollToHash } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="flex flex-col items-center w-full relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="text-[6rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem] font-semibold"
      >
        <p className="inline">la</p>
        <motion.div className="inline-block">
          <Image
            priority={true}
            src="/letters/b.png"
            alt="b"
            width={220}
            height={220}
            className="inline  w-[4.5rem] mb-4 sm:w-[6.5rem] sm:mb-3 md:w-[8rem] md:mb-5 lg:w-[11rem] lg:mb-6 xl:w-[14rem] xl:mb-10"
          />
        </motion.div>
        <p className="inline">yrn</p>
        <motion.div className="inline-block">
          <Image
            priority={true}
            src="/letters/t.png"
            alt="t"
            width={180}
            height={180}
            className="inline w-[3.5rem] mb-4 sm:w-[5.5rem] sm:mb-4 md:w-[6rem] md:mb-4 lg:w-[9rem] lg:mb-8 xl:w-[12rem] xl:mb-10"
          />
        </motion.div>
        <p className="inline">h</p>
      </motion.h1>

      <div className="relative w-full flex flex-col  items-center">
        <div className="absolute bg-[url(/img/wave-background.png)] bg-cover opacity-5 h-[575px] w-full -top-8 sm:-top-14 md:-top-18 lg:-top-22 xl:-top-28 z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="absolute -top-[95px]  sm:-top-[120px] md:-top-[160px] lg:-top-[200px] xl:-top-[250px]  align-center z-0"
        >
          <Image
            priority={true}
            alt="labyrinth"
            width={730}
            height={600}
            className="w-[25rem] sm:w-[25rem] md:w-[30rem] lg:w-[40rem] xl:w-[50rem]"
            src="/assets/labyrnth.svg"
          />
        </motion.div>

        <div className="flex justify-between w-full max-w-7xl z-10 mt-[15rem] sm:mt-0 mx-auto ">
          <BlurFade
            delay={0.6}
            duration={0.4}
            direction="up"
            className="flex flex-col mx-5 xl:mx-0"
          >
            <div className="flex items-center gap-1 sm:flex-col sm:items-start md:flex-row md:items-center ">
              <Image
                src="/assets/avatars.svg"
                width={150}
                height={50}
                alt="avatars"
                className="w-[6rem] md:w-[6rem] lg:w-[8rem] xl:w-[10rem]"
              />
              <h1 className="text-[2rem] sm:text-[2rem] lg:text-[3rem] xl:text-[4rem] font-semibold">
                {textData.hero.stats.value}
              </h1>
            </div>
            <div className="text-[#717171] max-w-auto sm:max-w-[8rem] md:max-w-auto">
              {textData.hero.stats.description}
            </div>
          </BlurFade>

          <BlurFade
            direction="up"
            delay={0.6}
            duration={0.4}
            className="w-42 align-middle text-[#717171] max-w-full sm:max-w-[8rem] md:max-w-full text-left sm:text-right "
          >
            {textData.hero.description_1}
          </BlurFade>
        </div>

        <div className="flex justify-between  items-center  w-full max-w-7xl mx-auto z-10  mt-5 sm:mt-[150px] flex-col sm:flex-row px-5 xl:px-0 ">
          <Dots
            className="block sm:hidden text-3xl w-full overflow-hidden"
            count={50}
          />

          <BlurFade
            className="w-full sm:w-82 align-middle text-black flex flex-col mx-5 xl:mx-0"
            inView
          >
            {!!textData.hero.description_2 && (
              <>
                {textData.hero.description_2}
                <Dots className="hidden sm:block " count={30} />
              </>
            )}
          </BlurFade>

          <BlurFade
            inView
            className="justify-end mt-5 md:mt-0 w-full sm:w-auto flex md:block"
          >
            <motion.a
              onClick={() => {
                scrollToHash("services");
              }}
              className="flex flex-col items-center justify-center rounded-full bg-[#D1FF58] h-[120px] w-[120px]"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
            >
              {textData.hero.cta}
              <ChevronDown className="w-4 h-4" />
            </motion.a>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
