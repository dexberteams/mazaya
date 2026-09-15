import Link from "next/link";
import IndustriesHero from "./components/IndustriesHero";
import IndustryCategories from "./components/IndustryCategories";

export const metadata = {
  title: "Industries | Mazaya Fast Logistics",
  description:
    "Tailored logistics solutions for every industry: E-commerce, Restaurants, Retail, and Food & Beverage.",
};

const IndustriesPage = () => {
  return (
    <div className="w-full bg-[#070502]">
      {/* ── Section 1: Hero Section ── */}
      <IndustriesHero />

      {/* ── Section 2: Industry Categories Slider ── */}
      <IndustryCategories />

      <section className="w-full py-8 sm:py-12 lg:py-16 font-manrope">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-[#2e2617] bg-[#120e06] p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Left Content: Icon + Title & Subtitle */}
              <div className="flex items-center gap-4 sm:gap-6 text-left w-full sm:w-auto">
                <div className="shrink-0">
                  <svg
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.125 55.5C23.125 54.589 22.9456 53.6868 22.5969 52.8451C22.2483 52.0034 21.7373 51.2387 21.0931 50.5944C20.4488 49.9502 19.6841 49.4392 18.8424 49.0906C18.0007 48.7419 17.0985 48.5625 16.1875 48.5625C15.2765 48.5625 14.3743 48.7419 13.5326 49.0906C12.6909 49.4392 11.9262 49.9502 11.2819 50.5944C10.6377 51.2387 10.1267 52.0034 9.77809 52.8451C9.42944 53.6868 9.25 54.589 9.25 55.5C9.25 57.3399 9.98091 59.1045 11.2819 60.4056C12.583 61.7066 14.3476 62.4375 16.1875 62.4375C18.0274 62.4375 19.792 61.7066 21.0931 60.4056C22.3941 59.1045 23.125 57.3399 23.125 55.5ZM23.125 55.5H48.5625M48.5625 55.5C48.5625 53.6601 49.2934 51.8955 50.5944 50.5944C51.8955 49.2934 53.6601 48.5625 55.5 48.5625C57.3399 48.5625 59.1045 49.2934 60.4056 50.5944C61.7066 51.8955 62.4375 53.6601 62.4375 55.5M48.5625 55.5C48.5625 57.3399 49.2934 59.1045 50.5944 60.4056C51.8955 61.7066 53.6601 62.4375 55.5 62.4375C57.3399 62.4375 59.1045 61.7066 60.4056 60.4056C61.7066 59.1045 62.4375 57.3399 62.4375 55.5M43.9375 20.8125H60.125L67.0625 30.0625V55.5H62.4375M67.0625 30.0625H43.9375V20.8125M43.9375 20.8125V11.5625H13.875M9.25 25.4375H30.0625M4.625 39.3125H25.4375"
                      stroke="#FFBB00"
                      strokeWidth="4.625"
                    />
                  </svg>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                    Ready to Work Together?
                  </h2>
                  <p className="mt-1.5 font-inter text-xs sm:text-sm text-[#9e9688]">
                    Let&apos;s build a stronger logistics future together.
                  </p>
                </div>
              </div>

              {/* Right Action Button */}
              <div className="w-full sm:w-auto flex justify-start sm:justify-end">
                <Link
                  href="/getQuote"
                  className="w-full sm:w-auto text-center shrink-0 inline-flex items-center justify-center rounded-xl bg-[#FFBB00] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:bg-[#e6a800] hover:shadow-[0_4px_20px_rgba(255,187,0,0.35)] active:scale-95"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
