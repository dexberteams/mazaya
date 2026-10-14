import Link from "next/link";
import IndustriesHero from "./components/IndustriesHero";
import IndustryCategories from "./components/IndustryCategories";
import { getDictionary } from "../dictionaries";

export const metadata = {
  title: "Industries | Mazaya Fast Logistics",
  description:
    "Tailored logistics solutions for every industry: E-commerce, Restaurants, Retail, and Food & Beverage.",
};

const IndustriesPage = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="w-full bg-[#0A0700] font-manrope">
      {/* ── Section 1: Hero Section ── */}
      <IndustriesHero t={dict.industries?.hero} />

      {/* ── Section 2: Industry Categories Slider ── */}
      <IndustryCategories
        t={dict.industries?.categories}
        lang={lang}
      />

      {/* ── Section 3: Bottom CTA Banner ── */}
      <section className="relative overflow-hidden my-10 lg:my-20 mx-4 lg:mx-8 flex flex-col lg:flex-row justify-between items-center gap-6 rounded-sm border border-white/10 bg-white/4 backdrop-blur-xl p-5 sm:p-6 lg:p-10 text-white shadow-[0_8px_40px_rgba(0,0,0,0.35)] font-manrope">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

        {/* Left Content: Icon + Title & Subtitle */}
        <div className="relative z-10 flex items-center gap-4 sm:gap-6 text-start w-full lg:w-auto">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-yellow-400/20 bg-yellow-400/6 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,193,7,0.04)]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-400"
            >
              <path
                d="M23.125 55.5C23.125 54.589 22.9456 53.6868 22.5969 52.8451C22.2483 52.0034 21.7373 51.2387 21.0931 50.5944C20.4488 49.9502 19.6841 49.4392 18.8424 49.0906C18.0007 48.7419 17.0985 48.5625 16.1875 48.5625C15.2765 48.5625 14.3743 48.7419 13.5326 49.0906C12.6909 49.4392 11.9262 49.9502 11.2819 50.5944C10.6377 51.2387 10.1267 52.0034 9.77809 52.8451C9.42944 53.6868 9.25 54.589 9.25 55.5C9.25 57.3399 9.98091 59.1045 11.2819 60.4056C12.583 61.7066 14.3476 62.4375 16.1875 62.4375C18.0274 62.4375 19.792 61.7066 21.0931 60.4056C22.3941 59.1045 23.125 57.3399 23.125 55.5ZM23.125 55.5H48.5625M48.5625 55.5C48.5625 53.6601 49.2934 51.8955 50.5944 50.5944C51.8955 49.2934 53.6601 48.5625 55.5 48.5625C57.3399 48.5625 59.1045 49.2934 60.4056 50.5944C61.7066 51.8955 62.4375 53.6601 62.4375 55.5M48.5625 55.5C48.5625 57.3399 49.2934 59.1045 50.5944 60.4056C51.8955 61.7066 53.6601 62.4375 55.5 62.4375C57.3399 62.4375 59.1045 61.7066 60.4056 60.4056C61.7066 59.1045 62.4375 57.3399 62.4375 55.5M43.9375 20.8125H60.125L67.0625 30.0625V55.5H62.4375M67.0625 30.0625H43.9375V20.8125M43.9375 20.8125V11.5625H13.875M9.25 25.4375H30.0625M4.625 39.3125H25.4375"
                stroke="#FFBB00"
                strokeWidth="4.625"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-lg font-semibold sm:text-xl lg:text-2xl text-white">
              {dict.industries?.cta?.heading || "Ready to Work Together?"}
            </h2>
            <p className="max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm">
              {dict.industries?.cta?.subtitle ||
                "Let's build a stronger logistics future together with tailored industry solutions."}
            </p>
          </div>
        </div>

        {/* Right Action Button */}
        <div className="relative z-10 flex w-full lg:w-auto justify-start lg:justify-end">
          <Link
            href={`/${lang}/getQuote`}
            className="w-full sm:w-auto text-center shrink-0 inline-flex items-center justify-center rounded-sm border border-yellow-300/20 bg-amber-500 px-6 py-2.5 text-sm font-semibold text-black shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          >
            {dict.industries?.cta?.button || "Get Quote"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
