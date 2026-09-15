import { ArrowRight, CircleCheck, Truck } from "lucide-react";
import { HiOutlineTruck } from "react-icons/hi2";
import { AiOutlineTruck } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import Image from "next/image";

const FleetTypes = () => {
  const fleetCards = [
    {
      image: "/fleet/truck.webp",
      title: "Trucks",
      icon: Truck,
      description:
        "Heavy-duty trucks for large-scale freight transportation, industrial logistics, and long-distance deliveries.",
      features: [
        "High Load Capacity",
        "Long Distance Transport",
        "GPS Tracking",
        "Professional Drivers",
      ],
    },
    {
      image: "/fleet/vans.webp",
      title: "Vans",
      icon: HiOutlineTruck,
      description:
        "Fast and flexible delivery vans designed for city distribution, e-commerce, and last-mile operations.",
      features: [
        "Urban Delivery",
        "Fast Dispatch",
        "Fuel Efficient",
        "Same-Day Delivery",
      ],
    },
    {
      image: "/fleet/container.jpg",
      title: "Containers",
      icon: MdLocalShipping,
      description:
        "Secure container transportation for commercial cargo, import/export shipments, and bulk logistics.",
      features: [
        "Secure Cargo",
        "Import & Export",
        "Large Capacity",
        "Nationwide Coverage",
      ],
    },
    {
      image: "/fleet/freeze-truck.jpg",
      title: "Refrigerated Vehicles",
      icon: AiOutlineTruck,
      description:
        "Temperature-controlled vehicles for food, pharmaceuticals, and other sensitive products requiring cold-chain logistics.",
      features: [
        "Temperature Control",
        "Food Grade Transport",
        "Pharmaceutical Delivery",
        "24/7 Monitoring",
      ],
    },
  ];
  return (
    <section className="my-10 overflow-hidden px-4 lg:my-20 lg:px-8">
      <h1 className="font-manrope text-[20px] font-bold text-white lg:text-4xl">
        Our
        <span className="text-yellow-200"> Fleet Types</span>
      </h1>
      <div className="mt-4 lg:mt-8 h-0.5 w-24 bg-yellow-400 lg:w-32"></div>
      {/* card-box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 lg:mt-10">
        {fleetCards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.title} className="group overflow-hidden rounded-lg">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="rounded-t-lg object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0E0900]/50 via-transparent to-white/5" />
              </div>

              {/* Content */}
              <div
                className="rounded-b-lg border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-[#FFEAB1]/70
                bg-white/[0.035] p-4 text-white/90 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:border-[#FFEAB1] group-hover:bg-white/5"
              >
                {/* Title */}
                <h3 className="flex items-center justify-between text-sm lg:text-xl">
                  {card.title}

                  <span
                    className="rounded-sm bg-amber-400 p-1.5 text-black shadow-[0_0_15px_rgba(251,191,36,0.25)]
                    transition-transform duration-300 group-hover:scale-110"
                  >
                    <Icon size={20} />
                  </span>
                </h3>

                {/* Divider */}
                <div className="my-2 h-px w-20 bg-yellow-400" />

                {/* Description */}
                <p className="text-xs leading-5 lg:text-sm">
                  {card.description}
                </p>

                {/* Features */}
                <div className="mt-2 space-y-2">
                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-1 text-[12px] text-white/80"
                    >
                      <CircleCheck
                        size={20}
                        strokeWidth={3}
                        className="shrink-0 fill-[#FFBB00] text-[#0A0700]"
                      />

                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <p
                  className="my-1 flex items-center gap-2 text-blue-500 transition-all duration-300
                  group-hover:gap-3 lg:my-2"
                >
                  Learn More
                  <ArrowRight size={18} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FleetTypes;
