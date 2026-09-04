import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionLabel from "../ui/SectionLabel";

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

const Partner = () => {
  return (
    <section className="relative my-10 overflow-hidden bg-linear-to-br from-[#0A0700] via-[#211A0A] to-[#0A0700] p-4 lg:my-20 lg:p-8 lg:py-16">
      {/* Top Blend */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#0A0700] to-transparent" />

      {/* Bottom Blend */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0A0700] to-transparent" />

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-size-[70px_70px]" />
      </div>
      <SectionLabel text="Partnership" />

      <h1 className="mt-4 font-manrope text-2xl font-bold text-white lg:text-4xl">
        Grow Together <span className="text-yellow-400">Successfully</span>
      </h1>

      {/* Partner Marquee */}
      <div className="mt-10 lg:mt-14">
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
              className="relative mr-4 h-24 w-28 cursor-pointer overflow-hidden border border-gray-600 transition-all duration-300 hover:border-[#FFBB00] hover:shadow-2xl hover:shadow-[#FFBB00]/50 active:border-[#FFBB00] active:shadow-2xl active:shadow-[#FFBB00]/50 lg:mr-8 lg:h-28 lg:w-40 rounded-lg"
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
    </section>
  );
};

export default Partner;
