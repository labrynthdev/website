"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { scrollToHash } from "@/lib/utils";
import textData from "@/lib/text-data";

export default function Footer({ className }: { className: string }) {
  const links: { [key: string]: string } = {
    X: "https://x.com/LabyrnthCo",
    // Instagram: "https://www.instagram.com",
    // Telegram: "https://t.me",
    // Discord: "https://discord.com",
  };

  return (
    <footer className={cn(className, "px-5 xl:px-0")}>
      <div className="rounded-2xl bg-gradient-to-br from-[#323232] to-[#141414] flex flex-col items-center overflow-hidden shadow-2xl">
        <h1 className="text-white text-lg mt-10">{textData.footer.heading}</h1>
        <Marquee>
          <div className="flex items-center text-4xl md:text-6xl font-semibold text-white ml-6 mt-6">
            {textData.footer.tagline}
            <Image
              src="/logo-green.svg"
              alt="logo"
              width={20}
              height={20}
              className="ml-10 w-10 h-10 md:w-12 md:h-12"
            />
          </div>
        </Marquee>

        <div className="w-full px-5 flex items-center justify-center ">
          <Separator className="max-w-5xl mt-5 w-full  bg-[#3d3d3d]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-5 mt-5 gap-y-5 gap-x-2 w-full">
          <div className="">
            <h1 className="text-white text-4xl font-semibold flex items-center gap-2">
              <Image
                src="/logo_white.svg"
                alt="logo"
                width={20}
                height={20}
                className="w-12 h-12"
              />
              {textData.footer.brand.name}
            </h1>
            <p className="text-white text-xl mt-2 lg:max-w-[25rem]">
              {textData.footer.brand.description}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-8 ">
            <div>
              <h3 className="font-semibold text-[#FFFFFF66] mb-4">
                {textData.footer.socials.heading}
              </h3>
              <ul className="space-y-2">
                {textData.footer.socials.links.map((link: string, index) => (
                  <li key={index}>
                    <Link
                      target="_blank"
                      href={links[link]}
                      className="text-white hover:text-gray-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#FFFFFF66] mb-4">
                {textData.footer.menu.heading}
              </h3>
              <ul className="space-y-2">
                <li
                  onClick={() => scrollToHash("about-us")}
                  className="text-white hover:text-gray-300 cursor-pointer"
                >
                  {textData.footer.menu.links[0]}
                </li>
                <li
                  className="text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => scrollToHash("services")}
                >
                  {textData.footer.menu.links[1]}
                </li>
                <li
                  className="text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => scrollToHash("our-works")}
                >
                  {textData.footer.menu.links[2]}
                </li>
                <li
                  className="text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => scrollToHash("reviews")}
                >
                  {/* {textData.footer.menu.links[3]} */}
                </li>
              </ul>
            </div>

            {/*<div className="col-span-2 sm:col-span-1 flex flex-col items-left lg:block mt-0 sm:mt-0">
              <h3 className="font-semibold text-[#FFFFFF66] mb-4 text-center sm:text-left">
                {textData.footer.contact.heading}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="tel:+1234567890"
                    className="text-white hover:text-gray-300"
                  >
                    {textData.footer.contact.phone}
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:exampleemail@gmail.com"
                    className="text-white hover:text-gray-300"
                  >
                    {textData.footer.contact.email}
                  </Link>
                </li>
                <li className="text-white ">
                  {textData.footer.contact.address}
                </li>
              </ul> 
            </div>*/}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 mb-10">
          <p className="text-sm text-[#FFFFFF66] px-4 text-center hidden sm:block">
            © 2025 {textData.footer.brand.name} Inc.
          </p>
          <p className=" text-sm text-[#FFFFFF66]   px-4 text-center">
            {/* Terms & Conditions */}
          </p>
          <p className=" text-sm text-[#FFFFFF66]  px-4 text-center">
            {/* Privacy Policy */}
          </p>
          <p className="text-sm text-[#FFFFFF66] px-4 mt-5 text-center col-span-3 sm:hidden">
            © 2025 {textData.footer.brand.name} Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
