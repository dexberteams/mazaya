import Link from "next/link";

export type AboutCTAT = {
  heading: string;
  subtitle: string;
  button?: string;
  secondaryButton?: string;
};

type AboutCTAProps = {
  lang?: string;
  t?: AboutCTAT;
};

export default function AboutCTA({ lang = "en", t }: AboutCTAProps) {
  return (
    <section className="relative overflow-hidden mt-10 mb-20 sm:mb-28 lg:mt-20 lg:mb-52 mx-4 lg:mx-8 flex flex-col lg:flex-row justify-between items-center gap-6 rounded-sm border border-white/10 bg-white/4 backdrop-blur-xl p-5 sm:p-6 lg:p-10 text-white shadow-[0_8px_40px_rgba(0,0,0,0.35)] font-manrope">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* Left Content */}
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
              d="M20.8125 48.5625H6.9375C4.38681 48.5625 2.3125 46.4882 2.3125 43.9375V30.0625C2.3125 27.5118 4.38681 25.4375 6.9375 25.4375H20.8125C23.3632 25.4375 25.4375 27.5118 25.4375 30.0625V43.9375C25.4375 46.4882 23.3632 48.5625 20.8125 48.5625ZM6.9375 30.0625V43.9375H20.8125V30.0625H6.9375ZM27.0401 67.8141C19.8903 65.4928 13.7666 60.7642 9.7125 54.4339L13.6091 51.9411C17.0825 57.3672 22.3301 61.4208 28.4576 63.4111L27.0401 67.8141Z"
              fill="#FFBB00"
            />
            <path
              d="M43.9375 64.75C45.2147 64.75 46.25 63.7147 46.25 62.4375C46.25 61.1603 45.2147 60.125 43.9375 60.125C42.6603 60.125 41.625 61.1603 41.625 62.4375C41.625 63.7147 42.6603 64.75 43.9375 64.75Z"
              fill="#FFBB00"
            />
            <path
              d="M67.0625 71.6875H37C34.4493 71.6875 32.375 69.6132 32.375 67.0625V57.8125C32.375 55.2618 34.4493 53.1875 37 53.1875H67.0625C69.6132 53.1875 71.6875 55.2618 71.6875 57.8125V67.0625C71.6875 69.6132 69.6132 71.6875 67.0625 71.6875ZM37 57.8125V67.0625H67.0625V57.8125H37ZM62.1832 48.5625H67.2337C68.6423 44.87 69.3679 40.9521 69.375 37C69.375 35.446 69.227 33.9059 69.005 32.375H64.3199C64.5743 33.9013 64.75 35.4414 64.75 37C64.75 41.0584 63.8551 44.9319 62.1832 48.5625ZM64.75 16.1875C64.75 15.3319 64.5951 14.5202 64.3777 13.7339L68.672 11.2526L66.3595 7.24738L62.0907 9.7125C60.9121 8.52508 59.4336 7.67953 57.8125 7.26587V2.3125H53.1875V7.26587C51.5433 7.69369 50.0657 8.53775 48.9094 9.7125L44.6405 7.24738L42.328 11.2526L46.62 13.7362C46.405 14.5202 46.25 15.3296 46.25 16.1875C46.25 17.0454 46.405 17.8548 46.6223 18.6434L42.328 21.1224L44.6405 25.1276L48.9094 22.6625C50.0657 23.8396 51.5457 24.679 53.1875 25.1068V30.0625H57.8125V25.1068C59.4333 24.6938 60.9118 23.8491 62.0907 22.6625L66.3595 25.1276L68.672 21.1224L64.3777 18.6434C64.5951 17.8571 64.75 17.0431 64.75 16.1875ZM55.5 20.8125C52.9493 20.8125 50.875 18.7382 50.875 16.1875C50.875 13.6368 52.9493 11.5625 55.5 11.5625C58.0507 11.5625 60.125 13.6391 60.125 16.1875C60.125 18.7359 58.0507 20.8125 55.5 20.8125ZM13.6114 22.0613L9.71484 19.5637C12.6365 14.9771 16.6694 11.2028 21.4394 8.59122C26.2094 5.97962 31.5619 4.61534 37 4.625V9.25C32.3377 9.24098 27.7488 10.4107 23.6597 12.6506C19.5706 14.8904 16.1141 18.1276 13.6114 22.0613Z"
              fill="#FFBB00"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-lg font-semibold sm:text-xl lg:text-2xl text-white">
            {t?.heading || "Ready to Work Together?"}
          </span>
          <span className="max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm">
            {t?.subtitle ||
              "Let's build a stronger logistics future together with Mazaya Masanda."}
          </span>
        </div>
      </div>

      {/* Right Action Button */}
      <div className="relative z-10 flex w-full lg:w-auto justify-start lg:justify-end">
        <Link
          href={`/${lang}/getQuote`}
          className="w-full sm:w-auto text-center shrink-0 inline-flex items-center justify-center rounded-sm border border-yellow-300/20 bg-amber-500 px-6 py-2.5 text-sm font-semibold text-black shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] cursor-pointer"
        >
          {t?.secondaryButton || t?.button || "Request a Quote"}
        </Link>
      </div>
    </section>
  );
}
