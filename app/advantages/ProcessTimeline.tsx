"use client";

import {
  Truck,
  Globe,
  ShieldCheck,
  Headset,
  FileText,
  MapPinCheckInside,
  PaperBag,
  Package,
} from "lucide-react";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import GlowIconCircle from "../ui/GlowIconCircle";

const processSteps = [
  {
    number: "01",
    title: "Pickup",
    description:
      "We collect your goods safely from your location with our professional team.",
    image: "/advantages/bus.png",
    icon: Truck,
  },
  {
    number: "02",
    title: "Packaging",
    description:
      "Your items are carefully packaged using high-quality materials to ensure full protection.",
    image: "/advantages/bus.png",
    icon: PaperBag,
  },
  {
    number: "03",
    title: "Transportation",
    description:
      "Goods are transported using our modern fleet with real-time tracking and safety.",
    image: "/advantages/bus.png",
    icon: Truck,
  },
  {
    number: "04",
    title: "Customs",
    description:
      "We handle all customs clearances and documentation to ensure smooth cross-border movement.",
    image: "/advantages/bus.png",
    icon: Globe,
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "Your goods are delivered safely and on time to the final destination.",
    image: "/advantages/bus.png",
    icon: Package,
  },
];

/* CONTAINER ANIMATION */

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* CARD ANIMATION*/

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

/* PROCESS TIMELINE */

const ProcessTimeline = () => {
  return (
    <section className="overflow-hidden bg-[#080700] my-10 lg:my-20 px-4 lg:px-8">
      <h1 className="w-11/12 text-2xl font-bold leading-tight sm:text-4xl lg:text-4xl text-white!">
        Process <span className="text-yellow-200">Timeline</span>
      </h1>
      <div className="relative mt-10 lg:mt-20">
        <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
          {/* DESKTOP HORIZONTAL TIMELINE */}

          <div className="pointer-events-none absolute left-[11%] right-[11%] top-5 hidden lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut" as const,
                delay: 1,
              }}
              className="h-px w-full origin-left bg-[#6f5a22]"
            />
          </div>

          {/* CARDS */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className=" relative grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-5 lg:gap-3"
          >
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* NUMBER */}

                  <div className="relative z-20 flex flex-col items-center">
                    <motion.div
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 12,
                      }}
                      className="relative z-20 flex w-8 h-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-[#f5f5f5] text-[11px] font-medium text-black shadow-[0_0_15px_rgba(255,255,255,0.08)]"
                    >
                      {step.number}
                    </motion.div>
                    {/*  DASHED CONNECTOr */}
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        height: 32,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25,
                        ease: "easeOut",
                      }}
                      className=" border-l border-dashed border-[#a48120] lg:block z-30"
                    />
                  </div>

                  {/* CARD */}

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25, ease: "easeOut" as const }}
                    className=" group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#d9aa16]/40 hover:bg-white/5.5 hover:shadow-[0_12px_40px_rgba(212,170,35,0.08)] "
                  >
                    {/* GLASS GLOW */}
                    <div className=" pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f8b900]/8 blur-3xl transition-all duration-500 group-hover:bg-[#f8b900]/15 " />
                    {/* TOP GLASS HIGHLIGHT */}
                    <div className=" pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent " />
                    {/*  CONTENT  */}
                    <div className=" relative z-10 flex h-37.5 lg:h-50 flex-col items-center px-3 pb-3 pt-4 text-center sm:px-4 sm:pt-5 lg:min-h-60 ">
                      {/* ICON */}
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 12,
                          delay: 0.3,
                        }}
                        className=" relative z-40 mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#f8b900]/30 bg-[#f8b900] text-black shadow-[0_0_25px_rgba(248,185,0,0.18)] sm:h-10 sm:w-10 "
                      >
                        <Icon
                          size={19}
                          strokeWidth={2}
                          className="sm:h-5 sm:w-5"
                        />
                      </motion.div>
                      {/* TITLE */}
                      <h3 className="text-sm font-medium text-white sm:text-base">
                        {step.title}
                      </h3>
                      {/* DESCRIPTION */}
                      <p className=" mt-2 max-w-52.5 text-[10px] leading-[1.6] text-gray-400 sm:text-[12px] lg:text-[14px] ">
                        {step.description}
                      </p>
                    </div>
                    {/*  IMAGE  */}
                    <div className=" relative z-10 h-32 lg:h-40 w-full overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes=" (max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw "
                        className=" object-cover transition-transform duration-700 group-hover:scale-110 "
                      />
                      {/* IMAGE GLASS OVERLAY */}
                      <div className=" absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent " />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* Stats Card Box */}
      <div
        className="
         my-5 lg:mt-14
         grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
         gap-4
         rounded-lg
         border border-white/30
         bg-white/4
         p-2 lg:p-8
         backdrop-blur-xl
         shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_40px_rgba(0,0,0,0.25)]
        "
      >
        {/* Card 1 */}
        <div className="flex items-center justify-center gap-4 border-b lg:border-b-0 lg:border-r border-white/20 p-2 lg:p-4">
          <GlowIconCircle icon={MapPinCheckInside} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400 text-[13px] lg:text-base">
              Real-time Tracking
            </span>
            <span className="text-[11px] text-gray-400 lg:text-xs">
              Live updates at every step of your shipment.
            </span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-center gap-4 p-2 border-b lg:border-b-0 lg:border-r border-white/20 lg:p-4">
          <GlowIconCircle icon={ShieldCheck} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400 text-[13px] lg:text-base">
              Secure & Reliable
            </span>
            <span className="text-[11px] text-gray-400 lg:text-xs">
              Advanced security and care at every stage.
            </span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-center gap-4 border-b lg:border-b-0 lg:border-r border-white/20 p-2 lg:p-4">
          <GlowIconCircle icon={Headset} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400 text-[13px] lg:text-base">
              24/7 Support
            </span>
            <span className="text-[11px] text-gray-400 lg:text-xs">
              Our talented teams is always here for you.
            </span>
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex items-center justify-center gap-4 p-2 lg:p-4">
          <GlowIconCircle icon={FileText} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400 text-[13px] lg:text-base">
              Complete Transparency
            </span>
            <span className="text-[11px] text-gray-400 lg:text-xs">
              Full visibility & clear updates at every step.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
