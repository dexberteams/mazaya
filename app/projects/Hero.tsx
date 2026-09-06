"use client";
import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative h-70 w-full sm:h-120 lg:h-150">
        <Image
          src="/projects/hero.jpg"
          alt="Projects"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hidden lg:block"
        />

        {/* Gradient Overlay */}
        <div
          className="
           hidden
           lg:absolute lg:inset-0 lg:block
           lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.82)_28%,rgba(0,0,0,0.42)_60%,rgba(0,0,0,0.05)_85%,transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_25%,transparent_72%,rgba(0,0,0,0.45)_100%)]
           "
        />

        {/* Content */}
        <div
          className="
            relative z-10 flex h-full w-full flex-col items-start justify-center font-manrope text-white px-4 sm:px-8 lg:w-1/2 lg:gap-2 lg:px-16 pt-6"
        >
          <SectionLabel
            text="our projects"
            className="bg-transparent"
          ></SectionLabel>
          <h1 className="w-11/12 text-2xl font-bold leading-tight sm:text-4xl lg:p-4 lg:text-5xl">
            Delivering Success Through{" "}
            <span className="text-yellow-200">Every Project</span>
          </h1>
          <span className="mt-2 block lg:hidden h-0.5 w-24 bg-yellow-400"></span>
          <p className="max-w-xl mt-2 p-1 text-xs leading-4 lg:leading-6 sm:text-base lg:w-4/5 lg:p-4">
            Explore our successfully completed and ongoing projects that reflect
            our commitment to excellence, reliability, and client satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
