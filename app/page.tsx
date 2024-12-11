"use client";
import NavBar from "@/components/NavBar";
import background from "../assets/background.jpg";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/model(ench).png";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  const AnimatedImage = motion(Image);
  return (
    <div className="w-full h-[500vh]">
      <NavBar />
      <div className="relative w-full h-[92vh]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${background.src})` }}
        >
          <div className="z-20 absolute top-1/2 md:right-10 w-full md:w-1/2  translate-y-[-50%] flex items-center flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, translateX: "20px" }}
              animate={{ opacity: 1, translateX: "-0px" }}
              transition={{ duration: 2 }}
              className={`${roboto.className} text-center text-4xl md:text-7xl text-white`}
            >
              Experience New World of Techologies
            </motion.h1>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="bg-blue-500 hover:scale-110 duration-500 text-white w-36 md:w-48 h-12 rounded-2xl"
            >
              Order now
            </motion.button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 flex items-center justify-center"></div>
      </div>
      <div className="w-full flex flex-col justify-center h-screen">
        <AnimatedImage
          initial={{ translateX: "-700px" }}
          animate={{ translateX: "0px" }}
          transition={{ duration: 1.4 }}
          src={logo.src}
          alt="logo"
          width={400}
          height={500}
          className="w-[760px] h-full"
        />
      </div>
    </div>
  );
}
