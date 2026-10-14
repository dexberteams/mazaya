import { CirclePlay } from "lucide-react";
import Image from "next/image";
import TabButtons from "../ui/TabButtons";
import Link from "next/link";

export type HeroT = {
  title: string;
  titleHighlight: string;
  subtitle: string;
  getQuote: string;
  stats: {
    drivers: string;
    deliveries: string;
    cities: string;
    satisfaction: string;
  };
  features: {
    onTime: string;
    onTimeDesc: string;
    safe: string;
    safeDesc: string;
    support: string;
    supportDesc: string;
  };
  buttons: {
    warehouse: string;
    watchStories: string;
    fleet: string;
    services: string;
    industries: string;
  };
};

type HeroProps = {
  lang?: string;
  t?: HeroT;
};

const Hero = ({ lang = "en", t }: HeroProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden py-16 lg:py-24">
      {/* Hero Content */}
      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-8 px-4 sm:flex-row sm:px-8 lg:px-4">
          {/* for mobile view rating */}
          <Image
            src="/home/Rating.png"
            alt="Rating"
            width={100}
            height={100}
            className="h-10 w-56 lg:hidden"
          />

          {/* left */}
          <div className="flex w-full flex-col items-start justify-center font-manrope text-white lg:w-1/2 lg:gap-2">
            <h1 className="w-11/12 text-4xl font-extrabold lg:w-2/3 lg:p-4 lg:text-5xl lg:leading-tight">
              {t?.title || "Your Trusted Logistics Partner"}{" "}
              <span className="text-yellow-200">
                {t?.titleHighlight || "Mazaya Masanda"}
              </span>
            </h1>

            <p className="p-2 text-sm lg:w-4/5 lg:p-4 lg:text-base">
              {t?.subtitle ||
                "Reliable transportation, warehousing and supply chain solutions with speed, safety and efficiency."}
            </p>

            <div className="flex gap-4 p-4">
              <Link href={`/${lang}/getQuote`}>
                <button className="rounded-lg bg-[#FFBB00] px-3 py-1.5 text-sm text-black transition-colors hover:bg-yellow-500 lg:mt-4 lg:px-12 lg:py-3 cursor-pointer">
                  {t?.getQuote || "Get Quote"}
                </button>
              </Link>
            </div>
          </div>

          {/* right */}
          <div>
            {/* rating for desktop */}
            <Image
              src="/home/Rating.png"
              alt="Rating"
              width={100}
              height={100}
              className="mb-8 lg:mt-8 hidden h-10 w-56 lg:block"
            />

            <div className="flex flex-col items-start justify-center gap-8 rounded-lg border border-[#FFBB00]/50 bg-[#1E1813]/90 p-4 font-(family-name:--font-anek-bangla) text-white backdrop-blur-sm lg:mt-10 ">
              <div className="flex items-center gap-3">
                <Image
                  src="/home/icons/truck-driver.png"
                  alt="Professional Drivers"
                  width={24}
                  height={24}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-sm">500+</span>
                  <span className="text-sm text-gray-400">
                    {t?.stats.drivers || "Professional Drivers"}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/home/icons/truck-delivery.png"
                  alt="Successful Deliveries"
                  width={24}
                  height={24}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-sm">10,000+</span>
                  <span className="text-sm text-gray-400">
                    {t?.stats.deliveries || "Successful Deliveries"}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/home/icons/city.png"
                  alt="Cities Covered"
                  width={24}
                  height={24}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-sm">15+</span>
                  <span className="text-sm text-gray-400">
                    {t?.stats.cities || "Cities Covered"}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/home/icons/outline.png"
                  alt="Client Satisfaction"
                  width={24}
                  height={24}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-sm">99%</span>
                  <span className="text-sm text-gray-400">
                    {t?.stats.satisfaction || "Client Satisfaction"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className=" ml-4 lg:ml-0  flex w-11/12 justify-between  px-4 py-2  font-(family-name:--font-anek-bangla) text-white lg:w-1/2 lg:gap-16 lg:px-6">
          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
            <Image
              src="/home/icons/delivery.png"
              alt="On-Time Delivery"
              width={24}
              height={24}
            />

            <p className="flex flex-col gap-1 text-center lg:text-start">
              <span className="text-xs lg:text-sm">
                {t?.features.onTime || "On-Time Delivery"}
              </span>
              <span className="text-xs text-gray-400 lg:text-sm">
                {t?.features.onTimeDesc || "Everyday"}
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
            <Image
              src="/home/icons/lock-line.png"
              alt="Safe & Secure"
              width={24}
              height={24}
            />

            <p className="flex flex-col gap-1 text-center lg:text-start">
              <span className="text-xs lg:text-sm">
                {t?.features.safe || "Safe & Secure"}
              </span>
              <span className="text-xs text-gray-400 lg:text-sm">
                {t?.features.safeDesc || "Cargo Protection"}
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
            <Image
              src="/home/icons/hand-support.png"
              alt="24/7 Support"
              width={24}
              height={24}
            />

            <p className="flex flex-col gap-1 text-center lg:text-start">
              <span className="text-xs lg:text-sm">
                {t?.features.support || "24/7 Support"}
              </span>
              <span className="text-xs text-gray-400 lg:text-sm">
                {t?.features.supportDesc || "Always Here"}
              </span>
            </p>
          </div>
        </div>
        {/* bottom buttons for desktop*/}
        <div className="hidden lg:flex gap-4 w-1/3 justify-center items-center mx-auto p-4 border border-yellow-400/45 rounded-full mt-8 bg-linear-to-b from-yellow-800/40 via-yellow-500/10 to-transparent transition-opacity duration-300">
          <Link href={`/${lang}/warehouse`}>
            <button className=" rounded-full bg-transparent hover:bg-[#FFBB00] px-4 py-2 text-sm text-white hover:text-black transition-colors lg:px-6 lg:py-3 cursor-pointer">
              {t?.buttons.warehouse || "Warehouse"}
            </button>
          </Link>

          <Link
            href="https://www.youtube.com/watch?v=v1pWJHSQQ2w"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-black transition-colors hover:bg-yellow-800 hover:text-white lg:px-6 lg:py-3 cursor-pointer"
          >
            <CirclePlay className="text-[#FFBB00]" />
            {t?.buttons.watchStories || "Watch our Stories"}
          </Link>

          <Link href={`/${lang}/fleet`}>
            <button className=" rounded-full bg-transparent hover:bg-[#FFBB00] text-white hover:text-black px-4 py-2 text-sm transition-colors lg:px-6 lg:py-3 cursor-pointer">
              {t?.buttons.fleet || "Our Fleet"}
            </button>
          </Link>
        </div>
        {/* bottom button for mobile */}
        <div className="flex flex-col lg:hidden mt-4">
          <Link
            href="https://www.youtube.com/watch?v=v1pWJHSQQ2w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" rounded-full bg-white px-4 py-2 text-sm text-black hover:bg-yellow-800 lg:px-6 lg:py-3 flex justify-center items-center gap-2 hover:text-white w-11/12 mx-auto cursor-pointer">
              <CirclePlay className="text-[#FFBB00]" />
              {t?.buttons.watchStories || "Watch our Stories"}
            </button>
          </Link>
          <TabButtons lang={lang} t={t?.buttons} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
