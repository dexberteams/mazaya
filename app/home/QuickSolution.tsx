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
      "Fast and dependable parcel delivery services with secure handling and live updates.",
    image: "/solutions/parcel.png",
  },
  {
    title: "Last Mile Delivery",
    description:
      "Efficient last-mile solutions ensuring every shipment reaches destinations quickly and safely.",
    image: "/solutions/delievery.png",
  },
  {
    title: "Inventory Management",
    description:
      "Smart stock control and real-time tracking to maximize accuracy and operational efficiency.",
    image: "/solutions/management.png",
  },
  {
    title: "Warehousing Services",
    description:
      "Secure storage facilities with 24/7 monitoring, modern racking, and optimized space.",
    image: "/solutions/housing.png",
  },
  {
    title: "Order Fulfillment",
    description:
      "Seamless picking, packing, and shipping to deliver an exceptional customer experience.",
    image: "/solutions/order.png",
  },
];

const QuickSolution = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getLineProps = (index: number) => {
    const isHovered = activeCard === index;
    const isNone = activeCard === null;

    return {
      stroke: isHovered ? "#FACC15" : "#FFBB00",
      opacity: isHovered ? 1 : isNone ? 0.9 : 0.25,
      style: {
        filter:
          isHovered || isNone
            ? "drop-shadow(0 0 6px rgba(234, 179, 8, 0.6))"
            : "none",
        transition: "all 0.3s ease",
      },
    };
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

        <div className="relative mx-auto mt-16 hidden h-[760px] w-full max-w-[1200px] lg:block">
          {/* ================================================= */}
          {/* CONNECTOR LINES (Using exact extracted SVG paths) */}
          {/* ================================================= */}
          <svg
            viewBox="0 0 1200 760"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          >
            {/* 0: Fleet Operations (Top Left) -> Center Circle Left (550, 380) */}
            <g
              transform="translate(358, 286)"
              {...getLineProps(0)}
            >
              <path
                d="M192 94H145.636C143.97 93.7974 140.182 92.5412 138.364 89.1373C136.091 84.8824 128.818 68.4706 123.364 68.4706C119 68.4706 64.5758 68.4706 37.9091 68.4706C34.2727 68.6732 27 65.7961 27 52.6667C27 40.7692 27 18.7895 27 4.99992C27 2.79078 25.2091 0.999998 23 0.999998H0"
                strokeWidth="2"
              />
            </g>

            {/* 3: Inventory Management (Bottom Left) -> Center Circle Left (550, 380) */}
            <g
              transform="translate(358, 379)"
              {...getLineProps(3)}
            >
              <path
                d="M192 1H145.636C143.97 1.20261 140.182 2.45882 138.364 5.86275C136.091 10.1176 128.818 26.5294 123.364 26.5294C119 26.5294 64.5758 26.5294 37.9091 26.5294C34.2727 26.3268 27 29.2039 27 42.3333C27 54.2308 27 76.2105 27 90.0001C27 92.2092 25.2091 94 23 94H0"
                strokeWidth="2"
              />
            </g>

            {/* 1: Parcel Delivery (Top Center) -> Center Circle Top (600, 330) */}
            <g {...getLineProps(1)}>
              <g transform="translate(572, 257)">
                <path
                  d="M27 73L27 23.6887C26.7937 21.9161 25.5143 17.8874 22.0476 15.9536C17.7143 13.5364 0.999999 5.80132 0.999999 -2.25454e-07"
                  strokeWidth="2"
                />
              </g>
              <g transform="translate(600, 257)">
                <path
                  d="M1 73L1 23.6887C1.20635 21.9161 2.48571 17.8874 5.95238 15.9536C10.2857 13.5364 27 5.80132 27 -2.25454e-07"
                  strokeWidth="2"
                />
              </g>
            </g>

            {/* 2: Last Mile Delivery (Top Right) -> Center Circle Right (650, 380) */}
            <g
              transform="translate(650, 286)"
              {...getLineProps(2)}
            >
              <path
                d="M0 94H46.3636C48.0303 93.7974 51.8182 92.5412 53.6364 89.1373C55.9091 84.8824 63.1818 68.4706 68.6364 68.4706C73 68.4706 127.424 68.4706 154.091 68.4706C157.727 68.6732 165 65.7961 165 52.6667C165 40.7692 165 18.7895 165 4.99992C165 2.79078 166.791 0.999998 169 0.999998H192"
                strokeWidth="2"
              />
            </g>

            {/* 5: Order Fulfillment (Bottom Right) -> Center Circle Right (650, 380) */}
            <g
              transform="translate(650, 379)"
              {...getLineProps(5)}
            >
              <path
                d="M0 1H46.3636C48.0303 1.20261 51.8182 2.45882 53.6364 5.86275C55.9091 10.1176 63.1818 26.5294 68.6364 26.5294C73 26.5294 127.424 26.5294 154.091 26.5294C157.727 26.3268 165 29.2039 165 42.3333C165 54.2308 165 76.2105 165 90.0001C165 92.2092 166.791 94 169 94H192"
                strokeWidth="2"
              />
            </g>

            {/* 4: Warehousing Services (Bottom Center) -> Center Circle Bottom (600, 430) */}
            <g {...getLineProps(4)}>
              <g transform="translate(572, 430)">
                <path
                  d="M27 0L27 49.3113C26.7937 51.0839 25.5143 55.1126 22.0476 57.0464C17.7143 59.4636 0.999999 67.1987 0.999999 73"
                  strokeWidth="2"
                />
              </g>
              <g transform="translate(600, 430)">
                <path
                  d="M1 0L1 49.3113C1.20635 51.0839 2.48571 55.1126 5.95238 57.0464C10.2857 59.4636 27 67.1987 27 73"
                  strokeWidth="2"
                />
              </g>
            </g>
          </svg>

          {/* ================================================= */}
          {/* CARDS (Symmetrically Positioned)                  */}
          {/* ================================================= */}

          {/* 0: Fleet Operations (Left Top) */}
          <div className="absolute left-[13px] top-[180px] z-10 w-[345px]">
            <SolutionCard
              {...solutions[0]}
              index={0}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 1: Parcel Delivery (Top Center) */}
          <div className="absolute left-1/2 top-[102px] z-10 w-[350px] -translate-x-1/2">
            <SolutionCard
              {...solutions[1]}
              index={1}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 2: Last Mile Delivery (Right Top) */}
          <div className="absolute right-[13px] top-[180px] z-10 w-[345px]">
            <SolutionCard
              {...solutions[2]}
              index={2}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 3: Inventory Management (Left Bottom) */}
          <div className="absolute left-[13px] top-[425px] z-10 w-[345px]">
            <SolutionCard
              {...solutions[3]}
              index={3}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 4: Warehousing Services (Bottom Center) */}
          <div className="absolute left-1/2 top-[503px] z-10 w-[350px] -translate-x-1/2">
            <SolutionCard
              {...solutions[4]}
              index={4}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* 5: Order Fulfillment (Right Bottom) */}
          <div className="absolute right-[13px] top-[425px] z-10 w-[345px]">
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
          <div className="absolute left-1/2 top-1/2 z-20 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#111111] shadow-[0_0_30px_rgba(234,179,8,0.9)] transition-transform duration-500 hover:scale-105">
            <Image
              src="/logo/logo.svg"
              alt="logo"
              width={80}
              height={80}
              className="relative z-10 h-[42px] w-[42px] object-contain drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
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
      className={`group relative flex w-full flex-row items-center overflow-hidden rounded-[18px] border bg-[#111111]/90 p-2.5 backdrop-blur-md transition-all duration-300 lg:h-[155px] ${isActive
        ? "-translate-y-1 border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.25)]"
        : "border-yellow-600/40 hover:border-yellow-500/70"
        }`}
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-full w-[40%] shrink-0 overflow-hidden rounded-[12px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 180px"
          className={`object-cover transition-transform duration-700 ${isActive ? "scale-108" : "scale-100 group-hover:scale-105"
            }`}
        />
        {/* Image Overlay */}
        <div
          className={`absolute inset-0 bg-yellow-400/10 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col justify-center pl-3.5 pr-2">
        <h3 className="font-manrope text-[15px] font-semibold text-white tracking-tight">
          {title}
        </h3>
        <div
          className={`my-1.5 h-[1.5px] transition-all duration-300 ${isActive
            ? "w-full bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.5)]"
            : "w-[80%] bg-yellow-500/40"
            }`}
        />
        <p className="line-clamp-3 text-[11.5px] leading-[1.5] text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default QuickSolution;

