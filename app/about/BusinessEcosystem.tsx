import { ArrowUpRight, Building2, Sparkles } from "lucide-react";
import Image from "next/image";

const subsidiaries = [
  {
    number: "01",
    name: "Boxify Logistics",
    category: "LOGISTICS & OPERATIONS",
    description:
      "Driving smarter operations through reliable logistics, efficient delivery networks, and customer-focused solutions.",
    services: ["Smart Operations", "Reliable Delivery", "Business Growth"],
    icon: "/about/boxify.png",
    website: "https://boxfuy.barmjin.com/",
  },
  {
    number: "02",
    name: "Dexbar",
    category: "TECHNOLOGY & INNOVATION",
    description:
      "Building modern business solutions with innovative technology, digital transformation, and a forward-thinking mindset.",
    services: ["Digital Solutions", "Innovation", "Scalable Growth"],
    icon: "/about/dexbar-logo.png",
    website: "https://dexber.vercel.app/en",
  },
];

const BusinessEcosystem = () => {
  return (
    <section className="relative overflow-hidden bg-[#070502] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#F5B800]/20 bg-[#F5B800]/[0.07] px-4 py-2">
            <Sparkles size={15} className="text-yellow-300" />
            <span className="text-[10px] font-semibold tracking-[0.22em] text-yellow-300 sm:text-xs">
              OUR BUSINESS ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl font-manrope">
            One Vision.
            <span className="mt-1 block text-yellow-200">
              Multiple Businesses.
            </span>
          </h2>
        </div>

        {/* CEO / Leadership card */}
        <div className="group relative mb-8 overflow-hidden rounded-lg border border-[#F5B800]/25 bg-linear-to-br from-[#211A08] via-[#100D06] to-[#0B0905] p-5 transition-all duration-500 hover:border-[#F5B800]/50 sm:p-8 lg:p-10">
          {/* Decorative circle */}
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-[#F5B800]/10 transition-transform duration-700 group-hover:scale-110 sm:-right-5 sm:-top-28 sm:h-80 sm:w-80" />
          <div className="pointer-events-none absolute right-8 top-8 h-32 w-32 rounded-full bg-[#F5B800]/6 blur-3xl sm:right-20 sm:top-10 sm:h-48 sm:w-48" />

          <div className="relative grid items-center gap-7 md:grid-cols-[auto_1fr] md:gap-10">
            {/* CEO icon */}
            <div className="flex justify-center md:justify-start">
              <div className="group/image relative h-24 w-24 shrink-0 rounded-lg border border-[#F5B800]/30 bg-[#F5B800]/6 p-1 shadow-[0_0_40px_rgba(245,184,0,0.08)] transition-all duration-500 hover:border-[#F5B800]/60 hover:shadow-[0_0_35px_rgba(245,184,0,0.18)] sm:h-32 sm:w-32">
                {/* CEO Image */}
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src="/home/team/team5.jpeg"
                    alt="Company CEO"
                    fill
                    sizes="(max-width: 640px) 96px, 128px"
                    className="object-cover object-center transition-transform duration-500 group-hover/image:scale-105"
                    priority
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Leader Badge */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#F5B800]/30 bg-[#100D06] px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-[#F5B800]">
                  LEADER
                </span>
              </div>
            </div>

            {/* CEO details */}
            <div className="text-center md:text-left">
              <div className="mb-3 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#F5B800] sm:text-xs">
                  LEADERSHIP & VISION
                </span>
                <span className="h-1 w-1 rounded-full bg-[#F5B800]/60" />
                <span className="text-[10px] tracking-wider text-white/40 sm:text-xs">
                  GROUP LEADERSHIP
                </span>
              </div>

              <h3 className="text-2xl font-semibold sm:text-3xl">
                Eng. Shafi Aldawsari
              </h3>

              <p className="mt-2 text-sm font-medium text-[#F5B800] sm:text-base">
                Founder & Chief Executive Officer
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 md:mx-0">
                Leading with purpose, strategic thinking, and a commitment to
                excellence. Through a unified vision, our leadership drives
                innovation, empowers teams, and builds businesses designed for
                long-term success.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                {[
                  "Strategic Leadership",
                  "Innovation",
                  "Sustainable Growth",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/3 px-3 py-2 text-xs text-white/65 transition-colors duration-300 hover:border-[#F5B800]/30 hover:text-[#F5B800]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Connecting line */}
        <div className="relative mx-auto flex h-12 w-full max-w-2xl items-center justify-center">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-[#F5B800]/40 to-[#F5B800]/10" />
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#F5B800]/25 bg-[#100D06]">
            <Building2 size={16} className="text-[#F5B800]" />
          </div>
        </div>

        {/* Subsidiary heading */}
        <div className="mb-7 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/75">
            OUR SUBSIDIARY COMPANIES
          </p>
          <p className="mt-2 text-sm text-white/75">
            Independent expertise. One shared ambition.
          </p>
        </div>

        {/* Company cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
          {subsidiaries.map((company) => {
            const Icon = company.icon;

            return (
              <article
                key={company.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-[#17130A] to-[#0C0A06] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#F5B800]/40 hover:shadow-[0_15px_45px_rgba(245,184,0,0.07)] sm:p-7 lg:p-8"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#F5B800] transition-all duration-500 group-hover:w-full" />

                <div className="mb-7 flex items-start justify-between">
                  <div className="group/image relative h-14 w-14 overflow-hidden rounded-xl border border-[#F5B800]/20 bg-white transition-all duration-500 group-hover:rotate-[-4deg] group-hover:border-[#F5B800]/50 sm:h-16 sm:w-16">
                    <Image
                      src={Icon}
                      alt="Company logo"
                      fill
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-contain transition-transform duration-500 group-hover/image:scale-110"
                    />
                  </div>
                </div>

                <p className="text-[10px] font-semibold text-[#F5B800] sm:text-xs">
                  {company.category}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#F5B800] sm:text-2xl">
                  {company.name}
                </h3>

                <p className="mt-4 flex-1 text-sm text-white/50">
                  {company.description}
                </p>

                {/* Services */}
                <div className="my-6 flex flex-wrap gap-2">
                  {company.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-md border border-white/8 bg-white/3 px-2.5 py-2 text-[11px] text-white/60 sm:text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Company link */}
                <a
                  href={company.website}
                  className="mt-auto flex items-center justify-between border-t border-white/8 pt-5 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-[#F5B800]"
                >
                  <span>Explore Company</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#F5B800]/40 group-hover:bg-[#F5B800]/10">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-14 sm:flex-row">
          <Sparkles size={17} className="text-[#F5B800]" />
          <p className="text-sm leading-6 text-white/45">
            Building stronger businesses through shared vision and collective
            expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessEcosystem;
