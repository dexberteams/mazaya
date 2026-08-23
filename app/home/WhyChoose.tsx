import { MoveRight } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import SectionLabel from "../ui/SectionLabel";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="p-4 lg:p-8 my-10 lg:my-20 font-manrope">
      <SectionLabel text="advantages" />
      {/* grid box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-white mt-4 lg:mt-8">
        {/* div-1 */}
        <div className="rounded-lg bg-[#201700] p-4 lg:p-8">
          <h3 className="font-bold text-2xl lg:text-4xl">Why Choose Us?</h3>
          <p className="font-inter text-xs lg:text-lg mt-3 lg:mt-6">
            We provide Full Range Logistice Solution
          </p>
          {/* option div */}
          <div className="space-y-3 lg:space-y-4 mt-3 lg:mt-6 text-sm">
            <p className="flex gap-2 justify-start">
              <span className="text-yellow-400">
                <FaCheckCircle />
              </span>
              Professional Operation Team
            </p>
            <p className="flex gap-2 justify-start">
              <span className="text-yellow-400">
                <FaCheckCircle />
              </span>
              Extensive Coverage
            </p>
            <p className="flex gap-2 justify-start">
              <span className="text-yellow-400">
                <FaCheckCircle />
              </span>
              Fast Execution
            </p>
            <p className="flex gap-2 justify-start">
              <span className="text-yellow-400">
                <FaCheckCircle />
              </span>
              High Quality Operation
            </p>
            <p className="flex gap-2 justify-start">
              <span className="text-yellow-400">
                <FaCheckCircle />
              </span>
              Experience in Seasonal Project
            </p>
            <p className="flex gap-2 justify-start">
              <span className="text-yellow-400">
                <FaCheckCircle />
              </span>
              Organized Management System
            </p>
            <p className="flex gap-2 justify-start">
              <span className="text-yellow-400">
                <FaCheckCircle />
              </span>
              Regular Performance Reports
            </p>
          </div>

          <button className="bg-yellow-500 text-black p-2 text-sm lg:text-lg lg:p-4 rounded-lg font-medium flex gap-1 mt-3 lg:mt-9">
            Learn More About Us
            <MoveRight />
          </button>
        </div>
        {/* div-2 */}
        <div className="group relative h-75 overflow-hidden rounded-lg lg:h-142.5">
          <Image
            src="/home/why-choose.png"
            alt="why choose image"
            fill
            className="
      object-cover
      transition-transform duration-700 ease-out
      lg:group-hover:scale-110
    "
          />

          {/* Top Stats Card */}
          <div
            className="
      absolute right-4 top-4
      rounded-lg border border-white/20
      bg-[#393527]/95
      p-3 lg:p-6
      backdrop-blur-[0.5px]

      animate-[floatTop_3s_ease-in-out_infinite]
      lg:animate-none
      lg:transition-all
      lg:duration-500
      lg:group-hover:translate-y-2
      lg:group-hover:bg-[#393527]/80
      lg:group-hover:shadow-xl
    "
          >
            <p className="text-base font-semibold text-white lg:text-xl">20+</p>

            <p className="text-xs text-white/80">
              Years of
              <br /> Experience
            </p>
          </div>

          {/* Bottom Stats Card */}
          <div
            className="
      absolute bottom-4 left-4
      rounded-lg border border-white/20
      bg-[#393527]/90
      p-3 lg:p-8
      backdrop-blur-[0.5px]

      animate-[floatBottom_3.5s_ease-in-out_infinite]
      lg:animate-none
      lg:transition-all
      lg:duration-500
      lg:group-hover:-translate-y-2
      lg:group-hover:bg-[#393527]/75
      lg:group-hover:shadow-xl
    "
          >
            <p className="text-base font-semibold text-white lg:text-xl">
              10,000+
            </p>

            <p className="text-xs text-white/80">
              Deliveries
              <br /> Completed
            </p>
          </div>

          {/* Desktop Hover Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100" />
        </div>

        {/* div-3 */}
        <div className="hidden h-75 flex-col gap-2 overflow-hidden rounded-lg lg:flex lg:h-142.5 lg:gap-4">
          {/* 1st image - 1/3 */}
          <div className="group relative h-1/3 w-full overflow-hidden rounded-lg">
            <Image
              src="/home/why-choose.png"
              alt="why choose image"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Stats Card */}
            <div className="absolute right-4 bottom-4 translate-y-2 rounded-lg border border-white/20 bg-[#393527]/80 p-3 opacity-90 backdrop-blur-[1px] transition-all duration-500 group-hover:translate-y-0 group-hover:bg-[#393527]/60 group-hover:shadow-xl lg:p-6">
              <p className="text-base font-semibold text-white lg:text-xl">
                99%
              </p>

              <p className="text-xs text-white/80">
                Client
                <br />
                Satisfaction
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* 2nd image - 2/3 */}
          <div className="group relative h-2/3 w-full overflow-hidden rounded-lg">
            <Image
              src="/home/why-choose.png"
              alt="why choose image"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Stats Card */}
            <div className="absolute right-4 bottom-4 translate-y-2 rounded-lg border border-white/20 bg-[#393527]/80 p-3 opacity-90 backdrop-blur-[1px] transition-all duration-500 group-hover:translate-y-0 group-hover:bg-[#393527]/60 group-hover:shadow-xl lg:p-6">
              <p className="text-base font-semibold text-white lg:text-xl">
                500+
              </p>

              <p className="text-xs text-white/80">
                Professional
                <br />
                Drivers
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
