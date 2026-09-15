"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";

const capabilities = [
  "Inbound receiving and inspection",
  "Inventory management and control",
  "Order processing and fulfillment",
  "Pick, pack, and ship operations",
  "Cross-docking and transloading",
  "Real-time reporting and analytics",
  "Multi-channel distribution support",
];

const features = [
  "Real-time inventory tracking",
  "Automated processes",
  "Accurate order fulfillment",
  "Detailed reporting & analytics",
];

const Capabilities = () => {
  return (
    <section className="w-full px-4 py-10 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-lg bg-[#0A0700] lg:flex-row">
        {/* Left Side */}
        <div className="w-full px-0 py-2 sm:px-2 lg:w-[26%] lg:px-0 lg:py-0">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Our <span className="text-[#F5E5B5]">Capabilities</span>
          </h2>

          {/* Yellow line */}
          <div className="mt-4 h-px w-16 bg-[#FFBB00] sm:w-20" />

          {/* List */}
          <div className="mt-4 space-y-3">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-[11px] leading-5 text-white/80 sm:text-base"
              >
                <CircleCheck
                  size={20}
                  strokeWidth={3}
                  className="mt-1 shrink-0 fill-[#FFBB00] text-[#0A0700]"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className=" w-full lg:w-2/3 mt-5 flex justify-center items-center gap-2 rounded-md bg-white px-4 py-2 text-[14px] font-medium text-black transition-all duration-300 hover:bg-[#FFBB00]">
            Learn More About Us
            <span className="text-sm">→</span>
          </button>
        </div>

        {/* Right Content */}
        <div className="mt-6 flex w-full flex-col overflow-hidden rounded-lg sm:flex-row lg:mt-0 lg:w-[74%]">
          {/* Image */}
          <div className="relative h-[230px] w-full sm:h-[300px] sm:w-[52%] lg:h-auto">
            <Image
              src="/warehouse/driver.png"
              alt="Warehouse management"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 52vw, 40vw"
            />
          </div>

          {/* Text Card */}
          <div className="flex w-full flex-col justify-center bg-[#352801] px-6 py-7 sm:w-[48%] sm:px-7 lg:px-8">
            <h3 className="max-w-[240px] text-lg font-medium leading-7 text-white sm:text-xl">
              Technology-Driven
              <br />
              Warehouse Management
            </h3>

            <p className="mt-4 max-w-[290px] text-[10px] leading-5 text-white/70 sm:text-[11px]">
              We use advanced WMS (Warehouse Management System) to ensure
              accuracy, efficiency, and complete visibility across your supply
              chain.
            </p>

            {/* Features */}
            <div className="mt-5 space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[10px] text-white/80 sm:text-[11px]"
                >
                  <span className="text-[#00C307]">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
