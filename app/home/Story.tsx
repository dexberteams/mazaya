import SectionLabel from "../ui/SectionLabel";
import Image from "next/image";
import { BarChart3, ChartBarIncreasing, Goal, Handshake } from "lucide-react";

const Story = () => {
  return (
    <section className="p-4 lg:p-8 my-10 lg:my-20 font-manrope">
      <SectionLabel text="about us" />
      <h1 className="mt-4 font-manrope text-2xl font-bold text-white lg:text-4xl">
        Our Story <span className="text-yellow-400">& Vision</span>
      </h1>

      {/* about box */}
      <div className="mt-6 flex flex-col gap-4 md:gap-8 lg:mt-16 lg:flex-row lg:gap-12">
        {/* Image - Mobile: full width, Desktop: 1/3 */}
        <div className="relative h-48 w-full lg:h-116 lg:w-1/3">
          <Image
            src="/about/box-image.png"
            alt="About Us"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="rounded-lg object-cover"
          />
          <span className="absolute -bottom-6 lg:-bottom-8 z-30 left-12 lg:left-20 w-2/3 mx-auto bg-[#150B00BF] border-2 border-white p-2 lg:p-4 text-white text-[10px] lg:text-[12px] flex justify-center items-center gap-2 rounded-lg">
            <Handshake className="text-yellow-400" />
            Driven by Commitment,
            <br /> Delivered with Excellence
          </span>
        </div>

        {/* Content Box - Mobile: full width, Desktop: 2/3 */}
        <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
          <h2 className="font-manrope text-xl font-semibold text-white lg:text-3xl">
            Building Connections. Delivering Excellence.
          </h2>

          <p className="mt-2 text-[12px] lg:text-[16px] font-inter text-gray-300 lg:mt-4 mb-4">
            Mazaya Logistics is a leading logistics and supply chain solutions
            provider in Saudi Arabia and beyond. We are committed to delivering
            reliable, efficient, and innovative logistics services that empower
            businesses to grow and succeed.
          </p>

          <div className="mt-2 lg:mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* card1 */}
            <div className="w-full  rounded-sm border border-white/20 bg-[#1b1810]/95 px-4 py-4 shadow-lg backdrop-blur-sm lg:px-5 lg:py-5">
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-white">
                  <BarChart3 size={18} className="text-yellow-500" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-manrope text-lg font-medium text-white">
                    Our Story
                  </h3>

                  {/* Yellow line */}
                  <div className="mt-1 h-0.5 w-18 bg-yellow-400" />

                  <p className="mt-4 font-manrope text-xs leading-4 lg:leading-6 text-gray-300 lg:pr-8">
                    Founded with a vision to transform logistics, Mazaya
                    Logistics has grown into a trusted partner for businesses
                    across multiple industries.
                  </p>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="w-full  rounded-sm border border-white/20 bg-[#1b1810]/95 px-4 py-4 shadow-lg backdrop-blur-sm lg:px-5 lg:py-5">
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-white">
                  <Handshake size={18} className="text-yellow-500" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-manrope text-lg font-medium text-white">
                    Our Mission
                  </h3>

                  {/* Yellow line */}
                  <div className="mt-1 h-0.5 w-18 bg-yellow-400" />

                  <p className="mt-4  font-manrope text-xs leading-4 lg:leading-6 text-gray-300 lg:pr-12">
                    To deliver smart, reliable, and cost-effective logistics
                    solutions that create value for our clients and communities.
                  </p>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="w-full rounded-sm border border-white/20 bg-[#1b1810]/95 px-4 py-4 shadow-lg backdrop-blur-sm lg:px-5 lg:py-5">
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-white">
                  <Goal size={18} className="text-yellow-500" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-manrope text-lg font-medium text-white">
                    Our Vision
                  </h3>

                  {/* Yellow line */}
                  <div className="mt-1 h-0.5 w-18 bg-yellow-400" />

                  <p className="mt-4  font-manrope text-xs leading-4 lg:leading-6 text-gray-300 lg:pr-6">
                    To be the most trusted logistics partner in the region,
                    recognized for our innovation, integrity, and customer
                    success.
                  </p>
                </div>
              </div>
            </div>
            {/* card4 */}
            <div className="w-full  rounded-sm border border-white/20 bg-[#1b1810]/95 px-4 py-4 shadow-lg backdrop-blur-sm lg:px-5 lg:py-5">
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-white">
                  <ChartBarIncreasing size={18} className="text-yellow-500" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-manrope text-lg font-medium text-white">
                    Our Values
                  </h3>

                  {/* Yellow line */}
                  <div className=" mt-1 h-0.5 w-18 bg-yellow-400" />
                  <span className="flex gap-4 lg:gap-8">
                    <ol className="mt-4  font-manrope text-xs leading-4 text-yellow-300">
                      <li className="mb-2 list-disc">
                        <span className="text-gray-300">Integrity</span>
                      </li>
                      <li className="mb-2 list-disc">
                        <span className="text-gray-300">Customer Focus</span>
                      </li>
                      <li className="mb-2 list-disc">
                        <span className="text-gray-300">Excellence</span>
                      </li>
                    </ol>
                    <ol className="mt-4  font-manrope text-xs leading-4 text-yellow-300">
                      <li className="mb-2 list-disc">
                        <span className="text-gray-300">Teamwork</span>
                      </li>
                      <li className="mb-2 list-disc">
                        <span className="text-gray-300">Innovation</span>
                      </li>
                    </ol>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
