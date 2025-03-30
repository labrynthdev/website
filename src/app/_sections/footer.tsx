"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
export default function Footer({ className }: { className: string }) {
  return (
    <footer
      className={cn(
        className,
        "rounded-2xl bg-gradient-to-br from-[#323232] to-[#141414] flex flex-col items-center overflow-hidden shadow-2xl"
      )}
    >
      <h1 className="text-white text-lg mt-10">Looking for the right path?</h1>
      <Marquee>
        <div className="flex items-center text-6xl font-semibold text-white ml-6 mt-6">
          Navigate success with Labrynth
          <Image
            src="/logo-green.svg"
            alt="logo"
            width={20}
            height={20}
            className="w-12 h-12 ml-10"
          />
        </div>
      </Marquee>

      <Separator className="max-w-4xl mt-10  bg-[#3d3d3d]" />

      <div className="grid grid-cols-6 px-10 w-5xl mt-10">
        <div className="col-span-3">
          <h1 className="text-white text-4xl font-semibold flex items-center gap-2">
            <Image
              src="/logo_white.svg"
              alt="logo"
              width={20}
              height={20}
              className="w-12 h-12"
            />
            Labrynth
          </h1>
          <p className="text-white text-xl mt-2 max-w-[25rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 col-span-3">
          <div>
            <h3 className="font-semibold text-[#FFFFFF66] mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-gray-300">
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white hover:text-gray-300"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-gray-300">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-white hover:text-gray-300">
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#FFFFFF66] mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white hover:text-gray-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-gray-300">
                  Out Works
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-white hover:text-gray-300">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#FFFFFF66] mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="tel:+1234567890"
                  className="text-white hover:text-gray-300"
                >
                  (123) 456-7890
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:exampleemail@gmail.com"
                  className="text-white hover:text-gray-300"
                >
                  exampleemail@gmail.com
                </Link>
              </li>
              <li className="text-white ">
                1234 Elm Street, Apartment 5B, Los Angeles, CA 90015, USA
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-10 mb-10">
        <p className="text-sm text-[#FFFFFF66] px-4 text-center">
          © 2025 Labrynth Inc.
        </p>
        <p className=" text-sm text-[#FFFFFF66]   px-4 text-center">
          Terms & Conditions
        </p>
        <p className=" text-sm text-[#FFFFFF66]  px-4 text-center">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
}
