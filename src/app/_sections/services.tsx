"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { AccordionHeader } from "@radix-ui/react-accordion";
import { useState } from "react";
import Image from "next/image";

export default function Services({
  id,
  className,
}: {
  id: string;
  className: string;
}) {
  const [value, setValue] = useState("item-1");

  const handleToggle = (item: string) => {
    if (value === item) {
      setValue("");
    } else {
      setValue(item);
    }
  };

  return (
    <section
      id={id}
      className={cn(
        className,
        "grid grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-y-0 px-5 xl:px-0"
      )}
    >
      <div>
        <Button
          className="rounded-3xl border-black bg-transparent "
          variant="outline"
          size="xl"
        >
          <span className="w-2 h-2 bg-[#77A21C] rounded-full"></span>
          Our Services
        </Button>
      </div>
      <div className="col-span-3">
        <h1 className="text-4xl lg:text-6xl font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h1>

        <Accordion
          defaultValue="item-1"
          type="single"
          collapsible
          className="w-full"
          value={value}
          onValueChange={setValue}
        >
          <AccordionItem
            value="item-1"
            className="border-b border-[#cacaca] py-6"
          >
            <AccordionHeader>
              <div
                className="text-2xl font-bold text-[#000000] hover:no-underline flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle("item-1")}
              >
                Lorem ipsum dolor
                <Button
                  onClick={() => handleToggle("item-1")}
                  variant="outline"
                  size="xl"
                  className={`text-lg  cursor-pointer ${
                    value === "item-1"
                      ? "bg-black text-white hover:bg-black hover:text-white"
                      : "bg-transparent text-black hover:bg-transparent hover:text-black"
                  }`}
                >
                  {value === "item-1" ? "View less" : "View more"}
                </Button>
              </div>
            </AccordionHeader>

            <AccordionContent className="pt-6">
              <Image
                src="/img/accordion-bg.png"
                alt="Service 1"
                width={1504}
                height={1128}
                className="w-full h-[402px] object-cover"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="col-span-1">
                  <h3 className="text-xl font-bold text-[#000000]">
                    Section Content
                  </h3>
                </div>
                <div className="col-span-2">
                  <p className="text-[#717171]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-b border-[#cacaca] py-6"
          >
            <AccordionHeader>
              <div
                className="text-2xl font-bold text-[#000000] hover:no-underline flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle("item-2")}
              >
                Lorem ipsum dolor
                <Button
                  onClick={() => handleToggle("item-2")}
                  variant="outline"
                  size="xl"
                  className={`text-lg  cursor-pointer ${
                    value === "item-2"
                      ? "bg-black text-white hover:bg-black hover:text-white"
                      : "bg-transparent text-black hover:bg-transparent hover:text-black"
                  }`}
                >
                  {value === "item-2" ? "View less" : "View more"}
                </Button>
              </div>
            </AccordionHeader>

            <AccordionContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <h3 className="text-xl font-bold text-[#000000]">
                    Section Content
                  </h3>
                </div>
                <div className="col-span-2">
                  <p className="text-[#717171]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border-b border-[#cacaca] py-6"
          >
            <AccordionHeader>
              <div
                className="text-2xl font-bold text-[#000000] hover:no-underline flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle("item-3")}
              >
                Lorem ipsum dolor
                <Button
                  onClick={() => handleToggle("item-3")}
                  variant="outline"
                  size="xl"
                  className={`text-lg  cursor-pointer ${
                    value === "item-3"
                      ? "bg-black text-white hover:bg-black hover:text-white"
                      : "bg-transparent text-black hover:bg-transparent hover:text-black"
                  }`}
                >
                  {value === "item-3" ? "View less" : "View more"}
                </Button>
              </div>
            </AccordionHeader>

            <AccordionContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <h3 className="text-xl font-bold text-[#000000]">
                    Section Content
                  </h3>
                </div>
                <div className="col-span-2">
                  <p className="text-[#717171]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
