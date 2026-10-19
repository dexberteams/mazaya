import { CircleCheck, Truck } from "lucide-react";
import { HiOutlineTruck } from "react-icons/hi2";
import { AiOutlineTruck } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import Image from "next/image";

interface FleetTypesProps {
  translations: {
    heading: string;
    headingHighlight: string;
    cards: {
      title: string;
      description: string;
      features: string[];
    }[];
  };
  isAr: boolean;
}

const FleetTypes = ({ translations: t, isAr }: FleetTypesProps) => {
  const fleetCards = [
    {
      image: "/fleet/truck.webp",
      icon: Truck,
    },
    {
      image: "/fleet/vans.webp",
      icon: HiOutlineTruck,
    },
    {
      image: "/fleet/container.jpg",
      icon: MdLocalShipping,
    },
    {
      image: "/fleet/freeze-truck.jpg",
      icon: AiOutlineTruck,
    },
  ];

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="my-10 overflow-hidden px-4 lg:my-20 lg:px-8"
    >
      <h2 className="font-manrope text-[20px] font-bold text-white lg:text-4xl">
        {t.heading}{" "}
        <span className="text-yellow-200">{t.headingHighlight}</span>
      </h2>

      <div className="mt-4 h-0.5 w-24 bg-yellow-400 lg:mt-8 lg:w-32" />

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {fleetCards.map((card, index) => {
          const Icon = card.icon;
          const translatedCard = t.cards[index];

          return (
            <div key={card.image} className="group overflow-hidden rounded-lg">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={translatedCard.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="rounded-t-lg object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0E0900]/50 via-transparent to-white/5" />
              </div>

              {/* Content */}
              <div className="rounded-b-lg border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-[#FFEAB1]/70 bg-white/[0.035] p-4 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 group-hover:border-[#FFEAB1] group-hover:bg-white/5">
                {/* Title */}
                <h3 className="flex items-center justify-between gap-2 text-sm lg:text-xl">
                  <span>{translatedCard.title}</span>

                  <span className="rounded-sm bg-amber-400 p-1.5 text-black shadow-[0_0_15px_rgba(251,191,36,0.25)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                </h3>

                {/* Divider */}
                <div className="my-2 h-px w-20 bg-yellow-400" />

                {/* Description */}
                <p className="text-xs leading-5 lg:text-sm">
                  {translatedCard.description}
                </p>

                {/* Features */}
                <div className="mt-2 space-y-2">
                  {translatedCard.features.map((feature) => (
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
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FleetTypes;
