import Image from "next/image";
import SectionLabel from "../../ui/SectionLabel";

export type ServiceHeroT = {
  sectionLabel: string;
  heading: string;
  headingHighlight: string;
  subtitle: string;
};

export default function ServiceHero({ t }: { t?: ServiceHeroT }) {
  return (
    <section className="relative w-full overflow-hidden font-manrope">
      {/* ── Hero Container ── */}
      <div className="relative h-auto min-h-[350px] sm:min-h-[500px] lg:h-150 lg:min-h-0 w-full flex flex-col justify-center">
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

          {/* Left Dark Vignette / Gradient Overlay to ensure text readability on mobile (LTR: dark left, RTL: dark right) */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-black via-black/85 via-45% md:via-black/70 md:via-55% to-transparent z-10" />

          {/* Top Vignette (mobile) */}
          <div className="lg:hidden absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A0700]/90 via-[#0A0700]/40 to-transparent z-10" />

          {/* Bottom Fade (mobile) */}
          <div className="lg:hidden absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0A0700] via-[#0A0700]/70 to-transparent z-10" />

          {/* Benchmark Desktop Gradient Overlay (LTR: dark on left, fade right) */}
          <div
            className="
             hidden
             lg:absolute lg:inset-0 lg:block rtl:lg:hidden
             lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.82)_28%,rgba(0,0,0,0.42)_60%,rgba(0,0,0,0.05)_85%,transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_25%,transparent_72%,rgba(0,0,0,0.45)_100%)]
             z-10
             "
          />

          {/* Benchmark Desktop Gradient Overlay (RTL: dark on right, fade left) */}
          <div
            className="
             hidden
             lg:absolute lg:inset-0 rtl:lg:block
             lg:bg-[linear-gradient(to_left,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.82)_28%,rgba(0,0,0,0.42)_60%,rgba(0,0,0,0.05)_85%,transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_25%,transparent_72%,rgba(0,0,0,0.45)_100%)]
             z-10
             "
          />
        </div>

        {/* ── Main Hero Content (Desktop 50% split) ── */}
        <div
          className="
            relative z-20 flex h-full w-full flex-col items-start justify-center font-manrope text-white
            px-4 lg:w-1/2 lg:gap-2 lg:px-16 lg:pt-6"
        >
          <SectionLabel
            text={t?.sectionLabel || "services"}
            className="bg-transparent lg:ml-4 rtl:lg:mr-4 rtl:lg:ml-0"
          />

          <h1 className="w-11/12 text-3xl font-bold leading-tight sm:text-4xl lg:p-4 lg:text-5xl">
            {t?.heading || "Complete Logistics Solutions"}{" "}
            <span className="text-yellow-200">
              {t?.headingHighlight || "Under One Roof"}
            </span>
          </h1>

          <span className="mt-2 block lg:hidden h-0.5 w-24 bg-yellow-400"></span>

          <p className="max-w-xl mt-2 p-1 text-xs leading-4 lg:leading-6 sm:text-base lg:w-4/5 lg:p-4 font-manrope text-gray-300">
            {t?.subtitle ||
              "From transportation and warehousing to last-mile delivery and supply chain management, we provide end-to-end logistics solutions tailored to your business needs."}
          </p>
        </div>
      </div>
    </section>
  );
}
