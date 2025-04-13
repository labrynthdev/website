"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
export default function BookCallButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-6">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button className="shadow-xl shadow-black/30 px-6 h-12 text-lg">
          Book a Call
        </Button>
      </motion.div>
    </div>
  );
}
