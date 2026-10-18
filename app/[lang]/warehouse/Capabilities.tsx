"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleCheck, MoveRight } from "lucide-react";

export interface CapabilitiesT {
  heading: string;
  headingHighlight: string;
  items: string[];
  learnMore: string;
  techTitle: string;
  techSubtitle: string;
  techDescription: string;
  techFeatures: string[];
}

interface CapabilitiesProps {
  t?: CapabilitiesT;
  lang?: string;
}

const Capabilities = ({ t, lang = "en" }: CapabilitiesProps) => {
  if (!t) return null;

  const currentLang = lang.toLowerCase().split("-")[0];
  const isArabic = currentLang === "ar";

  return (
    <section
      lang={currentLang}
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full px-4 py-10 lg:px-8 lg:py-16"
    >
      <div className="flex flex-col overflow-hidden rounded-lg bg-[#0A0700] lg:flex-row">
        {/* Left Side */}
        <div className="w-full px-0 py-2 sm:px-2 lg:w-[26%] lg:px-0 lg:py-0">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            {t.heading}{" "}
            <span className="text-[#F5E5B5]">{t.headingHighlight}</span>
          </h2>

          {/* Yellow line */}
          <div
            className={`mt-4 h-px w-16 bg-[#FFBB00] sm:w-20 ${
              isArabic ? "ml-auto" : ""
            }`}
          />

          {/* Capabilities List */}
          <div className="mt-4 space-y-3">
            {t.items.map((item, index) => (
              <div
                key={`${item}-${index}`}
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
            href={`/${currentLang}/about`}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-[14px] font-medium text-black transition-all duration-300 hover:bg-[#FFBB00] lg:w-2/3"
          >
            <span>{t.learnMore}</span>

            <MoveRight size={16} className={isArabic ? "rotate-180" : ""} />
          </Link>
        </div>

        {/* Right Content */}
        <div className="mt-6 flex w-full flex-col overflow-hidden rounded-lg sm:flex-row lg:mt-0 lg:w-[74%]">
          {/* Image */}
          <div className="relative h-[230px] w-full sm:h-[300px] sm:w-[52%] lg:h-auto">
            <Image
              src="/warehouse/driver.png"
              alt={t.techTitle}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 52vw, 40vw"
            />
          </div>

          {/* Text Card */}
          <div className="flex w-full flex-col justify-center bg-[#352801] px-6 py-7 sm:w-[48%] sm:px-7 lg:px-8">
            <h3 className="text-lg font-medium leading-7 text-white sm:text-xl">
              {t.techTitle}
              <br />
              {t.techSubtitle}
            </h3>

            <p className="mt-4 text-[10px] leading-5 text-white/70 sm:text-[11px]">
              {t.techDescription}
            </p>

            {/* Technology Features */}
            <div className="mt-5 space-y-3">
              {t.techFeatures.map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className="flex items-center gap-2 text-[10px] text-white/80 sm:text-[11px]"
                >
                  <span className="shrink-0 text-[#00C307]">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
