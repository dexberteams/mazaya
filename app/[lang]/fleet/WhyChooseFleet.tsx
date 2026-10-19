"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

interface WhyChooseFleetProps {
  translations: {
    heading: string;
    headingHighlight: string;
    capabilities: string[];
    learnMore: string;
  };
  isAr: boolean;
}

const WhyChooseFleet = ({ translations, isAr }: WhyChooseFleetProps) => {
  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="w-full px-4 py-10 lg:px-8 lg:py-16"
    >
      <div className="flex flex-col gap-4 overflow-hidden rounded-lg bg-[#0A0700] lg:flex-row lg:justify-between">
        {/* Left Side */}
        <div className="w-full px-0 py-2 sm:px-2 lg:w-1/3 lg:px-0 lg:py-0">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            {translations.heading}{" "}
            <span className="text-yellow-200">
              {translations.headingHighlight}
            </span>
          </h2>

          <div className="mt-4 h-px w-16 bg-[#FFBB00] sm:w-20" />

          {/* List */}
          <div className="mt-4 space-y-3">
            {translations.capabilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-[11px] leading-5 text-white/80 sm:text-base"
              >
                <CircleCheck
                  size={20}
                  strokeWidth={3}
                  className="mt-1 shrink-0 fill-[#FFBB00] text-[#0A0700]"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href="/about"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-[14px] font-medium text-black transition-all duration-300 hover:bg-[#FFBB00] lg:mt-14 lg:w-2/3"
          >
            {translations.learnMore}
            <span className="text-sm">{isAr ? "←" : "→"}</span>
          </Link>
        </div>

        {/* Right Content */}
        <div className="mt-6 flex w-full flex-col overflow-hidden rounded-lg sm:flex-row lg:mt-0 lg:w-[789px]">
          <div className="relative h-[230px] w-full sm:h-[400px]">
            <Image
              src="/fleet/fleet-driver.png"
              alt="Fleet driver"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 789px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFleet;
