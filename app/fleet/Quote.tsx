import { Box } from "lucide-react";
import Image from "next/image";
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
        <div className=" flex h-14 w-14 shrink-0 items-center justify-center rounded-sm  ">
          <Image
            src="/fleet/icons/quote.svg"
            alt="quote"
            width={60}
            height={60}
          ></Image>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold sm:text-xl lg:text-2xl">
            Let Our Fleet Drive Your Business Forward
          </span>
          <span className="max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm">
            Reliable. Efficient. Always on time.
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
