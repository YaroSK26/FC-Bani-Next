"use client";

import { toast } from "react-hot-toast";
import { withSwal } from "react-sweetalert2";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import BallCanvas from "./BallCanvas"
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import { useInView } from "react-intersection-observer";


const Formular = ({swal}) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_81tw9xw",
        "template_m37okw1",
        {
          from_name: form.name,
          to_name: "Jaroslav",
          from_email: form.email,
          to_email: "jaroba0@gmail.com",
          message: form.message,
        },
        "ao9Pnvt-EA8-h9gBU"
      )
      .then(
        () => {
          setLoading(false);
          swal.fire({
            title: "Ďakujeme za Váš email",
            text: "Pošleme Vám odozvu čo najskôr",
            icon: "success",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          toast.error("Niečo sa pokazilo.");
        }
      );
  };

  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }


   const [windowWidth, setWindowWidth] = useState(null);

   useEffect(() => {
     // Function to update window width
     const updateWindowWidth = () => {
       setWindowWidth(window.innerWidth);
     };

     // Add event listener when component mounts
     window.addEventListener("resize", updateWindowWidth);

     // Initialize window width
     updateWindowWidth();

     // Remove event listener when component unmounts
     return () => {
       window.removeEventListener("resize", updateWindowWidth);
     };
   }, []);

  // Check if windowWidth is greater than 400 on the client side
  const isWideEnough = typeof window !== "undefined" && windowWidth > 1280;

  return (
    <div className="flex justify-center items-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        ref={ref}
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="box  rounded-3xl w-[350px] xs:w-full md:w-[400px] my-10 "
        >
          <label htmlFor="form">
            <h1 className="text-2xl">Formulár</h1>
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tvoje meno"
          />
          <input
            required
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Tvoj email"
          />
          <textarea
            required
            type="text"
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder="Čo by si chcel nám povedať?"
          ></textarea>
          <button type="submit"> {loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
      >

        <BallCanvas />
        {/* {isWideEnough && } */}
      </motion.div>
    </div>
  );
};

export default withSwal(Formular)
