"use client";

import Image from "next/image";
import BookCallButtons from "../../components/buttons/book-call-button";
import { MainMenu } from "../../components/menus/desktop-menu";
import Link from "next/link";
import { scrollToHash } from "@/lib/utils";
import textData from "@/lib/text-data";

export default function Header({ className }: { className: string }) {
  return (
    <header className={className}>
      <nav
        aria-label="Global"
        className="mx-auto grid-cols-3 sm:px-0 sm:py-0 lg:px-8 hidden sm:grid"
      >
        <div className="flex items-center justify-start">
          <MainMenu scrollToHash={scrollToHash} />
        </div>
        <Link href="/" className="flex items-center justify-center">
          <span className="sr-only">{textData.header.company_name}</span>
          <Image src="/logo_3x.svg" alt="Logo" width={50} height={50} />
        </Link>
        <div className="flex items-center justify-end">
          <BookCallButtons />
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        aria-label="Global"
        className="mx-auto flex justify-between items-center mt-5 sm:hidden"
      >
        <div className="flex items-center justify-start ml-5">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/logo_3x.svg" alt="Logo" width={30} height={30} />
            <h1 className="text-2xl font-semibold ml-3">
              {textData.header.brand_name}
            </h1>
          </Link>
        </div>

        <div className="flex items-center justify-end">
          <MainMenu scrollToHash={scrollToHash} />
        </div>
      </nav>
    </header>
  );
}
