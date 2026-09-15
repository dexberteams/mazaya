"use client";

import React from "react";
import dynamic from "next/dynamic";

const CoverageMap = dynamic(() => import("./CoverageMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-[#1a1208] flex items-center justify-center text-[#F5A623] rounded-2xl">
      Loading map...
    </div>
  ),
});

const features = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F5A623"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    badge: "Saudi",
    title: "Saudi Arabia",
    desc: "Wide coverage across all major cities and regions.",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F5A623"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "GCC Countries",
    desc: "Serving UAE, Qatar, Bahrain, Kuwait, and Oman.",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F5A623"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Border to Border",
    desc: "Seamless cross-border transportation solutions.",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F5A623"
        strokeWidth="2"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: "Strategic Hubs",
    desc: "Multiple fleet hubs for faster dispatch and delivery.",
  },
];

export default function FleetCoverage() {
  return (
    <section className="w-full py-14 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left */}
        <div className=" space-y-5 border">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Our <span className="text-yellow-200">Fleet Coverage</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed lg:w-1/2">
            We have a strong operational network across Saudi Arabia and the
            GCC, ensuring fast and reliable delivery to every major city and
            beyond.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#e09520] text-black font-semibold px-5 py-2.5 rounded-sm text-sm transition lg:mt-8">
            View Coverage Map
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Map */}
        <div>
          <div className="rounded-lg overflow-hidden border border-[#F5A623]/25 shadow-[0_0_40px_rgba(245,166,35,0.12)]">
            <CoverageMap />
          </div>
        </div>

        {/* Right */}
        <div className=" space-y-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex gap-3 p-3.5 rounded-xl bg-[#111] border border-[#222] hover:border-[#F5A623]/40 transition"
            >
              <div className="w-9 h-9 rounded-lg bg-[#1a1208] border border-[#F5A623]/30 flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-semibold text-sm">
                    {f.title}
                  </h3>
                  {f.badge && (
                    <span className="text-[10px] bg-[#F5A623]/20 text-[#F5A623] px-1.5 py-0.5 rounded-full">
                      {f.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
