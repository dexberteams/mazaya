"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Box, Globe2, MapPin } from "lucide-react";

const FleetMap = dynamic(() => import("./FleetMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#171000]">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#FFBB00]/20 border-t-[#FFBB00]" />
    </div>
  ),
});

const coverageItems = [
  {
    icon: MapPin,
    title: "Saudi Arabia",
    description: "Wide coverage across major cities and regions.",
  },
  {
    icon: Globe2,
    title: "GCC Countries",
    description: "Serving UAE, Qatar, Bahrain, Kuwait, and Oman.",
  },
  {
    icon: Box,
    title: "Border to Border",
    description: "Seamless cross-border transportation solutions.",
  },
  {
    icon: MapPin,
    title: "Strategic Hubs",
    description: "Multiple fleet hubs for faster dispatch and delivery.",
  },
];

const OurFleetCoverage = () => {
  return (
    <section className="w-full overflow-hidden bg-[#0A0700] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            lg:grid-cols-[0.9fr_1fr_1.35fr]
            lg:gap-8
            xl:gap-10
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="flex flex-col">
            {/* Small Label */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-10 bg-[#FFBB00]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#FFBB00]">
                Fleet Coverage
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-3xl
                font-semibold
                leading-[1.1]
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-[30px]
                xl:text-[34px]
              "
            >
              Our Fleet Coverage
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[330px]
                text-[11px]
                leading-[1.7]
                text-white/55
                sm:text-xs
                lg:text-[11px]
                xl:text-xs
              "
            >
              We have a strong operational network across Saudi Arabia and the
              GCC, ensuring fast and reliable delivery to every major city and
              beyond.
            </p>

            {/* Button */}
            <div className="mt-5">
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-[3px]
                  bg-[#FFBB00]
                  px-4
                  py-2.5
                  text-[10px]
                  font-semibold
                  text-black
                  shadow-[0_0_20px_rgba(255,187,0,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#ffc72c]
                  hover:shadow-[0_8px_25px_rgba(255,187,0,0.2)]
                "
              >
                View Coverage Map
                <ArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* =====================================================
              CENTER ACTUAL MAP
          ====================================================== */}
          <div
            className="
              relative
              h-[260px]
              w-full
              overflow-hidden
              rounded-[4px]
              border
              border-[#FFBB00]/10
              bg-[#171000]
              shadow-[inset_0_0_60px_rgba(255,187,0,0.04)]
              sm:h-[320px]
              lg:h-[250px]
              xl:h-[275px]
            "
          >
            {/* Map glow */}
            <div className="pointer-events-none absolute inset-0 z-[500] bg-[radial-gradient(circle_at_center,rgba(255,187,0,0.07),transparent_65%)]" />

            <FleetMap />

            {/* Top / Bottom dark fade */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-[500] h-8 bg-gradient-to-b from-[#0A0700]/30 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[500] h-8 bg-gradient-to-t from-[#0A0700]/30 to-transparent" />

            {/* Gold vignette */}
            <div className="pointer-events-none absolute inset-0 z-[501] shadow-[inset_0_0_55px_rgba(0,0,0,0.65)]" />
          </div>

          {/* =====================================================
              RIGHT INFO CARD
          ====================================================== */}
          <div
            className="
              rounded-lg
              border
              border-[#FFBB00]/15
              bg-[#0D0A03]
              p-4
              shadow-[0_0_30px_rgba(255,187,0,0.025)]
              sm:p-5
            "
          >
            <div className="space-y-1">
              {coverageItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      group
                      flex
                      items-start
                      gap-3
                      rounded-md
                      px-2
                      py-2.5
                      transition-all
                      duration-300
                      hover:bg-[#FFBB00]/[0.035]
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-[3px]
                        bg-[#FFBB00]/10
                        transition-all
                        duration-300
                        group-hover:bg-[#FFBB00]/15
                      "
                    >
                      <Icon
                        size={13}
                        strokeWidth={1.7}
                        className="text-[#FFBB00]"
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[10px] font-medium text-white sm:text-[11px]">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 text-[8px] leading-4 text-white/40 sm:text-[9px]">
                        {item.description}
                      </p>
                    </div>

                    {/* Number */}
                    <span className="pt-0.5 text-[7px] text-white/15">
                      0{index + 1}
                    </span>
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

export default OurFleetCoverage;
