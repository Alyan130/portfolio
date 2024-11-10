"use client";
import Image from "next/image";
import Link from "next/link";
import images from "@/app/public/businessman-with-laptop-grey-background-3d-illustration-cartoon-character (1).png"
import { TypeAnimation } from "react-type-animation";

export default function HeroSection(){
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start md:px-10"
        >
          <h1 className="text-white mb-4 text-[32px] sm:text-4xl lg:text-7xl lg:leading-snug font-extrabold">
            <span className="md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-slate-500 via-blue-500 to-red-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Alyan Ali",
                1200,
                "UI/UX Desinger",
                1300,
                "Web developer",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl md:pr-24">
          My goal is to craft seamless online experiences that not only look great but also function flawlessly. 
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-10  py-3 ml-4 md:ml-0 md:px-14 inline-block py-3 md:py-4 w-[80%] sm:w-fit rounded-full mr-4 bg-white text-white bg-gradient-to-br from-slate-500 via-blue-500 to-red-600"
            >
              Hire Me
            </Link>
            <Link
              href={"/public/Alyancv.pdf"}
              className="px-1 inline-block py-1 w-[80%] sm:w-fit rounded-full bg-gradient-to-br from-slate-500 via-blue-500 to-red-600 hover:bg-slate-800 text-white mt-3"
            download={"/public/Alyancv.pdf"}>
              <span className="block bg-[#121212] border-[1px] border-wite hover:bg-slate-800 rounded-full px-3 md:px-10 py-3 md:py-4 ">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[280px] h-[280px] lg:w-[500px] lg:h-[450px] relative">
            <Image
              src={images}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={650}
              height={650}
            />
          </div>
        </div>
      </div>
    </section>
  );
}