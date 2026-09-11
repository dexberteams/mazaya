import React from "react";
import Image from "next/image";
import { Plane, Globe2 } from "lucide-react";

export default function LogisticsCoverage() {
  return (
    <section className="w-full">
      <div className="relative rounded-2xl bg-[#312203] border border-[#38280f] p-6 sm:p-8 lg:p-12 overflow-hidden shadow-2xl shadow-black/80">
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#f5b800]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#f5b800]/5 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Line, and 3 Coverage Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Logistics Coverage
            </h2>
            <div className="w-16 bg-[#f5b800] mt-3 mb-8" />

            {/* 3 Badges / Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Saudi Arabia Card */}
              <div className="rounded-xl bg-[#090602]/90 border border-[#2e210b] p-4.5 hover:border-[#f5b800]/40 transition-colors flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base" role="img" aria-label="Saudi Arabia Flag">
                    <Image src="/getQuote/flag-saudi-arabia.png" alt="Saudi Arabia" width={24} height={24} />
                  </span>
                  <h3 className="text-sm font-bold text-[#f5b800]">Saudi Arabia</h3>
                </div>
                <ul className="space-y-2 text-xs text-[#c4bcaf]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Nationwide Delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>150+ Cities Covered</span>
                  </li>
                </ul>
              </div>

              {/* GCC Countries Card */}
              <div className="rounded-xl bg-[#090602]/90 border border-[#2e210b] p-4.5 hover:border-[#f5b800]/40 transition-colors flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base" role="img" aria-label="GCC Globe">
                    🌍
                  </span>
                  <h3 className="text-sm font-bold text-[#f5b800]">GCC Countries</h3>
                </div>
                <ul className="space-y-2 text-xs text-[#c4bcaf]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span>Cross-border Logistics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span>Fast Regional Distribution</span>
                  </li>
                </ul>
              </div>

              {/* Worldwide Card */}
              <div className="rounded-xl bg-[#090602]/90 border border-[#2e210b] p-4.5 hover:border-[#f5b800]/40 transition-colors flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base" role="img" aria-label="Airplane">
                    ✈️
                  </span>
                  <h3 className="text-sm font-bold text-[#f5b800]">Worldwide</h3>
                </div>
                <ul className="space-y-2 text-xs text-[#c4bcaf]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shrink-0" />
                    <span>Global Freight Network</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shrink-0" />
                    <span>International Shipping Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Coverage Map */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-w-xl mx-auto overflow-hidden rounded-xl">
              <Image
                src="/getQuote/logisticsCoverage.png"
                alt="Mazaya Logistics Global and Regional Coverage Map"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
