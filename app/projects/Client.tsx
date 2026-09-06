import { Factory, Globe, SquareCheckBig, Van } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import GlowIconCircle from "../ui/GlowIconCircle";

const partners = [
  {
    name: "Partner 1",
    image: "/partners/ajex.png",
  },
  {
    name: "Partner 2",
    image: "/partners/aramex.png",
  },
  {
    name: "Partner 3",
    image: "/partners/amajon.jpeg",
  },
  {
    name: "Partner 4",
    image: "/partners/ninjaa.jpeg",
  },
  {
    name: "Partner 5",
    image: "/partners/careem.png",
  },
  {
    name: "Partner 6",
    image: "/partners/dhl.png",
  },
  {
    name: "Partner 7",
    image: "/partners/fedex.png",
  },
  {
    name: "Partner 8",
    image: "/partners/hunger.png",
  },
  {
    name: "Partner 9",
    image: "/partners/mrsool.png",
  },
  {
    name: "Partner 10",
    image: "/partners/noon.webp",
  },
  {
    name: "Partner 11",
    image: "/partners/thechefz.jpeg",
  },
  {
    name: "Partner 12",
    image: "/partners/ups.png",
  },
];

const Client = () => {
  return (
    <section className="relative overflow-hidden lg:p-8 px-4 lg:px-8 text-white">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-size-[70px_70px]" />
      </div>

      <h1 className=" font-manrope text-[20px] font-bold text-white! lg:text-4xl">
        Current <span className="text-yellow-200">Clients</span>
      </h1>
      <p className="mt-4 font-manrope text-xs lg:text-base text-white lg:w-1/2">
        We&apos;re proud to partner with leading businesses across various
        industries, delivering reliable logistics solutions that drive their
        success.
      </p>
      {/* Partner Marquee */}
      <div className="mt-5">
        <Marquee
          speed={80}
          gradient
          gradientColor="#1E1E1E"
          gradientWidth={100}
          pauseOnHover
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative mr-4 h-14 w-14 cursor-pointer overflow-hidden border border-gray-600 transition-all duration-300 hover:border-[#FFBB00] hover:shadow-2xl hover:shadow-[#FFBB00]/50 active:border-[#FFBB00] active:shadow-2xl active:shadow-[#FFBB00]/50 lg:mr-8 lg:h-28 lg:w-40 rounded-lg"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                sizes="(max-width: 1024px) 112px, 160px"
                className="object-cover transition duration-300 hover:scale-105 rounded-lg"
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
        {/* Card 1 */}
        <div className="flex items-center justify-center gap-4 border-r border-white/10 p-2 lg:p-4">
          <GlowIconCircle icon={SquareCheckBig} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400">50%+</span>
            <span className="text-xs text-gray-400 lg:text-sm">
              Active Clients
            </span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-center gap-4 p-2 lg:border-r lg:border-white/10 lg:p-4">
          <GlowIconCircle icon={Factory} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400">12+</span>
            <span className="text-xs text-gray-400 lg:text-sm">
              Industries served
            </span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-center gap-4 border-r border-white/10 p-2 lg:p-4">
          <GlowIconCircle icon={Van} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400">1 M+</span>
            <span className="text-xs text-gray-400 lg:text-sm">
              Delivered Completed
            </span>
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex items-center justify-center gap-4 p-2 lg:p-4">
          <GlowIconCircle icon={Globe} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400">3</span>
            <span className="text-xs text-gray-400 lg:text-sm">
              Regions Covered
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Client;
