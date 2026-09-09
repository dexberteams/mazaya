import React from "react";
import Image from "next/image";
import { Truck, Package, Navigation, Globe, PackageCheck, ImageIcon } from "lucide-react";

interface TimelineStep {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
  imagePlaceholderText: string;
  imageSrc?: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "01",
    title: "Pickup",
    description:
      "We collect your goods safely from your location with our professional team.",
    icon: Truck,
    imagePlaceholderText: "Pickup Cargo Dock",
    imageSrc: "/getQuote/pickup.jpg",
  },
  {
    step: "02",
    title: "Packaging",
    description:
      "Your items are carefully packaged using high-quality materials to ensure full protection.",
    icon: Package,
    imagePlaceholderText: "Packaging & Crating",
    imageSrc: "/getQuote/packaging.jpg",
  },
  {
    step: "03",
    title: "Transportation",
    description:
      "Goods are transported using our modern fleet with real-time tracking and safety.",
    icon: Navigation,
    imagePlaceholderText: "Fleet On Route",
    imageSrc: "/getQuote/transportation.jpg",
  },
  {
    step: "04",
    title: "Customs",
    description:
      "We handle all customs clearances and documentation to ensure smooth cross-border movement.",
    icon: Globe,
    imagePlaceholderText: "Customs Clearance",
    imageSrc: "/getQuote/customs.jpg",
  },
  {
    step: "05",
    title: "Delivery",
    description:
      "Your goods are delivered safely and on time to the final destination.",
    icon: PackageCheck,
    imagePlaceholderText: "Final Mile Delivery",
    imageSrc: "/getQuote/delivery.jpg",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="w-full">
      {/* Title */}
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Process <span className="text-[#f5b800]">Timeline</span>
        </h2>
      </div>

      {/* Steps Grid with top timeline connector */}
      <div className="relative">
        {/* Connecting Horizontal Line across steps (hidden on mobile, visible on lg) */}
        <div className="hidden lg:block absolute top-4 left-[10%] right-[10%] h-[1px] bg-[#3a2c16] z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {TIMELINE_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="flex flex-col items-center">
                {/* Step Number Circle */}
                <div className="w-9 h-9 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shadow-lg shadow-black/40 ring-4 ring-[#070502] mb-5">
                  {item.step}
                </div>

                {/* Card */}
                <div className="w-full flex-1 flex flex-col justify-between rounded-xl bg-[#0c0903] border border-[#2b200e] overflow-hidden hover:border-[#f5b800]/50 transition-all duration-300 group">
                  {/* Card Content Top */}
                  <div className="p-5 flex flex-col items-center text-center flex-1">
                    {/* Golden Circle Icon */}
                    <div className="w-12 h-12 rounded-full bg-[#f5b800] text-black flex items-center justify-center mb-4 shadow-md shadow-[#f5b800]/20 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#a39b8e] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Image Placeholder Bottom */}
                  <div className="relative w-full h-36 bg-gradient-to-b from-[#140e05] to-[#1c1407] border-t border-[#2b200e]/80 flex flex-col items-center justify-center p-3 text-center overflow-hidden">
                    {/* Placeholder graphic & guide */}
                    <div className="relative z-10 flex flex-col items-center gap-1.5 text-[#857969] group-hover:text-[#c4b59f] transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#241a0b] border border-[#3d2e13] flex items-center justify-center text-[#f5b800]/80">
                        <ImageIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-medium tracking-wide">
                        {item.imagePlaceholderText}
                      </span>
                      <span className="text-[9px] text-[#6b6153] uppercase tracking-wider">
                        Image Placeholder
                      </span>
                    </div>

                    {/* Subtle warm hover lighting */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f5b800]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
