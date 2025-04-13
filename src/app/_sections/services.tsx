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
import textData from "@/lib/text-data";

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
          {textData.services.button}
        </Button>
      </div>
      <div className="col-span-3">
        <h1 className="text-4xl lg:text-6xl font-medium">
          {textData.services.heading}
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
                {textData.services.items[0].title}
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
                    {textData.services.items[0].content.heading}
                  </h3>
                </div>
                <div className="col-span-2">
                  <p className="text-[#717171]">
                    {textData.services.items[0].content.description}
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
                {textData.services.items[1].title}
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
                    {textData.services.items[1].content.heading}
                  </h3>
                </div>
                <div className="col-span-2">
                  <p className="text-[#717171]">
                    {textData.services.items[1].content.description}
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
                {textData.services.items[2].title}
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
                    {textData.services.items[2].content.heading}
                  </h3>
                </div>
                <div className="col-span-2">
                  <p className="text-[#717171]">
                    {textData.services.items[2].content.description}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border-b border-[#cacaca] py-6"
          >
            <AccordionHeader>
              <div
                className="text-2xl font-bold text-[#000000] hover:no-underline flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle("item-4")}
              >
                {textData.services.items[3].title}
                <Button
                  onClick={() => handleToggle("item-4")}
                  variant="outline"
                  size="xl"
                  className={`text-lg  cursor-pointer ${
                    value === "item-4"
                      ? "bg-black text-white hover:bg-black hover:text-white"
                      : "bg-transparent text-black hover:bg-transparent hover:text-black"
                  }`}
                >
                  {value === "item-4" ? "View less" : "View more"}
                </Button>
              </div>
            </AccordionHeader>

            <AccordionContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <h3 className="text-xl font-bold text-[#000000]">
                    {textData.services.items[3].content.heading}
                  </h3>
                </div>
                <div className="col-span-2">
                  <p className="text-[#717171]">
                    {textData.services.items[3].content.description}
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
