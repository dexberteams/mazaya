"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export interface StatisticsT {
  title?: string;
  items?: { label: string }[];
}

const statCards = [
  { icon: "/advantages/icons/calendar.svg", alt: "Years of Experience", value: "10+" },
  { icon: "/advantages/icons/streamline-plump.svg", alt: "Happy Clients", value: "500+" },
  { icon: "/advantages/icons/shipment-delivery.svg", alt: "Shipments Delivered", value: "1 M+" },
  { icon: "/advantages/icons/map.svg", alt: "Regions Covered", value: "3" },
  { icon: "/advantages/icons/van.svg", alt: "Fleet Assets", value: "250+" },
  { icon: "/advantages/icons/warehouse.svg", alt: "Sq.Ft. Warehousing", value: "1M+" },
];

const defaultLabels = [
  "Years of Experience",
  "Happy Clients",
  "Shipments Delivered",
  "Regions Covered",
  "Fleet Assets",
  "Sq.Ft. Warehousing",
];

const Statistics = ({ t }: { t?: StatisticsT }) => {
  const labels = t?.items?.map((i) => i.label) ?? defaultLabels;

  return (
    <section className="px-4 lg:px-8 lg:py-16">
      <h1 className="font-manrope text-[20px] font-bold text-yellow-200 lg:text-4xl">
        {t?.title || "Statistics"}
      </h1>
      <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 mt-4 lg:mt-8">
        {statCards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center rounded-lg border border-[#352801] bg-[#201700] p-3 space-y-1 lg:p-6 lg:space-y-3"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="flex w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-amber-400">
              <Image
                src={card.icon}
                alt={card.alt}
                width={28}
                height={28}
              />
            </div>
            <h2 className="text-[14px] lg:text-xl font-bold text-white">{card.value}</h2>
            <p className="text-[9px] lg:text-[14px] text-center text-white">
              {labels[index] ?? card.alt}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
