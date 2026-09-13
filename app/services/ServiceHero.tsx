import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden font-manrope">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services/service-hero.jpg"
          alt="Complete Logistics Solutions Under One Roof"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] lg:object-center"
        />

        {/* Left Dark Vignette / Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-45% md:via-black/70 md:via-55% to-transparent z-10" />

        {/* Top Vignette */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070502]/90 via-[#070502]/40 to-transparent z-10" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#070502] via-[#070502]/70 to-transparent z-10" />
      </div>

      {/* ── Main Hero Content ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        {/* Badge: = SERVICES */}
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <div className="flex flex-col gap-1">
            <span className="h-1 w-4 bg-[#FFBB00] rounded-full" />
            <span className="h-0.75 w-4 bg-[#FFBB00] rounded-full" />
          </div>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-inter">
            SERVICES
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-manrope text-3xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.14]">
          Complete Logistics
          <br />
          Solutions <span className="text-[#FFEAB1]">Under</span>
          <br />
          <span className="text-[#FFEAB1]">One Roof</span>
        </h1>

        {/* Divider bar */}
        <div className="w-20 sm:w-28 h-[3px] bg-[#FFBB00] my-5 sm:my-7 rounded-full" />

        {/* Description */}
        <p className="font-inter text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-normal">
          From transportation and warehousing to last-mile delivery and supply
          chain management, we provide end-to-end logistics solutions tailored
          to your business needs.
        </p>
      </div>
    </section>
  );
}
