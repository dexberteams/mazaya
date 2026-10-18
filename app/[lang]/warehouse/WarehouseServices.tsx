"use client";

import Link from "next/link";
import {
  MoveRight,
  Package,
  Thermometer,
  Tags,
  Clock3,
  GitBranch,
  RotateCcw,
} from "lucide-react";

export interface WarehouseServicesT {
  heading: string;
  headingHighlight: string;
  description: string;
  getQuote: string;
  cards: {
    title: string;
    description: string;
  }[];
}

interface WarehouseServicesProps {
  t?: WarehouseServicesT;
  lang?: string;
}

const serviceIcons = [Package, Thermometer, Tags, Clock3, GitBranch, RotateCcw];

const WarehouseServices = ({ t, lang = "en" }: WarehouseServicesProps) => {
  if (!t) return null;

  // Handles "ar", "ar-SA", and "ar-SA-u-nu-latn"
  const currentLang = lang.toLowerCase().split("-")[0];
  const isArabic = currentLang === "ar";

  return (
    <section
      lang={currentLang}
      dir={isArabic ? "rtl" : "ltr"}
      className="my-10 flex flex-col gap-4 overflow-hidden px-4 lg:my-20 lg:flex-row lg:gap-6 lg:px-8"
    >
      {/* LEFT SIDE */}
      <div className="min-w-0 lg:w-[35%]">
        <h2 className="font-manrope text-[20px] font-bold text-white lg:text-4xl">
          {t.heading}{" "}
          <span className="text-yellow-200">{t.headingHighlight}</span>
        </h2>

        <div
          className={`mt-2 h-0.5 w-24 bg-yellow-400 lg:mt-4 lg:w-32 ${
            isArabic ? "mr-0 ml-auto" : ""
          }`}
        />

        <p className="mt-4 font-manrope text-xs leading-relaxed text-white/70 lg:text-base">
          {t.description}
        </p>

        <Link
          href={`/${currentLang}/getQuote`}
          className="mt-3 flex items-center justify-center gap-2 rounded-sm border border-amber-300/20 bg-yellow-400 px-3 py-2 font-semibold text-black shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] lg:mt-6 lg:w-1/2 lg:px-6"
        >
          <span>{t.getQuote}</span>
          <MoveRight size={18} className={isArabic ? "rotate-180" : ""} />
        </Link>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:flex-1 lg:grid-cols-3 lg:gap-6">
        {t.cards.map((card, index) => {
          const Icon = serviceIcons[index];

          if (!Icon) return null;

          return (
            <div
              key={`${card.title}-${index}`}
              className="flex min-w-0 items-start gap-4"
            >
              {/* Icon */}
              <div className="flex shrink-0 items-center justify-center rounded-xs bg-[#201700] p-2">
                <Icon size={20} strokeWidth={1.8} className="text-[#FFBB00]" />
              </div>

              {/* Text */}
              <div className="flex min-w-0 flex-col gap-2">
                <h3 className="font-semibold leading-relaxed text-white">
                  {card.title}
                </h3>

                <p className="text-[10px] leading-relaxed text-white/55 sm:text-[11px] lg:text-[12px]">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WarehouseServices;
