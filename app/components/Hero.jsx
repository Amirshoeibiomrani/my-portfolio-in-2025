"use client";
import { HERO } from "../constants";
import amirImg from "../assets/amir.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="p-2 mb-8 text-xl">{HERO.description}</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center p-10">
          <Image
            src={amirImg}
            alt="Amir Shoeibi Omrani"
            width={500}
            height={200}
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
