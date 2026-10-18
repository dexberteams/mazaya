"use client";
import { Factory, Globe, SquareCheckBig, TruckElectric } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import GlowIconCircle from "../../ui/GlowIconCircle";
import { usePathname } from "next/navigation";

export interface ClientStatsBarItemT {
  value?: string;
  label?: string;
}

export interface ClientT {
  title?: string;
  titleHighlight?: string;
  description?: string;
  statsBar?: ClientStatsBarItemT[];
}

const partners = [
  { name: "Partner 1", image: "/partners/ajex.png" },
  { name: "Partner 2", image: "/partners/aramex.png" },
  { name: "Partner 3", image: "/partners/amajon.jpeg" },
  { name: "Partner 4", image: "/partners/ninjaa.jpeg" },
  { name: "Partner 5", image: "/partners/careem.png" },
  { name: "Partner 6", image: "/partners/dhl.png" },
  { name: "Partner 7", image: "/partners/fedx.png" },
  { name: "Partner 8", image: "/partners/hunger.png" },
  { name: "Partner 9", image: "/partners/mrsool.png" },
  { name: "Partner 10", image: "/partners/noonlogo.jpeg" },
  { name: "Partner 11", image: "/partners/thechefz.jpeg" },
  { name: "Partner 12", image: "/partners/ups.png" },
];

const statsIcons = [SquareCheckBig, Factory, TruckElectric, Globe];

const defaultStats: ClientStatsBarItemT[] = [
  { value: "50%+", label: "Active Clients" },
  { value: "12+", label: "Industries Served" },
  { value: "1 M+", label: "Deliveries Done" },
  { value: "3", label: "Regions Covered" },
];

const Client = ({ t }: { t?: ClientT }) => {
  const pathname = usePathname() || "/";
  const stats = t?.statsBar?.length ? t.statsBar : defaultStats;

  return (
    <section className="relative overflow-hidden lg:p-8 px-4 lg:px-8 text-white">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-size-[70px_70px]" />
      </div>

      <h1 className=" font-manrope text-[20px] font-bold text-white! lg:text-4xl">
        {t?.title || "Current"}{" "}
        <span className="text-yellow-200">
          {t?.titleHighlight || "Clients"}
        </span>
      </h1>
      <p className="mt-4 font-manrope text-xs lg:text-base text-white lg:w-1/2">
        {t?.description ||
          "We're proud to partner with leading businesses across various industries, delivering reliable logistics solutions that drive their success."}
      </p>

      {/* Partner Marquee */}
      <div className="mt-5" dir="ltr">
        <Marquee
          key={pathname.startsWith("/ar") ? "ar-clients" : "en-clients"}
          direction="left"
          speed={80}
          autoFill={true}
          gradient={true}
          gradientColor="#1E1E1E"
          gradientWidth={100}
          pauseOnHover={true}
          play={true}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative mr-4 h-14 w-14 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-gray-600 transition-all duration-300 hover:border-[#FFBB00] hover:shadow-2xl hover:shadow-[#FFBB00]/50 active:border-[#FFBB00] active:shadow-2xl active:shadow-[#FFBB00]/50 lg:mr-8 lg:h-28 lg:w-40"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                sizes="(max-width: 1024px) 56px, 160px"
                className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Stats Card Box */}
      <div
        className="
         my-5 lg:mt-14
         grid grid-cols-2 lg:grid-cols-4
         gap-4
         rounded-lg
         border border-white/30
         bg-white/4
         p-2 lg:p-8
         backdrop-blur-xl
         shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_40px_rgba(0,0,0,0.25)]
        "
      >
        {stats.map((item, idx) => {
          const Icon = statsIcons[idx] ?? Globe;
          const isLast = idx === stats.length - 1;
          const isOdd = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`flex items-center justify-center gap-4 p-2 lg:p-4 ${
                !isLast ? `border-r border-white/10` : ""
              } ${idx === 1 ? "lg:border-r lg:border-white/10" : ""}`}
            >
              <GlowIconCircle icon={Icon} size={34} mobileSize={24} />
              <p className="flex flex-col items-start">
                <span className="text-yellow-400">{item.value}</span>
                <span className="text-xs text-gray-400 lg:text-sm">
                  {item.label}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Client;
