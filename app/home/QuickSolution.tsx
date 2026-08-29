"use client";

import Image from "next/image";
import { useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import { HeartHandshake } from "lucide-react";

const solutions = [
  {
    title: "Fleet Operations",
    description:
      "Reliable fleet management with modern vehicles for safe and on-time transportation.",
    image: "/solutions/fleet.png",
  },
  {
    title: "Parcel Delivery",
    description:
      "Fast and dependable parcel delivery services with secure handling, real-time updates, and on-time deliveries you can trust.",
    image: "/solutions/parcel.png",
  },
  {
    title: "Last Mile Delivery",
    description:
      "Efficient last-mile delivery solutions that ensure every shipment reaches its final destination quickly, safely, and on schedule.",
    image: "/solutions/delievery.png",
  },
  {
    title: "Inventory Management",
    description:
      "Real-time inventory tracking and smart stock control that improve accuracy, reduce losses, and maximize operational efficiency.",
    image: "/solutions/management.png",
  },
  {
    title: "Warehousing Services",
    description:
      "Real-time inventory tracking and smart stock control that improve accuracy, reduce losses, and maximize operational efficiency.",
    image: "/solutions/housing.png",
  },
  {
    title: "Order Fulfillment",
    description:
      "Complete order processing, from picking and packing to shipping, delivering a seamless experience for your business and customers.",
    image: "/solutions/order.png",
  },
];

const QuickSolution = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getLineClass = (index: number) => {
    if (activeCard === index) {
      return "stroke-yellow-400 stroke-[3] opacity-100";
    }
    if (activeCard === null) {
      return "stroke-yellow-500 stroke-[2] opacity-100";
    }
    return "stroke-yellow-500/30 stroke-[2] opacity-40";
  };

  const getLineStyle = (index: number) => {
    if (activeCard === index || activeCard === null) {
      return {
        filter: "drop-shadow(0 0 6px rgba(234,179,8,0.6))",
      };
    }
    return {};
  };

  return (
    <section className="relative my-10 overflow-hidden px-4 py-10 font-manrope lg:my-20 lg:px-8 lg:py-16">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* ================= SECTION LABEL ================= */}
        <SectionLabel text="SERVICE" />

        {/* ================= HEADING ================= */}
        <h2 className="mt-4 font-manrope text-3xl font-semibold text-white sm:text-4xl lg:text-4xl">
          Our Quick <span className="text-[#EAB308]">Solutions</span>
        </h2>


        {/* ===================================================== */}
        {/* MOBILE + TABLET */}
        {/* ===================================================== */}


        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              {...solution}
              index={index}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>

        {/* ===================================================== */}
        {/* DESKTOP DIAGRAM */}
        {/* ===================================================== */}

        <div className="relative mx-auto mt-16 hidden h-[700px] w-full max-w-[1200px] lg:block">
          {/* ================================================= */}
          {/* CONNECTOR LINES (from /public/svg)                */}
          {/* ================================================= */}
          {/* Top curve left-of-center -> top-left card */}
          <Image
            src="/svg/Vector 112.svg"
            alt=""
            width={192}
            height={95}
            className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[130px] -translate-x-[170%] -translate-y-[109%] origin-bottom-right ${getLineClass(0)}`}
            style={getLineStyle(0)}
          />
          <Image
            src="/svg/Vector 113.svg"
            alt=""
            width={192}
            height={95}
            className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[130px] -translate-x-[170%] -translate-y-[10%] origin-bottom-right ${getLineClass(0)}`}
            style={getLineStyle(0)}
          />

          <Image
            src="/svg/Vector 115.svg"
            alt=""
            width={192}
            height={95}
            className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[30px] -translate-x-[120%] -translate-y-[180%] origin-bottom-right ${getLineClass(0)}`}
            style={getLineStyle(0)}
          />
          <Image
            src="/svg/Vector 114.svg"
            alt=""
            width={192}
            height={95}
            className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[30px] -translate-x-[25%] -translate-y-[180%] origin-bottom-right ${getLineClass(0)}`}
            style={getLineStyle(0)}
          />

          <Image
            src="/svg/Vector 110.svg"
            alt=""
            width={192}
            height={95}
            className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[130px] -translate-x-[-70%] -translate-y-[100%] origin-bottom-right ${getLineClass(0)}`}
            style={getLineStyle(0)}
          />
          <Image
            src="/svg/Vector 111.svg"
            alt=""
            width={192}
            height={95}
            className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[130px] -translate-x-[-70%] -translate-y-[4%] origin-bottom-right ${getLineClass(0)}`}
            style={getLineStyle(0)}
          />

          <Image
            src="/svg/Vector 116.svg"
            alt=""
            width={192}
            height={95}
            className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[30px] -translate-x-[-12%] -translate-y-[-80%] origin-bottom-right ${getLineClass(0)}`}
            style={getLineStyle(0)}
          />
          <Image
            src="/svg/Vector 117.svg"
            alt=""
            width={192}
            height={95}
            className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[30px] -translate-x-[80%] -translate-y-[-80%] origin-bottom-right ${getLineClass(0)}`}
            style={getLineStyle(0)}
          />

          {/* ================================================= */}
          {/* CARDS */}
          {/* ================================================= */}

          {/* 0: Fleet Operations (Left Top) */}
          <div className="absolute left-[30px] top-[150px] z-10 w-[350px]">
            <SolutionCard
              {...solutions[0]}
              index={0}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 1: Parcel Delivery (Top Center) */}
          <div className="absolute left-1/2 top-[50px] z-10 w-[350px] -translate-x-1/2">
            <SolutionCard
              {...solutions[1]}
              index={1}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 2: Last Mile Delivery (Right Top) */}
          <div className="absolute right-[30px] top-[150px] z-10 w-[350px]">
            <SolutionCard
              {...solutions[2]}
              index={2}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 3: Inventory Management (Left Bottom) */}
          <div className="absolute bottom-[150px] left-[30px] z-10 w-[350px]">
            <SolutionCard
              {...solutions[3]}
              index={3}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 4: Warehousing Services (Bottom Center) */}
          <div className="absolute bottom-[50px] left-1/2 z-10 w-[350px] -translate-x-1/2">
            <SolutionCard
              {...solutions[4]}
              index={4}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 5: Order Fulfillment (Right Bottom) */}
          <div className="absolute bottom-[150px] right-[30px] z-10 w-[350px]">
            <SolutionCard
              {...solutions[5]}
              index={5}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* ================================================= */}
          {/* CENTER CIRCLE */}
          {/* ================================================= */}

          <div className="absolute left-1/2 top-1/2 z-20 flex h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#111] shadow-[0_0_35px_rgba(234,179,8,0.25)]">
            <div className="absolute inset-0 rounded-full border-[1.5px] border-yellow-500/80" />
            <div className="absolute inset-[6px] rounded-full border border-yellow-400/30" />
            <HeartHandshake
              size={34}
              strokeWidth={1.5}
              className="relative z-10 text-white"
            />
          </div>
        </div>



      </div>
    </section>
  );
};

/* ========================================================= */
/* SOLUTION CARD */
/* ========================================================= */

type SolutionCardProps = {
  title: string;
  description: string;
  image: string;
  index: number;
  activeCard: number | null;
  setActiveCard: (index: number | null) => void;
};

const SolutionCard = ({
  title,
  description,
  image,
  index,
  activeCard,
  setActiveCard,
}: SolutionCardProps) => {
  const isActive = activeCard === index;

  return (
    <div
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
      className={`group relative flex w-full flex-row overflow-hidden rounded-[20px] border bg-[#111111] p-2 transition-all duration-500 lg:h-[160px] ${isActive
        ? "-translate-y-1 border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
        : "border-yellow-600/40"
        }`}
    >
      {/* ================= IMAGE ================= */}
      <div className="relative w-[45%] shrink-0 overflow-hidden rounded-[14px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 200px"
          className={`object-cover transition-transform duration-700 ${isActive ? "scale-110" : "scale-100"
            }`}
        />
        {/* Image Overlay */}
        <div
          className={`absolute inset-0 bg-yellow-400/10 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col justify-center px-4 py-2">
        <h3 className="font-manrope text-[15px] font-medium text-white lg:text-[16px]">
          {title}
        </h3>
        <div
          className={`my-2 h-[1px] bg-yellow-600/50 transition-all duration-500 ${isActive ? "w-full bg-yellow-400" : "w-[85%]"
            }`}
        />
        <p className="text-[11px] leading-[1.5] text-gray-400 lg:text-[12px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default QuickSolution;


