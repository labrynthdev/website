"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  HorizontalAccordion,
  HorizontalAccordionContent,
  HorizontalAccordionItem,
  HorizontalAccordionTrigger,
} from "@/components/ui/horizontal-accordion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-unstyled";
import { Separator } from "@/components/ui/separator";
import textData from "@/lib/text-data";

export default function Cases({
  id,
  className,
}: {
  id: string;
  className: string;
}) {
  const [selectedValue, setSelectedValue] = useState<string | "">("item-1");

  return (
    <section id={id} className={cn(className, "px-5 xl:px-0")}>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-y-4 sm:gap-y-0">
        <h1 className="text-4xl font-medium w-full sm:w-[25rem] md:w-[30rem] text-center sm:text-left">
          {textData.cases.heading}
        </h1>
        <Button className="text-lg shadow-2xl" size="xl">
          {textData.cases.cta}
        </Button>
      </div>
      <div className="mt-8" suppressHydrationWarning>
        <HorizontalAccordion
          suppressHydrationWarning
          type="single"
          collapsible
          value={selectedValue}
          onValueChange={(value: string) => setSelectedValue(value)}
          className="flex-row gap-4 hidden xl:flex"
        >
          {textData.cases.items.map((item, index) => (
            <HorizontalCase
              key={index}
              id={`item-${index + 1}`}
              name={item.name}
              image={`/img/horizontal-acc-${index + 1}.png`}
              items={item.stats}
              description={item.description}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          ))}
        </HorizontalAccordion>

        <Accordion
          suppressHydrationWarning
          type="single"
          collapsible
          value={selectedValue}
          onValueChange={(value: string) => setSelectedValue(value)}
          className="flex flex-col gap-y-4 xl:hidden"
        >
          {textData.cases.items.map((item, index) => (
            <VerticalCase
              key={index}
              id={`item-${index + 1}`}
              name={item.name}
              image={`/img/horizontal-acc-${index + 1}.png`}
              items={item.stats}
              description={item.description}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function HorizontalCase({
  id,
  name,
  image,
  description,
  items,
  selectedValue,
  setSelectedValue,
}: {
  id: string;
  name: string;
  image: string;
  items: {
    value: string;
    description: string;
  }[];
  description: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}) {
  return (
    <HorizontalAccordionItem value={id} className="flex">
      <HorizontalAccordionTrigger
        className={`${selectedValue === id ? "hidden" : ""}`}
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`h-[30rem] rounded-xl bg-cover  cursor-pointer flex items-center justify-center overflow-hidden`}
          onClick={() =>
            selectedValue === id ? setSelectedValue("") : setSelectedValue(id)
          }
        >
          <p className="-rotate-90 inline-block text-2xl whitespace-nowrap text-white font-semibold bg-black/50 py-2 px-4 rounded-xl">
            {name}
          </p>
        </div>
      </HorizontalAccordionTrigger>
      <HorizontalAccordionContent>
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`w-[40rem] h-[30rem] rounded-xl  flex flex-col justify-between items-end bg-cover bg-center`}
        >
          <div className=" bg-[#363636]/90  m-4 rounded-xl p-4 max-w-[15rem]">
            <h2 className="text-[#ffffff] text-2xl font-light mb-4">{name}</h2>
            <p className="text-[#b8b8b8] text-md leading-relaxed">
              {description}
            </p>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-4 divide-x divide-[#6a6a6a]  bg-[#363636]/90 rounded-xl m-4 py-4 border border-[#6a6a6a]/50">
              {items.map((item, index) => (
                <div key={index} className={`px-6 ${index > 0 ? "pl-10" : ""}`}>
                  <h3 className="text-[#ffffff] text-2xl font-bold mb-3">
                    {item.value}
                  </h3>
                  <p className="text-[#b8b8b8] text-md">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HorizontalAccordionContent>
    </HorizontalAccordionItem>
  );
}

export function VerticalCase({
  id,
  name,
  image,
  description,
  items,
  selectedValue,
  setSelectedValue,
}: {
  id: string;
  name: string;
  image: string;
  items: {
    value: string;
    description: string;
  }[];
  description: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}) {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger
        className={cn("w-full", selectedValue === id ? "hidden" : "")}
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`h-[8rem] w-full rounded-xl bg-cover  cursor-pointer flex items-center justify-center overflow-hidden`}
          onClick={() =>
            selectedValue === id ? setSelectedValue("") : setSelectedValue(id)
          }
        >
          <p className="inline-block text-2xl md:text-3xl whitespace-nowrap text-white font-semibold bg-black/0 py-2 px-4 rounded-xl">
            {name}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`w-full h-[40rem] rounded-xl  flex flex-col items-end bg-cover bg-center justify-end md:justify-between `}
        >
          <div className=" bg-[#363636]/90  m-4 rounded-xl p-4 max-w-[20rem] hidden md:block">
            <h2 className="text-[#ffffff] text-2xl font-light mb-4">{name}</h2>
            <p className="text-[#b8b8b8] text-md leading-relaxed">
              {description}
            </p>
          </div>
          <div className="w-full">
            <div className="grid bg-[#363636]/90 border border-[#6a6a6a]/50 grid-cols-2 md:grid-cols-4 rounded-b-xl md:rounded-xl p-4 gap-y-4 m-0 md:m-4 ">
              <div className="w-full col-span-2  md:hidden">
                <h2 className="text-[#ffffff] text-3xl font-light mb-4">
                  {name}
                </h2>
                <p className="text-[#b8b8b8] text-lg leading-relaxed">
                  {description}
                </p>
              </div>
              <Separator className="col-span-2 bg-[#6a6a6a] md:hidden" />
              {items.map((item, index) => (
                <div key={index}>
                  <h3 className="text-[#ffffff] text-3xl font-bold mb-3">
                    {item.value}
                  </h3>
                  <p className="text-[#b8b8b8] text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
