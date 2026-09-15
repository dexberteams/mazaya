"use client";

import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative h-100 w-full sm:h-120 lg:h-150">
        <Image
          src="/warehouse/warehouse-hero.png"
          alt="Projects"
          fill
          priority
          sizes="100vw"
          className=" object-cover object-center hidden lg:block"
        />

        {/* Gradient Overlay */}
        <div
          className="
           
            lg:absolute lg:inset-0 
            lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.82)_28%,rgba(0,0,0,0.42)_60%,rgba(0,0,0,0.05)_85%,transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_25%,transparent_72%,rgba(0,0,0,0.45)_100%)]
          "
        />

        {/* Content */}
        <div
          className="
            relative z-10 flex h-full w-full flex-col items-start
            justify-center font-manrope text-white
            px-4 pt-10 sm:px-8 sm:pt-12
            lg:w-[55%] lg:gap-2 lg:px-16 lg:pt-10
          "
        >
          <SectionLabel text="warehouse" className="bg-transparent" />

          <h1
            className="
              mt-3 text-3xl font-bold leading-tight
              sm:text-4xl
              lg:mt-0 lg:p-4 lg:text-5xl
            "
          >
            Smart Warehousing.
            <span className="text-yellow-200"> Stronger Supply </span>
            <br></br>
            Chains.{" "}
          </h1>

          <span className="mt-1 block h-0.5 w-24 bg-yellow-400" />

          <p
            className="
              mt-2 max-w-xl p-1 text-xs leading-5
              sm:text-base sm:leading-6
             lg:w-4/5 lg:p-4
            "
          >
            Secure, modern, and technology-driven warehousing solutions designed
            to store, protect, and manage your inventory with maximum
            efficiency.
          </p>

          <div className="mt-4 flex flex-wrap gap-5">
            {/* card-1 */}
            <div className="flex items-center justify-center gap-2 lg:gap-4">
              <Image
                src="/warehouse/icons/secure.svg"
                alt="user"
                width={100}
                height={100}
                className="h-8 w-8 lg:h-[50px] lg:w-[50px] rounded-lg border border-white/25 bg-[rgba(102,89,53,0.27)] p-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.04)]"
              />

              <p className="flex flex-col">
                <span className="text-[12px] lg:text-[16px]">500+</span>
                <span className="text-[10px] lg:text-xs text-gray-400">
                  Team Members
                </span>
              </p>
            </div>
            {/* card-2 */}
            <div className="flex items-center justify-center gap-2 lg:gap-4">
              <Image
                src="/warehouse/icons/safety.svg"
                alt="user"
                width={100}
                height={100}
                className="h-8 w-8 lg:h-[50px] lg:w-[50px] rounded-lg border border-white/25 bg-[rgba(102,89,53,0.27)] p-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.04)]"
              />

              <p className="flex flex-col">
                <span className="text-[12px] lg:text-[16px]">
                  24/7 Protection
                </span>
                <span className="text-[10px] lg:text-xs text-gray-400">
                  Complete Transparency
                </span>
              </p>
            </div>
            {/* card-3 */}
            <div className="flex items-center justify-center gap-2 lg:gap-4">
              <Image
                src="/warehouse/icons/user.svg"
                alt="user"
                width={100}
                height={100}
                className="h-8 w-8 lg:h-[50px] lg:w-[50px] rounded-lg border border-white/25 bg-[rgba(102,89,53,0.27)] p-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.04)]"
              />

              <p className="flex flex-col">
                <span className="text-[12px] lg:text-[16px]">
                  Efficient Operations
                </span>
                <span className="text-[10px] lg:text-xs text-gray-400">
                  Optimized Performance
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
