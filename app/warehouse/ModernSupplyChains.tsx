"use client";

import Image from "next/image";
import { BookImage, ShieldKeyhole, Blocks, House } from "lucide-react";

const warehouseCards = [
  {
    title: "Warehouse Gallery",
    description:
      "Explore our modern warehouse facilities designed for secure storage and efficient logistics operations.",
    image: "/warehouse/chain2.png",
    icon: BookImage,
  },
  {
    title: "Storage Capacity",
    description:
      "Large-scale storage solutions with flexible capacity for commercial and industrial goods.",
    image: "/warehouse/chain3.png",
    icon: Blocks,
  },
  {
    title: "Warehouse Security",
    description:
      "Advanced security systems ensuring complete protection of inventory and warehouse operations.",
    image: "/warehouse/chain4.png",
    icon: ShieldKeyhole,
  },
  {
    title: "Inventory System",
    description:
      "AI-powered inventory management system providing real-time stock visibility and operational efficiency.",
    image: "/warehouse/chain5.png",
    icon: House,
  },
];

const stats = [
  {
    value: "10M+",
    label: "Storage Space",
  },
  {
    value: "100K+",
    label: "Products Managed",
  },
  {
    value: "99.9%",
    label: "Inventory Accuracy",
  },
  {
    value: "24/7",
    label: "Security",
  },
];

const ModernSupplyChains = () => {
  return (
    <section className="my-10 overflow-hidden px-4 lg:my-20 lg:px-8">
      {/* Heading */}
      <h2 className="mb-6 text-xl font-semibold text-white sm:text-2xl lg:mb-7 lg:text-[36px]">
        Smart Warehousing Solutions for{" "}
        <span className="text-[#FBBF24]">Modern Supply Chains</span>
      </h2>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_1fr] lg:gap-6">
        {/* LEFT SIDE */}
        <div className="flex flex-col">
          {/* Main Image */}
          <div className="relative h-[300px] overflow-hidden rounded-[6px] border border-white/10 sm:h-[400px] lg:h-[317px]">
            <Image
              src="/warehouse/chain1.png"
              alt="Smart Warehousing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 pt-3 lg:pt-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-sm font-semibold text-[#FBBF24] lg:text-[14px]">
                  {stat.value}
                </p>

                <p className="mt-1 text-[8px] text-gray-400 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-3">
          {warehouseCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group relative min-h-[155px] overflow-hidden rounded-[6px] border border-[#6f5a22] bg-[#161000]"
              >
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-2.5 lg:p-3">
                  {/* Icon */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-[5px] border border-white/20 bg-[rgba(102,89,53,0.27)] backdrop-blur-md">
                    <Icon size={14} className="text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[11px] font-medium text-white sm:text-xs lg:text-[13px]">
                      {card.title}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-[7px] leading-relaxed text-gray-300 sm:text-[8px] lg:text-[9px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModernSupplyChains;
