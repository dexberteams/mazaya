import { Box } from "lucide-react";
const Quote = () => {
  return (
    <section className=" relative overflow-hidden my-10 lg:my-20 mx-4 lg:mx-8 flex flex-col lg:flex-row justify-between gap-6 rounded-sm border border-white/10 bg-white/4 backdrop-blur-xl p-5 sm:p-6 lg:p-10 text-white shadow-[0_8px_40px_rgba(0,0,0,0.35)] ">
      {/* Ambient Glow */}
      <div className=" pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl " />
      <div className=" pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl " />
      {/* Top Glass Highlight */}
      <div className=" pointer-events-none absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent " />
      {/* Content */}
      <div className="relative z-10 flex items-center gap-3 lg:gap-4">
        {/* Icon Glass Box */}
        <div className=" flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-yellow-400/20 bg-yellow-400/6 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,193,7,0.04)] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
          >
            <path
              d="M20.8125 64.7499V32.3749C20.8125 31.7616 21.0561 31.1734 21.4898 30.7398C21.9235 30.3061 22.5117 30.0624 23.125 30.0624H50.875C51.4883 30.0624 52.0765 30.3061 52.5102 30.7398C52.9439 31.1734 53.1875 31.7616 53.1875 32.3749V64.7499M30.0625 64.7499V50.8749C30.0625 50.2616 30.3061 49.6734 30.7398 49.2398C31.1735 48.8061 31.7617 48.5624 32.375 48.5624H41.625C42.2383 48.5624 42.8265 48.8061 43.2602 49.2398C43.6939 49.6734 43.9375 50.2616 43.9375 50.8749V64.7499M36.2137 11.8492L13.0887 20.2574C12.6418 20.419 12.2555 20.7144 11.9824 21.1033C11.7093 21.4923 11.5627 21.9559 11.5625 22.4312V60.1249C11.5625 60.7383 11.8061 61.3264 12.2398 61.7601C12.6735 62.1938 13.2617 62.4374 13.875 62.4374H60.125C60.7383 62.4374 61.3265 62.1938 61.7602 61.7601C62.1939 61.3264 62.4375 60.7383 62.4375 60.1249V22.4312C62.4373 21.9559 62.2907 21.4923 62.0176 21.1033C61.7445 20.7144 61.3582 20.419 60.9113 20.2574L37.7863 11.8492C37.2782 11.6655 36.7218 11.6655 36.2137 11.8492Z"
              stroke="#FFBB00"
              strokeWidth="4.625"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold sm:text-xl lg:text-2xl">
            Looking for Reliable Warehousing Solutions?
          </span>
          <span className="max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm">
            Let&apos;s discuss how our warehousing services can help optimize
            your supply chain.
          </span>
        </div>
      </div>
      {/* Button */}
      <div className="relative z-10 flex items-end justify-end lg:ml-6">
        <button className="w-1/3 rounded-sm border border-yellow-300/20 bg-amber-500 px-3 py-1.5 text-center text-sm text-black shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] lg:w-auto lg:px-6 lg:py-2.5">
          Get Quote
        </button>
      </div>
    </section>
  );
};
export default Quote;
