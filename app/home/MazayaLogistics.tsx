import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";
import { PiCertificateLight, PiUserListLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiWarehouseLight } from "react-icons/pi";

import { CiGlobe } from "react-icons/ci";
import { ChartNoAxesCombined } from "lucide-react";
import { RxPeople } from "react-icons/rx";
import Link from "next/link";

export type MazayaLogisticsT = {
  sectionLabel: string;
  heading: string;
  headingHighlight: string;
  opportunitiesTitle: string;
  jobs: {
    opCoord: {
      title: string;
      desc: string;
    };
    fleetSup: {
      title: string;
      desc: string;
    };
    whAssist: {
      title: string;
      desc: string;
    };
  };
  whyTitle: string;
  reasons: string[];
  viewAll: string;
  stats: {
    openPositions: string;
    teamMembers: string;
    citiesCovered: string;
    happyClient: string;
  };
};

type Props = {
  lang?: string;
  t?: MazayaLogisticsT;
};

const MazayaLogistics = ({ lang = "en", t }: Props) => {
  const careerImages = [
    {
      src: "/home/career1.jpg",
      alt: "Mazaya masanda Logistics team",
      stat: "20+",
      label: t?.stats.openPositions || "Open Positions",
    },
    {
      src: "/home/career2.jpg",
      alt: "Logistics professionals",
      stat: "500+",
      label: t?.stats.teamMembers || "Team Members",
    },
    {
      src: "/home/career3.jpg",
      alt: "Mazaya masanda Logistics workplace",
      stat: "15+",
      label: t?.stats.citiesCovered || "Cities Covered",
    },
    {
      src: "/home/career4.webp",
      alt: "Mazaya Logistics career",
      stat: "99%",
      label: t?.stats.happyClient || "Happy Client",
    },
  ];

  const reasons = t?.reasons || [
    "Professional Work Environment",
    "Career Growth Opportunities",
    "Collaborative Team Culture",
    "Learning & Development",
  ];

  return (
    <section className="my-10 p-4 font-manrope lg:my-20 lg:p-8">
      <SectionLabel text={t?.sectionLabel || "Careers"} />

      <h1 className="mt-4 text-2xl font-bold text-white lg:text-4xl">
        {t?.heading || "Build Your Career with"}{" "}
        <span className="text-yellow-200">
          {t?.headingHighlight || "Mazaya Masanda Logistics"}
        </span>
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/*  IMAGE DIV  */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {careerImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              {/* Stats Card */}
              <div className="absolute bottom-3 inset-s-3 inset-e-3 rounded-lg w-1/2 p-1 lg:p-3">
                <p className="text-sm font-bold text-yellow-400 lg:text-xl">
                  {image.stat}
                </p>

                <p className="text-[8px] text-white/80 lg:text-sm">
                  {image.label}
                </p>
              </div>

              {/* Animated Border */}
              <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/0 transition-all duration-500 group-hover:inset-3 group-hover:border-white/30" />
            </div>
          ))}
        </div>

        {/*  TEXT DIV  */}
        <div className="">
          <p className="text-sm text-gray-300 lg:text-xl lg:leading-8">
            {t?.opportunitiesTitle || "CURRENT OPPORTUNITIES"}
          </p>

          {/* Small Cards */}
          <div className="mt-6 gap-3 space-y-2 lg:space-y-6">
            <div className="flex justify-start items-start gap-3">
              <span className="bg-white flex justify-center items-center m-2 w-18 h-15 rounded-sm shrink-0">
                <PiUserListLight className="w-10 h-10 text-black" />
              </span>
              <div>
                <h3 className="text-sm lg:text-lg font-semibold text-white">
                  {t?.jobs.opCoord.title || "Operations Coordinator"}
                </h3>
                <p className="mt-1 text-[11px] lg:text-xs leading-5 text-gray-400">
                  {t?.jobs.opCoord.desc ||
                    "Manage daily logistics operations and ensure smooth shipment processes."}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-3 ">
              <span className="bg-white flex justify-center items-center m-2 w-18 h-15 rounded-sm shrink-0">
                <CiDeliveryTruck className="w-10 h-10 text-black" />
              </span>

              <div>
                <h3 className="text-sm lg:text-lg font-semibold text-white">
                  {t?.jobs.fleetSup.title || "Fleet Supervisor"}
                </h3>
                <p className="mt-1 text-[11px] lg:text-xs leading-5 text-gray-400">
                  {t?.jobs.fleetSup.desc ||
                    "Oversee vehicle operations, maintenance schedules, and driver coordination."}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-3">
              <span className="bg-white flex justify-center items-center m-2 w-18 h-15 rounded-sm shrink-0">
                <PiWarehouseLight className="w-10 h-10 text-black" />
              </span>

              <div>
                <h3 className="text-sm lg:text-lg font-semibold text-white">
                  {t?.jobs.whAssist.title || "Warehouse Assistant"}
                </h3>
                <p className="mt-1 text-[11px] lg:text-xs leading-5 text-gray-400">
                  {t?.jobs.whAssist.desc ||
                    "Support inventory handling, storage, and warehouse operations."}
                </p>
              </div>
            </div>
          </div>
          {/* lower text */}
          <div>
            <p className="text-sm text-gray-300 lg:text-xl lg:leading-8 mt-4 md:mt-8 lg:mt-28">
              {t?.whyTitle || "WHY WORK WITH US"}
            </p>
            <div className="mt-4 grid grid-cols-2 lg:flex gap-3 lg:gap-6">
              <div className="flex justify-start items-start gap-3">
                <CiGlobe className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-200 shrink-0" />
                <div>
                  <p className="mt-1 text-[11px] lg:text-xs leading-5 text-white">
                    {reasons[0]}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <ChartNoAxesCombined className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-200 shrink-0" />

                <div>
                  <p className="mt-1 text-[11px] lg:text-xs leading-5 text-white">
                    {reasons[1]}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <RxPeople className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-200 shrink-0" />
                <div>
                  <p className="mt-1 text-[11px] lg:text-xs leading-5 text-white">
                    {reasons[2]}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <PiCertificateLight className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-200 shrink-0" />
                <div>
                  <p className="mt-1 text-[11px] lg:text-xs leading-5 text-white">
                    {reasons[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 flex gap-4 lg:mt-10 lg:gap-10">
            <Link
              href={`/${lang}/careers#open-positions`}
              className="mt-6 inline-flex w-fit rounded-lg bg-[#FFBB00] px-3 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-yellow-400 lg:px-6 lg:py-3 cursor-pointer"
            >
              {t?.viewAll || "View All Jobs"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MazayaLogistics;
