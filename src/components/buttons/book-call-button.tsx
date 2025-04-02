"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
export default function BookCallButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-6">
      {/* Dark button with gradient */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button className="shadow-xl shadow-black/30 px-6 h-12 text-lg">
          Book a Call
        </Button>
        {/* <button
          className="w-full sm:w-auto px-5 py-3 text-white rounded-[16px] font-medium text-xl shadow-xl shadow-black/30 bg-gradient-to-r from-[#323232] to-[#141414] 
      hover:from-[#DBF11F] hover:to-[#8FA211] hover:text-black transition-all duration-200 active:from-[#DBF11F] active:to-[#8FA211] active:text-black"
        >
          Book a Call
        </button> */}
      </motion.div>
    </div>
  );
}
