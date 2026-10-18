"use client";

import { MoveRight, MoveLeft } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import SectionLabel from "../ui/SectionLabel";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export type WhyChooseT = {
  sectionLabel: string;
  heading: string;
  headingHighlight: string;
  subtitle: string;
  bullets: string[];
  button: string;
  stats: {
    experience: string;
    deliveries: string;
    satisfaction: string;
    drivers: string;
  };
};

const defaultBullets = [
  "Professional Operation Team",
  "Extensive Coverage",
  "Fast Execution",
  "High Quality Operation",
  "Experience in Seasonal Project",
  "Organized Management System",
  "Regular Performance Reports",
];

const WhyChoose = ({ t }: { t?: WhyChooseT }) => {
  const pathname = usePathname() || "/";
  const stripped = pathname.replace(/^\/(en|ar)/, "") || "/";
  const isLandingPage = stripped === "/" || stripped === "";
  const lang = pathname.split("/")[1] || "en";
  const isAr = lang === "ar";
  const bullets = t?.bullets || defaultBullets;

  return (
    <div className="p-4 lg:p-8 my-10 lg:my-20 font-manrope">
      {isLandingPage && <SectionLabel text={t?.sectionLabel || "advantages"} />}
      <h3 className="font-bold text-2xl my-2 lg:my-4 lg:text-4xl text-white">
        {t?.heading || "Why"}{" "}
        <span className="text-yellow-200">
          {t?.headingHighlight || "Choose Us?"}
        </span>
      </h3>
      {/* grid box */}
      <div className="flex lg:flex-row flex-col-reverse justify-between gap-4 text-white mt-4 lg:mt-8">
        {/* div-1 */}
        <div className="rounded-lg bg-[#201700] p-4 lg:p-8">
          <p className="font-inter text-xs lg:text-lg mt-3 lg:mt-6">
            {t?.subtitle || "We provide Full Range Logistice Solution"}
          </p>
          {/* option div */}
          <div className="space-y-3 lg:space-y-4 mt-3 lg:mt-6 text-sm">
            {bullets.map((bullet, idx) => (
              <p key={idx} className="flex gap-2 justify-start items-center">
                <span className="text-yellow-400 shrink-0">
                  <FaCheckCircle />
                </span>
                {bullet}
              </p>
            ))}
          </div>
          <Link href={`/${lang}/about`}>
            <button className="bg-yellow-500 text-black p-2 text-sm lg:text-[16px] lg:p-4 rounded-lg font-medium flex items-center gap-1 mt-3 lg:mt-9 cursor-pointer hover:bg-yellow-400 transition-colors">
              {t?.button || "Learn More About Us"}
              {isAr ? <MoveLeft size={18} /> : <MoveRight size={18} />}
            </button>
          </Link>
        </div>
        <div className=" h-75 lg:h-142.5 grid grid-cols-2 gap-2 lg:gap-4 w-full lg:w-2/3">
          {/* div-2 */}
          <div className="group relative h-75 overflow-hidden rounded-lg lg:h-142.5">
            <Image
              src="/home/why-choose/image1.png"
              alt="why choose image"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out lg:group-hover:scale-110"
            />

            {/* Top Stats Card */}
            <div
              className="
      absolute right-4 top-4
      rounded-lg border border-white/20
      bg-[#393527]/95
      p-3 lg:p-6
      backdrop-blur-[0.5px]

      animate-[floatTop_3s_ease-in-out_infinite]
      lg:animate-none
      lg:transition-all
      lg:duration-500
      lg:group-hover:translate-y-2
      lg:group-hover:bg-[#393527]/80
      lg:group-hover:shadow-xl
    "
            >
              <p className="text-[12px] font-semibold text-white lg:text-xl">
                20+
              </p>

              <p className="text-[10px] lg:text-xs text-white/80 whitespace-pre-line">
                {t?.stats.experience || "Years of\nExperience"}
              </p>
            </div>

            {/* Bottom Stats Card */}
            <div
              className="
      absolute bottom-4 left-4
      rounded-lg border border-white/20
      bg-[#393527]/90
      p-3 lg:p-8
      backdrop-blur-[0.5px]

      animate-[floatBottom_3.5s_ease-in-out_infinite]
      lg:animate-none
      lg:transition-all
      lg:duration-500
      lg:group-hover:-translate-y-2
      lg:group-hover:bg-[#393527]/75
      lg:group-hover:shadow-xl
    "
            >
              <p className="text-[12px] font-semibold text-white lg:text-xl">
                10,000+
              </p>

              <p className="text-[10px] lg:text-xs text-white/80 whitespace-pre-line">
                {t?.stats.deliveries || "Deliveries\nCompleted"}
              </p>
            </div>

            {/* Desktop Hover Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100" />
          </div>

          {/* div-3 */}
          <div className=" h-75 flex flex-col overflow-hidden rounded-lg lg:flex lg:h-142.5 gap-4 lg:gap-4 border-2 border-yellow-500">
            {/* 1st image - 1/3 */}
            <div className="group relative h-[45%] lg:h-1/3 w-full overflow-hidden rounded-lg">
              <Image
                src="/home/why-choose/image2.png"
                alt="why choose image"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Stats Card */}
              <div className="absolute right-4 bottom-4 translate-y-2 rounded-lg border border-white/20 bg-[#393527]/80 p-1 opacity-90 backdrop-blur-[1px] transition-all duration-500 group-hover:translate-y-0 group-hover:bg-[#393527]/60 group-hover:shadow-xl lg:p-6">
                <p className="text-[12px] font-semibold text-white lg:text-xl">
                  99%
                </p>

                <p className="text-[10px] lg:text-xs text-white/80 whitespace-pre-line">
                  {t?.stats.satisfaction || "Client\nSatisfaction"}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* 2nd image - 2/3 */}
            <div className="group relative h-[50%] lg:h-2/3 w-full overflow-hidden rounded-lg">
              <Image
                src="/home/why-choose/image3.png"
                alt="why choose image"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Stats Card */}
              <div className="absolute right-4 bottom-4 translate-y-2 rounded-lg border border-white/20 bg-[#393527]/80 p-1 opacity-90 backdrop-blur-[1px] transition-all duration-500 group-hover:translate-y-0 group-hover:bg-[#393527]/60 group-hover:shadow-xl lg:p-6">
                <p className="text-[12px] font-semibold text-white lg:text-xl">
                  500+
                </p>

                <p className="text-[10px] lg:text-xs text-white/80 whitespace-pre-line">
                  {t?.stats.drivers || "Professional\nDrivers"}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
