"use client";

import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SquaresIcon from "../icons/squares";

export function DropdownMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="xl"
          variant="outline-white"
          className="gap-2"
          aria-activedescendant={isOpen ? "open" : undefined}
          onClick={() => setIsOpen(!isOpen)}
        >
          <SquaresIcon className="size-8 fill-inherit" />
          <span className="text-lg font-medium">MENU</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        sideOffset={-140}
        align="start"
        className="w-[380px] bg-[#1e1e1e] text-[#ffffff] p-0 rounded-xl shadow-xl"
      >
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3 mb-8">
            <Button
              variant="ghost"
              className="bg-[#ffffff] text-[#1e1e1e] hover:bg-gray-300 hover:text-[#1e1e1e] p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              <X className="h-5 w-5" />
            </Button>
            <span className="text-3xl font-bold">MENU</span>
          </div>

          {/* <Button
            size="xl"
            variant="outline-white"
            className="gap-2"
            aria-activedescendant={isOpen ? "open" : undefined}
            onClick={() => setIsOpen(!isOpen)}
          >
            <SquaresIcon className="size-8 fill-inherit" />
            <span className="text-lg font-medium">MENU</span>
          </Button> */}

          <div className="space-y-8">
            <DropdownMenuItem className="flex justify-between items-center p-2 px-4 cursor-pointer text-2xl font-medium focus:text-white focus:bg-zinc-800 hover:bg-zinc-800">
              About us
              <ArrowRight className="h-5 w-5" />
            </DropdownMenuItem>

            <DropdownMenuItem className="flex justify-between items-center p-2 px-4 cursor-pointer text-2xl font-medium focus:text-white focus:bg-zinc-800 hover:bg-zinc-800">
              Services
              <ArrowRight className="h-5 w-5" />
            </DropdownMenuItem>

            <DropdownMenuItem className="flex justify-between items-center p-2 px-4 cursor-pointer text-2xl font-medium focus:text-white focus:bg-zinc-800 hover:bg-zinc-800">
              Our works
              <ArrowRight className="h-5 w-5" />
            </DropdownMenuItem>

            <DropdownMenuItem className="flex justify-between items-center p-2 px-4 cursor-pointer text-2xl font-medium focus:text-white focus:bg-zinc-800 hover:bg-zinc-800">
              Reviews
              <ArrowRight className="h-5 w-5" />
            </DropdownMenuItem>
          </div>
        </div>

        <DropdownMenuSeparator className="h-px bg-[#333333] my-4" />

        <div className="p-6 pt-2 space-y-4">
          <div className="text-4xl font-bold">(123) 456-7890</div>
          <div className="text-lg">exampleemail@gmail.com</div>
          <div className="text-lg">
            1234 Elm Street, Apartment 5B, Los Angeles, CA 90015, USA
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
