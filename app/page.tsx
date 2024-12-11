"use client";
import NavBar from "@/components/NavBar";
import background from "../assets/background.jpg";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaRegLightbulb, FaShippingFast } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import product from "../assets/model(ench).png";
import { FaHandshakeAngle } from "react-icons/fa6";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import pirana from "../assets/pirana.png";
import natia from "../assets/natia.png";
import guga from "../assets/guga.png";
import devi from "../assets/devi.png";
import ana from "../assets/ana.png";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  const scrollToSection = () => {
    const targetElement = document.getElementById("next-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const AnimatedImage = motion(Image);

  return (
    <div className="w-full">
      <NavBar />
      <div className="relative w-full h-[92vh]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${background.src})` }}
        >
          <div className="z-20 absolute top-1/2 md:right-10 w-full md:w-1/2 translate-y-[-50%] flex items-center flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, translateX: "20px" }}
              animate={{ opacity: 1, translateX: "0px" }}
              transition={{ duration: 2 }}
              className={`${roboto.className} text-center text-4xl md:text-7xl text-white`}
            >
              Experience New World of Technologies
            </motion.h1>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="bg-blue-500 hover:scale-110 duration-500 text-white w-36 md:w-48 h-12 rounded-2xl"
            >
              შეუკვეთე ეხლავე
            </motion.button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 flex items-center justify-center">
          <div className="absolute bottom-2 flex left-1/2 text-white translate-x-[-50%] items-center flex-col gap-1">
            <FaRegArrowAltCircleDown
              className="text-4xl cursor-pointer"
              onClick={scrollToSection}
            />
            ნახე პროდუქტი
          </div>
        </div>
      </div>
      <div
        id="next-section"
        className="w-full relative h-fit flex flex-col py-6 px-6 "
      >
        <div className="w-full h-44 flex-col lg:flex-row flex gap-6 py-5 items-center lg:justify-center">
          <div className="w-full sm:w-2/3 lg:w-56 xl:w-96 flex items-center p-1 h-full border-t-[1px] border-black">
            <div className="w-full gap-2 flex flex-col justify-between">
              <h1 className="text-3xl">ინოვაციური</h1>
              <p className=" w-full">
                ჩვენი ეს პროდუქტი, არის პირველი პროტოტიპი მსოფლიოში
              </p>
            </div>
            <FaRegLightbulb className="text-7xl" />
          </div>
          <div className="w-full sm:w-2/3 lg:w-56 xl:w-96 flex items-center p-1 h-full border-t-[1px] border-black">
            <div className="w-full gap-2 flex flex-col justify-between">
              <h1 className="text-3xl">მოქნილი</h1>
              <p className=" w-full">
                მისი სიახლის მიუხედავად ის ძალიან მულტიფუნქციურია
              </p>
            </div>
            <GrYoga className="text-7xl" />
          </div>
          <div className="w-full sm:w-2/3 lg:w-56 xl:w-96 flex items-center p-1 h-full border-t-[1px] border-black">
            <div className="w-full gap-2 flex flex-col justify-between">
              <h1 className="text-3xl">სწრაფი</h1>
              <p className=" w-full">
                იგი თავისი ოპტიმიზაციით ძალიან სწრაფად ასრულებს მითითებებს
              </p>
            </div>
            <FaShippingFast className="text-7xl" />
          </div>
          <div className="w-full sm:w-2/3 lg:w-56 xl:w-96 flex items-center p-1 h-full border-t-[1px] border-black">
            <div className="w-full gap-2 flex flex-col justify-between">
              <h1 className="text-3xl">მარტივი</h1>
              <p className=" w-full">რათქმაუნდა პროდუქტი მარტივად გასაგებია</p>
            </div>
            <FaHandshakeAngle className="text-7xl" />
          </div>
        </div>
        <div className="w-full mt-2 flex justify-center items-center">
          <AnimatedImage
            initial={{ translateX: "-60vh" }}
            whileInView={{ translateX: "0px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={product.src}
            viewport={{ once: true }}
            alt="product"
            width={1300}
            height={3100}
            className="w-[650px] ml-20"
          />
          <div className="w-1/2 h-full flex flex-col gap-3 py-20 px-44">
            <h1 className="text-6xl font-kanit">Calcruler</h1>
            <h1 className="text-3xl text-blue-600 font-roboto">24.99$</h1>
            <p className="text-gray-600 w-full mt-2">
              CalcRuler არის ინოვაციური ჰიბრიდული ხელსაწყო, რომელიც შექმნილია
              პროფესიონალებისთვის, სტუდენტებისთვის და ჰობისტებისთვის, რომელთაც
              სჭირდებათ როგორც ზუსტი გაზომვები, ასევე მყისიერი გამოთვლები.
              ინჟინერიული პროექტების, არქიტექტურული დიზაინების ან ხელნაკეთი
              ნივთების შექმნის დროს CalcRuler უზრუნველყოფს ეფექტურობასა და
              სიზუსტეს.
            </p>
            <div className="flex gap-5 mt-6">
              <button className="bg-blue-700 text-white rounded-lg w-48 h-14">
                შეიძინე
              </button>
              <button className="bg-white border-2 border-blue-700 text-blue-700 rounded-lg w-48 h-14">
                ნახე პროდუქტი
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-black relative left-0 w-full h-52 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55"></div>
        <div className="w-1/2 absolute z-10 right-0 h-full flex items-center">
          <div className="flex text-white flex-col gap-3">
            <h1 className=" text-3xl">Contact us</h1>
            <div className="flex">
              <input
                type="text"
                placeholder="write message"
                className="w-96 rounded-l-lg px-4 outline-none text-black"
              />
              <button className="bg-blue-700 w-24 rounded-r-lg">Send</button>
              <div className="flex flex-col ml-12 gap-1">
                <h2 className="flex gap-1 items-center">
                  <IoIosMail />
                  saxazaviteam@info.ge
                </h2>
                <h2 className="flex gap-1 items-center">
                  <FaPhoneAlt />
                  +995 555 00 26 46
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full gap-5 pt-40 pb-5 justify-center h-fit flex flex-wrap relative">
        <h1 className="text-blue-500 text-5xl absolute top-16 font-roboto">
          multimillioner team
        </h1>
        <h1 className="w-full px-24 py-2">
          ჩვენი გუნდი ქმნის ინოვაციურ ელექტრონულ სახაზავს, რომელიც სპეციალურად
          განკუთვნილია საგანმანათლებლო დაწესებულებებისთვის. მოწყობილობა მუშაობს
          Arduino ტექნოლოგიაზე და აღჭურვილია სერვო ძრავის მექანიზმით, რაც
          მასწავლებელს საშუალებას აძლევს დაფაზე მარტივად და ზუსტად მიიტანოს
          სასურველი კუთხე. სახაზავს აქვს ჩაშენებული მაგნიტები, რომლებიც
          უზრუნველყოფენ დაფაზე მარტივ და უსაფრთხო ფიქსაციას
        </h1>
        <div className="w-72 overflow-hidden h-96 bg-purple-400 rounded-2xl">
          <Image
            src={pirana.src}
            alt="pirana"
            width={2100}
            height={2100}
            className="w-full h-full"
          />
        </div>
        <div className="w-72 overflow-hidden h-96 bg-red-400 rounded-2xl">
          <Image
            src={natia.src}
            alt="pirana"
            width={16600}
            height={2100}
            className="w-full h-full"
          />
        </div>
        <div className="w-72 overflow-hidden h-96 bg-yellow-400 rounded-2xl">
          <Image
            src={guga.src}
            alt="pirana"
            width={2100}
            height={2100}
            className="w-full h-full"
          />
        </div>
        <div className="w-72 overflow-hidden h-96 bg-green-400 rounded-2xl">
          <Image
            src={devi.src}
            alt="pirana"
            width={2100}
            height={2100}
            className="w-full h-full"
          />
        </div>

        <div className="w-72 overflow-hidden h-96 bg-blue-400 rounded-2xl">
          <Image
            src={ana.src}
            alt="pirana"
            width={2100}
            height={2100}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
