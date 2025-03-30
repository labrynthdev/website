"use client";

import Dots from "@/components/ui/dots";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
// import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";

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
        className="text-[20rem] font-semibold"
      >
        <p className="inline">
          {/* animation="slideUp" by="character"> */}
          la
        </p>
        <motion.div
          //   initial={{ scale: 0 }}
          //   animate={{
          //     scale: 1,
          //   }}
          //   transition={{
          //     duration: 0.5,
          //     delay: 0.2,
          //   }}
          className="inline-block"
        >
          <Image
            src="/letters/b.png"
            alt="b"
            width={220}
            height={220}
            className="inline mb-10 "
          />
        </motion.div>
        <p className="inline">
          {/* animation="slideUp" by="character" delay={0.4}> */}
          ryn
        </p>
        <motion.div
          //   initial={{ scale: 0 }}
          //   animate={{
          //     scale: 1,
          //   }}
          //   transition={{
          //     duration: 0.5,
          //     delay: 0.6,
          //   }}
          className="inline-block"
        >
          <Image
            src="/letters/t.png"
            alt="t"
            width={180}
            height={180}
            className="inline mb-10"
          />
        </motion.div>
        <p className="inline">
          {/* animation="slideUp"
          by="character"
          delay={0.8}
        > */}
          h
        </p>
      </motion.h1>

      <div className="relative w-full flex flex-col  items-center">
        <div className="absolute bg-[url(/img/wave-background.png)] bg-cover opacity-5 h-[575px] w-full -top-28 z-0"></div>
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
          className="absolute -top-[250px] align-center z-0"
        >
          <Image
            alt="labyrinth"
            width={730}
            height={600}
            src="/assets/labyrnth.svg"
          />
        </motion.div>

        <div className="flex justify-between w-full max-w-7xl mx-auto z-10">
          <BlurFade
            delay={0.6}
            duration={0.4}
            direction="up"
            className="flex flex-col"
          >
            <div className="flex items-center gap-1">
              <Image
                src="/assets/avatars.svg"
                width={150}
                height={50}
                alt="avatars"
              />
              <h1 className="text-[50px] font-semibold">2M+</h1>
            </div>
            <div className="text-[#717171]">Lorem ipsum dolor sit amet</div>
          </BlurFade>

          <BlurFade
            direction="up"
            delay={0.6}
            duration={0.4}
            className="w-42 align-middle text-[#717171]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </BlurFade>
        </div>
        <div className="flex justify-between w-full max-w-7xl mx-auto mt-[150px] z-10">
          <BlurFade
            className="w-82 align-middle text-black flex flex-col"
            inView
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <Dots count={30} />
          </BlurFade>

          <BlurFade inView>
            <motion.a
              href="/"
              className="flex flex-col items-center justify-center rounded-full bg-[#D1FF58] h-[120px] w-[120px]"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
            >
              Explore
              <ChevronDown className="w-4 h-4" />
            </motion.a>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
