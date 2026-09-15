"use client";

import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative min-h-100 w-full sm:min-h-110 lg:h-150 lg:min-h-0">
        <Image
          src="/advantages/advantages-hero.jpg"
          alt="Advantages"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
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
          className=" relative z-10 flex min-h-100 w-full flex-col items-start justify-center px-4 py-16 font-manrope text-white sm:min-h-110 sm:px-8 sm:py-16 lg:min-h-0 lg:w-1/2 lg:gap-2 lg:px-16 lg:py-10
  "
        >
          <SectionLabel
            text="advantages"
            className="bg-transparent lg:ml-4 lg:mt-16"
          />

          <h1
            className="
              mt-3 w-full
              text-3xl font-bold leading-tight
              sm:w-11/12 sm:text-4xl
              lg:mt-0 lg:p-4 lg:text-5xl
            "
          >
            The Mazaya Advantage.{" "}
            <span className="text-yellow-200">Built Around Your Success.</span>
          </h1>

          {/* Mobile Line */}
          <span className="mt-3 h-0.5 w-24 lg:ml-4 bg-yellow-400 " />

          <p
            className="
              mt-3 max-w-xl p-1
              text-xs leading-5
              sm:text-base
              lg:mt-2 lg:w-4/5 lg:p-4 lg:leading-6
            "
          >
            Discover what sets Mazaya Logistics apart and how our expertise,
            technology, and commitment drive value for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
