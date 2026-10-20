"use client";

import Image from "next/image";
import { BookImage, ShieldKeyhole, Blocks, House } from "lucide-react";

interface WarehouseCardTranslation {
  title: string;
  description: string;
}

interface WarehouseStatTranslation {
  value: string;
  label: string;
}

export interface ModernSupplyChainsT {
  heading: string;
  headingHighlight: string;
  cards: WarehouseCardTranslation[];
  stats: {
    storageSpace: WarehouseStatTranslation;
    productsManaged: WarehouseStatTranslation;
    inventoryAccuracy: WarehouseStatTranslation;
    security: WarehouseStatTranslation;
  };
}

interface ModernSupplyChainsProps {
  t?: ModernSupplyChainsT;
}

const warehouseCards = [
  {
    image: "/warehouse/chain2.png",
    icon: BookImage,
  },
  {
    image: "/warehouse/chain3.png",
    icon: Blocks,
  },
  {
    image: "/warehouse/chain4.png",
    icon: ShieldKeyhole,
  },
  {
    image: "/warehouse/chain5.png",
    icon: House,
  },
];

const ModernSupplyChains = ({ t }: ModernSupplyChainsProps) => {
  if (!t) return null;

  const stats = [
    t.stats.storageSpace,
    t.stats.productsManaged,
    t.stats.inventoryAccuracy,
    t.stats.security,
  ];

  return (
    <section className="my-5 overflow-hidden px-4 lg:my-20 lg:px-8">
      {/* Heading */}
      <h2 className="mb-6 text-xl font-semibold text-white sm:text-2xl lg:mb-7 lg:text-[36px]">
        {t.heading}{" "}
        <span className="text-yellow-200">{t.headingHighlight}</span>
      </h2>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_1fr] lg:gap-6">
        {/* LEFT SIDE */}
        <div className="flex min-w-0 flex-col">
          {/* Main Image */}
          <div className="relative h-75 overflow-hidden rounded-md border border-white/10 sm:h-100 lg:h-79.25">
            <Image
              src="/warehouse/chain1.png"
              alt={t.heading}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 pt-3 lg:pt-3">
            {stats.map((stat, index) => (
              <div key={`${stat.label}-${index}`} className="min-w-0">
                <p className="text-sm font-semibold text-[#FBBF24] lg:text-[14px]">
                  {stat.value}
                </p>

                <p className="mt-1 text-[8px] leading-relaxed text-gray-400 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid min-w-0 grid-cols-2 gap-3">
          {warehouseCards.map((card, index) => {
            const Icon = card.icon;
            const translatedCard = t.cards[index];

            if (!translatedCard) return null;

            return (
              <div
                key={card.image}
                className="group relative min-h-38.75 overflow-hidden rounded-md border border-[#6f5a22] bg-[#161000]"
              >
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={translatedCard.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/10" />

                {/* Content */}
                <div className="relative z-10 flex h-full min-h-38.75 flex-col justify-between p-2.5 lg:p-3">
                  {/* Icon */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-[5px] border border-white/20 bg-[rgba(102,89,53,0.27)] backdrop-blur-md">
                    <Icon size={14} className="text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[11px] font-medium text-white sm:text-xs lg:text-[13px]">
                      {translatedCard.title}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-[7px] leading-relaxed text-gray-300 sm:text-[8px] lg:text-[9px]">
                      {translatedCard.description}
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
