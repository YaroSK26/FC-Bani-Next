"use client"

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Ludvik = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://www.ludvik.sk/ludvik.js";
    script.async = true;
    document.getElementById("ludvik").appendChild(script);
  }, []);

  return (
    <div>
      <h1 className="md:text-4xl text-3xl text-center pt-5 pb-3 underline">
        Ludvik
      </h1>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate={"show"}
        className="mb-2 text-center "
        id="ludvik"
      >
        Loading..
      </motion.div>
    </div>
  );
};

export default Ludvik;
