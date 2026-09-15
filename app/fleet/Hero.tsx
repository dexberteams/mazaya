"use client";

import Image from "next/image";
import { Truck, PackageCheck, Clock3, Headset } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const fleetStats = [
  {
    icon: Truck,
    value: "150+",
    label: "Fleet Vehicles",
  },
  {
    icon: PackageCheck,
    value: "500+",
    label: "Daily Deliveries",
  },
  {
    icon: Clock3,
    value: "99%",
    label: "On-Time Delivery",
  },
  {
    icon: Headset,
    value: "24/7",
    label: "Fleet Availability",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="relative h-111.25 w-full sm:h-150 lg:h-162.25">
        <Image
          src="/fleet/fleet-hero.png"
          alt="Mazaya Fleet"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hidden lg:block"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Left dark gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/10" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-360 flex-col px-4 pt-9 sm:px-8 sm:pt-10 lg:px-10 lg:pt-12">
          {/* Label */}
          <SectionLabel text="OUR FLEET" className="mt-5 w-fit" />

          {/* Heading */}
          <div className="max-w-155 mt-2">
            <h1 className="text-[32px] font-bold leading-[1.08] tracking-tight text-white sm:text-[50px] lg:text-[58px]">
              A Fleet Built for
              <br />
              <span className="text-[#FFE4A3]">Performance &</span>
              <br />
              <span className="text-[#FFE4A3]">Reliability</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-120 text-[13px] leading-5 text-white/75 sm:text-[18px] sm:leading-6">
              Our modern and well-maintained fleet ensures your goods are
              delivered safely, on time, every time.
            </p>

            {/* Small yellow line */}
            <div className="mt-5 h-px w-27.5 bg-[#D9A900]" />
          </div>

          {/* Stats */}
          <div className=" absolute bottom-4 left-4 right-4 rounded-lg border border-[#5c4b16]/50 bg-[#171200]/90 backdrop-blur-md px-2 py-2 sm:bottom-6 sm:left-8 sm:right-8 sm:px-5 sm:py-3 lg:bottom-24 lg:left-10 lg:right-10 lg:px-6 lg:py-3">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {fleetStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={` flex justify-center items-center gap-2 lg:gap-4 px-2 py-2 sm:gap-3 sm:px-4 sm:py-3
                    lg:px-5 lg:py-3 ${index % 2 === 0 ? " border-[#6B5A25]/30 lg:border-r" : ""} lg:border-r
                    ${index === fleetStats.length - 1 ? "lg:border-r-0" : ""}`}
                  >
                    {/* Icon */}
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center lg:h-14 lg:w-14">
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-md bg-[#D6B85A]/20 blur-xl" />

                      {/* Main Square */}
                      <div
                        className=" relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-md
                        bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.20)_0%,rgba(100,90,60,0.35)_35%,rgba(30,27,18,0.9)_75%,rgba(10,9,6,0.95)_100%)] shadow-[inset_0_0_18px_rgba(255,255,255,0.08),0_0_20px_rgba(210,180,90,0.18)] lg:h-14 lg:w-14 "
                      >
                        {/* Glassy Glow Border */}
                        <div className="pointer-events-none absolute inset-0 rounded-md border border-[#D6B85A]/30 shadow-[inset_0_0_8px_rgba(255,255,255,0.08),0_0_12px_rgba(214,184,90,0.18)]" />

                        {/* Soft Outer Glow */}
                        <div className=" pointer-events-none absolute -inset-px rounded-md bg-linear-to-br from-[#FFF4C4]/20 via-transparent to-[#D6B85A]/20 blur-[2px]" />

                        {/* Icon */}
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          className="relative z-10 text-[#F5E8C2] lg:size-5"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className=" text-[13px] font-medium leading-none text-[#FBBF24] lg:text-[20px] ">
                        {stat.value}
                      </p>
                      <p className=" mt-1 truncate text-[10px] text-white/55 sm:mt-1.5 lg:mt-1.5 lg:text-[14px]">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
