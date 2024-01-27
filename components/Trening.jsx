import React, { useState, useEffect } from "react";
import {slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



// Pole obrázkov
const images = [
  "./SLIDESHOW2.jpg",
  "./cujcuj_dres.jpg",
  "./oliver_primacky.jpg",
  "./sckinken.jpg",
  "./simko.jpg",
];

const Slideshow = () => {
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }
  

  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 4000); 

    return () => clearTimeout(timer);
  }, [current, length]);

  const selectImage = (index) => {
    setCurrent(index);
  };
  

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      animate={hasAnimated ? "show" : "hidden"}
      ref={ref}
      className="slideshow"
    >
      <h1 className="md:text-4xl text-3xl text-center pt-5 pb-4 underline">
        Tréningy
      </h1>
      {images.map((image, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img
              src={image}
              alt={`Slide ${index}`}
              className="sm:w-[500px] sm:h-[520px]  w-[300px] h-[320px]"
            />
          )}
        </div>
      ))}
      <div className="dots" id="komunita">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => selectImage(index)}
          ></span>
        ))}
      </div>
    </motion.div>
  );
};

export default Slideshow;
