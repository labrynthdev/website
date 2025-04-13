"use client";

import Header from "@/app/_sections/header";
import Hero from "./_sections/hero";
import Stats from "./_sections/stats";
import Description from "./_sections/description";
import Pillars from "./_sections/pillars";
import Services from "./_sections/services";
import Cases from "./_sections/cases";
// import Testimonials from "./_sections/testimonials";
import SquareCta from "./_sections/square-cta";
import Footer from "./_sections/footer";

import dynamic from "next/dynamic";

const NoSSRBento = dynamic(() => import("./_sections/bento"), { ssr: false });

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto mb-5 overflow-x-scroll min-w-[25rem]">
      <Header className="max-w-7xl w-full mx-auto" />
      <Hero />
      <Stats className="max-w-7xl w-full mx-auto mt-10" />
      <Description id="about-us" className="max-w-7xl w-full mx-auto mt-10 " />
      <Pillars className="mt-20" />
      <NoSSRBento className="max-w-7xl w-full mx-auto mt-20" />
      <Services id="services" className="max-w-7xl w-full mx-auto mt-20" />
      <Cases id="our-works" className="max-w-7xl w-full mx-auto mt-20" />
      {/* <Testimonials id="reviews" className="w-full mx-auto mt-20" /> */}
      <SquareCta className="max-w-5xl w-full mx-auto mt-20" />
      <Footer className="max-w-7xl w-full mx-auto mt-20" />
    </main>
  );
}
