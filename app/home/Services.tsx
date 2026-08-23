"use client";

import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

const industries = [
  {
    id: 0,
    name: "E-Commerce",
    des: "End-to-end solutions for online e-commerce.",
    image: "/home/industries/commerce.png",
    className: "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2",
  },
  {
    id: 1,
    name: "Logistics",
    des: "Global cargo and transport solutions.",
    image: "/home/industries/logistic.png",
    className: "lg:col-start-3 lg:col-span-3 lg:row-start-1 lg:row-span-3",
  },
  {
    id: 2,
    name: "Food & Beverage",
    des: "Specialized cold chain management.",
    image: "/home/industries/food.png",
    className: "lg:col-start-6 lg:col-span-3 lg:row-start-1 lg:row-span-2",
  },
  {
    id: 3,
    name: "Retail",
    des: "Scalable product distribution networks.",
    image: "/home/industries/retail.png",
    className: "lg:col-start-9 lg:col-span-2 lg:row-start-1 lg:row-span-2",
  },
  {
    id: 4,
    name: "Restaurants",
    des: "Fresh-to-table food delivery logistics.",
    image: "/home/industries/restuarent.png",
    className: "lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-2",
  },
  {
    id: 5,
    name: "Healthcare",
    des: "End-to-end solutions for online healthcare.",
    image: "/home/industries/health.png",
    className: "lg:col-start-3 lg:col-span-3 lg:row-start-4",
  },
  {
    id: 6,
    name: "Large Corporationse",
    des: "Enterprise supply chain optimization.",
    image: "/home/industries/large.png",
    className: "lg:col-start-6 lg:col-span-2 lg:row-start-3 lg:row-span-2",
  },
  {
    id: 7,
    name: "Wearhousing",
    des: "Efficient storage and inventory control.",
    image: "/home/industries/housing.png",
    className: "lg:col-start-8 lg:col-span-3 lg:row-start-3 lg:row-span-2",
  },
];

const Services = () => {
  return (
    <section className="my-10 p-4 lg:my-20 lg:p-8 font-manrope relative">
      <SectionLabel text="Industries" />

      <h1 className="mt-4 font-manrope text-2xl font-bold text-white lg:text-4xl">
        Industries <span className="text-yellow-400">We Serve</span>
      </h1>

      {/* Industries Grid */}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-10 lg:grid-rows-4">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className={`group relative min-h-40 overflow-hidden rounded-2xl border border-yellow-400
        ${industry.className}
        motion-safe:animate-[cardPulse_8s_ease-in-out_infinite]
        lg:motion-safe:animate-none
        lg:hover:motion-safe:animate-none`}
          >
            {/* Image */}
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              className="
          object-cover
          transition-transform duration-700 ease-out
          motion-safe:animate-[imageZoom_8s_ease-in-out_infinite]
          lg:motion-safe:animate-none
          lg:group-hover:scale-110
        "
            />

            {/* Dark Overlay */}
            <div
              className="
          absolute inset-0
          bg-linear-to-t from-black via-black/40 to-transparent
          opacity-80
          transition-all duration-500
          motion-safe:animate-[overlayPulse_6s_ease-in-out_infinite]
          lg:motion-safe:animate-none
          lg:group-hover:opacity-95
        "
            />

            {/* Border Animation */}
            <div
              className="
          absolute inset-3 rounded-xl
          border border-white/0
          transition-all duration-500
          motion-safe:animate-[borderPulse_6s_ease-in-out_infinite]
          lg:motion-safe:animate-none
          lg:group-hover:inset-4
          lg:group-hover:border-white/30
        "
            />

            {/* Title */}
            <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
              <h3
                className="
            text-base font-medium text-white
            "
              >
                {industry.name}
              </h3>
              <div className="relative z-10 mt-2 flex flex-col gap-1">
                <span
                  className="
              h-1 w-4 bg-[#f5c400]
              "
                />

                <span
                  className="
              h-0.75 w-4 bg-white
              "
                />
              </div>
              <p
                className="
                mt-1 text-xs text-white
               "
              >
                {industry.des}
              </p>

              <div
                className="
            mt-3 h-0.5 w-0 bg-yellow-400
            transition-all duration-500
            motion-safe:animate-[bottomLine_8s_ease-in-out_infinite]
            lg:motion-safe:animate-none
            lg:group-hover:w-16
          "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
