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
export default function Cases({ className }: { className: string }) {
  const [selectedValue, setSelectedValue] = useState<string | "">("item-1");

  return (
    <section className={cn(className, "")}>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-medium w-[30rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </h1>
        <Button className="text-lg shadow-2xl" size="xl">
          Book a call
        </Button>
      </div>
      <div className="mt-8">
        <HorizontalAccordion
          type="single"
          collapsible
          value={selectedValue}
          onValueChange={(value: string) => setSelectedValue(value)}
          className="flex flex-row gap-4"
        >
          <Case
            id="item-5"
            name="case name"
            image="/img/horizontal-acc-5.png"
            items={[
              {
                value: "1.2M",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
              },
            ]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <Case
            id="item-4"
            name="case name"
            image="/img/horizontal-acc-4.png"
            items={[
              {
                value: "1.2M",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
              },
            ]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <Case
            id="item-3"
            name="case name"
            image="/img/horizontal-acc-3.png"
            items={[
              {
                value: "1.2M",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
              },
            ]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <Case
            id="item-2"
            name="case name"
            image="/img/horizontal-acc-2.png"
            items={[
              {
                value: "1.2M",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
              },
            ]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <Case
            id="item-1"
            name="case name"
            image="/img/horizontal-acc-1.png"
            items={[
              {
                value: "1.2M",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
              },
            ]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </HorizontalAccordion>
      </div>
    </section>
  );
}

export function Case({
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
        asChild
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
