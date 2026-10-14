import Image from "next/image";
import Link from "next/link";

const BusinessGroup = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4  lg:gap-10 px-4 lg:px-8 text-white! py-4 font-manrope my-4 ">
      <div className="w-full lg:w-1/2">
        <h2
          style={{ color: "#ffffff" }}
          className="text-xl lg:text-2xl font-semibold"
        >
          Part of a Connected{" "}
          <span className="text-yellow-200">Business Group</span>
        </h2>
        <p className="text-xs lg:text-sm mt-2">
          Three companies. One commitment to moving businesses forward.
        </p>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-2 lg:gap-8 mt-2 lg:mt-0 w-full lg:w-1/2">
        <div className="relative h-14 w-14 sm:h-20 sm:w-28">
          <Image
            src="/logo/Logo.png"
            alt="Company logo"
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-contain transition-transform duration-500 group-hover/image:scale-110"
          />
        </div>

        <div className="relative h-14 w-14 sm:h-24 sm:w-24">
          <Image
            src="/Loadtruck.png"
            alt="Company logo"
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-contain transition-transform duration-500 group-hover/image:scale-110 "
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessGroup;
