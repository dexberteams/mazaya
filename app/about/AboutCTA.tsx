import Link from "next/link";

export default function AboutCTA() {
  return (
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
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px]"
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
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}