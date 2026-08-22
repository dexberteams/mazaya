"use client";

import Image from "next/image";
import { useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import {
  PackageCheck,
  Truck,
  Warehouse,
  ClipboardCheck,
  Boxes,
  HeartHandshake,
} from "lucide-react";

const solutions = [
  {
    title: "Fleet Operations",
    description:
      "Reliable fleet management with modern vehicles for safe and on-time transportation.",
    image: "/solutions/home-solution1.png",
    icon: Truck,
  },
  {
    title: "Parcel Delivery",
    description:
      "Fast and dependable parcel delivery services with accurate and on-time deliveries.",
    image: "/solutions/home-solution1.png",
    icon: PackageCheck,
  },
  {
    title: "Last Mile Delivery",
    description:
      "Efficient last-mile delivery solutions that ensure every package reaches its final destination quickly and safely.",
    image: "/solutions/home-solution1.png",
    icon: Truck,
  },
  {
    title: "Inventory Management",
    description:
      "Real-time inventory tracking and smart stock control to improve accuracy and efficiency.",
    image: "/solutions/home-solution1.png",
    icon: Boxes,
  },
  {
    title: "Warehousing Services",
    description:
      "Reliable inventory tracking and smart stock control to improve accuracy and efficiency.",
    image: "/solutions/home-solution1.png",
    icon: Warehouse,
  },
  {
    title: "Order Fulfillment",
    description:
      "Complete order processing from picking and packing to shipping, delivering a seamless experience.",
    image: "/solutions/home-solution1.png",
    icon: ClipboardCheck,
  },
];

const QuickSolution = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getLineClass = (index: number) => {
    return activeCard === index
      ? "stroke-yellow-300 stroke-[3] opacity-100"
      : "stroke-yellow-500/50 stroke-[2] opacity-70";
  };

  const getLineStyle = (index: number) => {
    return activeCard === index
      ? {
          filter: "drop-shadow(0 0 8px rgba(250,204,21,0.9))",
        }
      : {};
  };

  return (
    <section className="relative my-10 overflow-hidden px-4 py-10 lg:my-20 lg:px-8 lg:py-16">
      {/* ================= BACKGROUND GRID ================= */}
      {/* Geometrical Trapezium Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.29]"
          style={{
            backgroundImage: `
        linear-gradient(
          90deg,
          transparent 0,
          transparent 99px,
          rgba(255,187,0,0.25) 100px,
          transparent 101px,
          transparent 329px
        ),
        linear-gradient(
          0deg,
          transparent 0,
          transparent 109px,
          rgba(255,187,0,0.25) 110px,
          transparent 111px,
          transparent 219px
        ),
        linear-gradient(
          45deg,
          transparent 0,
          transparent 139px,
          rgba(255,187,0,0.22) 140px,
          transparent 141px
        )
      `,
            backgroundSize: "330px 220px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-375">
        {/* ================= SECTION LABEL ================= */}
        <SectionLabel text="service" />

        {/* ================= HEADING ================= */}
        <h2 className="mt-4 font-manrope text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Our Quick <span className="text-yellow-400">Solutions</span>
        </h2>

        {/* ===================================================== */}
        {/* MOBILE + TABLET */}
        {/* ===================================================== */}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
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

        <div className="relative mt-10 hidden h-140 w-full lg:block">
          {/* CONNECTOR SVG */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 1000 560"
            preserveAspectRatio="none"
          >
            {/* ================================================= */}
            {/* TOP LEFT → LEFT CURLY BRACKET */}
            {/* ================================================= */}
            <path
              d="
                M300 160
                H370
                Q400 160 400 190
                V245
                Q400 280 435 280
                H465
               "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${getLineClass(0)} transition-all duration-500`}
              style={getLineStyle(0)}
            />

            {/* ================================================= */}
            {/* TOP CENTER → CENTER TOP */}
            {/* ================================================= */}
            <path
              d="
                 M500 118
                 V245
                "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${getLineClass(1)} transition-all duration-500`}
              style={getLineStyle(1)}
            />

            {/* ================================================= */}
            {/* TOP RIGHT → RIGHT CURLY BRACKET */}
            {/* ================================================= */}
            <path
              d="
                M700 160
                H630
                Q600 160 600 190
                V245
                Q600 280 565 280
                H535
               "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${getLineClass(2)} transition-all duration-500`}
              style={getLineStyle(2)}
            />

            {/* ================================================= */}
            {/* BOTTOM LEFT → LEFT CURLY BRACKET */}
            {/* ================================================= */}
            <path
              d="
                  M300 400
                  H370
                  Q400 400 400 370
                  V315
                  Q400 280 435 280
                  H465
                 "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${getLineClass(3)} transition-all duration-500`}
              style={getLineStyle(3)}
            />

            {/* ================================================= */}
            {/* BOTTOM CENTER → CENTER BOTTOM */}
            {/* ================================================= */}
            <path
              d="
                  M500 435
                  V315
                 "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${getLineClass(4)} transition-all duration-500`}
              style={getLineStyle(4)}
            />

            {/* ================================================= */}
            {/* BOTTOM RIGHT → RIGHT CURLY BRACKET */}
            {/* ================================================= */}
            <path
              d="
                 M700 400
                 H630
                 Q600 400 600 370
                 V315
                 Q600 280 565 280
                 H535
                "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${getLineClass(5)} transition-all duration-500`}
              style={getLineStyle(5)}
            />

            {/* ================================================= */}
            {/* LEFT CURLY BRACKET */}
            {/* ================================================= */}

            <path
              d="
                  M465 245
                  Q480 245 480 260
                  V270
                  Q480 280 495 280
                  Q480 280 480 290
                    V300
                  Q480 315 465 315
                "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-yellow-500/50 stroke-2"
            />

            {/* ================================================= */}
            {/* RIGHT CURLY BRACKET */}
            {/* ================================================= */}

            <path
              d="
                  M535 245
                  Q520 245 520 260
                  V270
                  Q520 280 505 280
                  Q520 280 520 290
                  V300
                  Q520 315 535 315
                 "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-yellow-500/50 stroke-2"
            />

            {/* ================================================= */}
            {/* CENTER HORIZONTAL LINE */}
            {/* ================================================= */}

            <path
              d="M495 280 H505"
              fill="none"
              strokeLinecap="round"
              className="stroke-yellow-500/50 stroke-2"
            />

            {/* ================================================= */}
            {/* CENTER DOT */}
            {/* ================================================= */}

            <circle cx="500" cy="280" r="3" className="fill-yellow-400" />
          </svg>

          {/* ================================================= */}
          {/* TOP LEFT CARD */}
          {/* ================================================= */}

          <div className="absolute left-0 top-22.5 z-10 w-[30%]">
            <SolutionCard
              {...solutions[0]}
              index={0}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* ================================================= */}
          {/* TOP CENTER CARD */}
          {/* ================================================= */}

          <div className="absolute left-[35%] -top-8 z-10 w-[30%]">
            <SolutionCard
              {...solutions[1]}
              index={1}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* ================================================= */}
          {/* TOP RIGHT CARD */}
          {/* ================================================= */}

          <div className="absolute right-0 top-22.5 z-10 w-[30%]">
            <SolutionCard
              {...solutions[2]}
              index={2}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* ================================================= */}
          {/* BOTTOM LEFT CARD */}
          {/* ================================================= */}

          <div className="absolute bottom-21.25 left-0 z-10 w-[30%]">
            <SolutionCard
              {...solutions[3]}
              index={3}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* ================================================= */}
          {/* BOTTOM CENTER CARD */}
          {/* ================================================= */}

          <div className="absolute -bottom-10 left-[35%] z-10 w-[30%]">
            <SolutionCard
              {...solutions[4]}
              index={4}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* ================================================= */}
          {/* BOTTOM RIGHT CARD */}
          {/* ================================================= */}

          <div className="absolute bottom-21.25 right-0 z-10 w-[30%]">
            <SolutionCard
              {...solutions[5]}
              index={5}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>

          {/* ================================================= */}
          {/* CENTER ICON */}
          {/* ================================================= */}

          <div className="absolute left-1/2 top-1/2 z-20 flex h-17.5 w-17.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#171717] shadow-[0_0_45px_rgba(234,179,8,0.4)]">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-yellow-500/40" />

            {/* Inner Ring */}
            <div className="absolute inset-1.5 rounded-full border border-yellow-400/10" />

            {/* Icon */}
            <HeartHandshake
              size={30}
              strokeWidth={2}
              className="relative z-10 text-white"
            />

            {/* Glow */}
            <div className="absolute -inset-4 -z-10 animate-pulse rounded-full bg-yellow-500/10 blur-xl" />
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
  icon: React.ElementType;
  index: number;
  activeCard: number | null;
  setActiveCard: (index: number | null) => void;
};

const SolutionCard = ({
  title,
  description,
  image,
  icon: Icon,
  index,
  activeCard,
  setActiveCard,
}: SolutionCardProps) => {
  const isActive = activeCard === index;

  return (
    <div
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
      className={`group relative w-full overflow-hidden rounded-[14px] border bg-[#151515] p-2 transition-all duration-500 ${
        isActive
          ? "-translate-y-2 border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.3)]"
          : "border-yellow-500/70"
      }`}
    >
      <div className="flex min-h-31.25 gap-3 lg:h-37.5">
        {/* ================= IMAGE ================= */}

        <div className="relative w-[55%] shrink-0 overflow-hidden rounded-lg ">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 180px"
            className={`object-cover transition-transform duration-700 ${
              isActive ? "scale-110" : ""
            }`}
          />

          {/* Image Overlay */}
          <div
            className={`absolute inset-0 bg-yellow-400/10 transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* ================= CONTENT ================= */}

        <div className="flex flex-1 flex-col py-2 pr-2">
          {/* Title */}
          <div className="flex items-center gap-2">
            <Icon
              size={15}
              className={`shrink-0 text-yellow-400 transition duration-300 ${
                isActive ? "scale-110 rotate-6" : ""
              }`}
            />

            <h3 className="font-manrope text-[13px] font-semibold leading-5 text-white">
              {title}
            </h3>
          </div>

          {/* Line */}
          <div
            className={`mt-2 h-px bg-yellow-500 transition-all duration-500 ${
              isActive ? "w-full" : "w-16"
            }`}
          />

          {/* Description */}
          <p className="mt-3 text-[9px]  lg:leading-4 text-gray-400">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Glow */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-yellow-400 transition-all duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default QuickSolution;
