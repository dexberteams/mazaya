import Image from "next/image";
const Quote = () => {
  return (
    <section className=" relative overflow-hidden my-10 lg:my-20 mx-4 lg:mx-8 flex flex-col lg:flex-row justify-between gap-6 text-white rounded-sm border border-white/10 bg-white/4 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] p-5 sm:p-6 lg:p-10 ">
      {/* Glass Glow - Top Right */}
      <div className=" pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl " />
      {/* Glass Glow - Bottom Left */}
      <div className=" pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-yellow-500/10 blur-3xl " />
      {/* Top glass shine */}
      <div className=" pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent " />
      {/* Content */}
      <div className="relative z-10 flex items-center gap-3 lg:gap-4">
        {/* Icon Glass Circle */}
        <div className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-white/6 backdrop-blur-md shadow-inner ">
          <Image
            src="/advantages/icons/smile.svg"
            alt="smile"
            width={40}
            height={40}
          />
        </div>
        <p className="flex flex-col gap-2">
          <span className="text-lg font-semibold sm:text-xl lg:text-2xl">
            Ready to Experience the Mazaya Advantage?
          </span>
          <span className="max-w-3xl text-xs leading-5 text-gray-400 sm:text-sm">
            Let&apos;s work together to create efficient, reliable, and scalable
            logistics solutions that drive your business forward.
          </span>
        </p>
      </div>
      {/* Button */}
      <div className="relative z-10 flex items-center lg:ml-6">
        <button className=" w-full lg:w-auto rounded-sm border border-amber-300/20 bg-amber-500 px-6 py-2.5 font-semibold text-black shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 ">
          Get Quote
        </button>
      </div>
    </section>
  );
};
export default Quote;
