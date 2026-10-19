import { MoveRight, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FleetOverviewProps {
  translations: {
    heading: string;
    headingHighlight: string;
    description: string;
    getQuote: string;
    cards: {
      title: string;
      description: string;
      count: string;
    }[];
  };
  isAr: boolean;
}

const FLEET_IMAGES = [
  "/fleet/fleet-bus.png",
  "/fleet/medium-truck.jpg",
  "/fleet/lighter-truck.jpg",
  "/fleet/pickup.avif",
];

const FleetOverview = ({ translations: t, isAr }: FleetOverviewProps) => {
  const ArrowIcon = isAr ? MoveLeft : MoveRight;

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="flex flex-col gap-2 overflow-hidden px-4 pt-4 lg:my-20 lg:flex-row lg:px-8"
    >
      {/* Heading and description */}
      <div className="lg:w-[40%]">
        <h2 className="font-manrope text-[20px] font-bold text-white lg:text-4xl">
          {t.heading}{" "}
          <span className="text-yellow-200">{t.headingHighlight}</span>
        </h2>

        <div className="mt-4 h-px w-16 bg-[#FFBB00] sm:w-20" />

        <p className="mt-4 w-full font-manrope text-xs text-white/70 lg:w-2/3 lg:text-base">
          {t.description}
        </p>

        <Link
          href="/getQuote"
          className="mt-3 flex items-center justify-center gap-2 rounded-sm border border-amber-300/20 bg-yellow-400 px-3 py-1 text-black shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] lg:mt-10 lg:w-1/2 lg:px-6 lg:py-2 lg:font-semibold"
        >
          {t.getQuote}
          <ArrowIcon size={18} aria-hidden="true" />
        </Link>
      </div>

      {/* Fleet cards */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {t.cards.map((card, index) => (
          <div
            key={card.title}
            className="overflow-hidden rounded-sm border border-white/10 bg-[#151000]/80 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-sm lg:h-32">
              <Image
                src={FLEET_IMAGES[index]}
                alt={card.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="animate-[zoom_4s_ease-in-out_infinite] object-cover"
              />
            </div>

            <div className="space-y-2 p-1 pt-3 text-white">
              <h3 className="text-[16px] font-semibold">{card.title}</h3>

              <p className="text-[12px] text-white/70">{card.description}</p>

              <p className="text-[12px] text-yellow-500">{card.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FleetOverview;
