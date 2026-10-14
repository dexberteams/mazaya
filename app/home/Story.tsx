"use client";

import SectionLabel from "../ui/SectionLabel";
import Image from "next/image";
import { BarChart3, ChartBarIncreasing, Goal, Handshake } from "lucide-react";
import { usePathname } from "next/navigation";

export type StoryT = {
  sectionLabel: string;
  heading: string;
  headingHighlight: string;
  badge: string;
  subheading: string;
  description: string;
  storyCardTitle: string;
  storyCardDesc: string;
  missionCardTitle: string;
  missionCardDesc: string;
  visionCardTitle: string;
  visionCardDesc: string;
  valuesCardTitle: string;
  values: {
    integrity: string;
    customerFocus: string;
    excellence: string;
    teamwork: string;
    innovation: string;
  };
};

const Story = ({ t }: { t?: StoryT }) => {
  const pathname = usePathname() || "/";
  const stripped = pathname.replace(/^\/(en|ar)/, "") || "/";
  const isLandingPage = stripped === "/" || stripped === "";

  return (
    <section className="w-full my-10 lg:my-20 font-manrope">
      <div className="px-4 sm:px-6 lg:px-8">
        {isLandingPage && (
          <SectionLabel text={t?.sectionLabel || "about us"} />
        )}
        <h1 className="mt-4 font-manrope text-2xl font-bold text-white lg:text-4xl">
          {t?.heading || "Our Story"}{" "}
          <span className="text-yellow-200">
            {t?.headingHighlight || "& Vision"}
          </span>
        </h1>

        {/* about box */}
        <div className="mt-6 flex flex-col gap-4 md:gap-8 lg:mt-16 lg:flex-row lg:gap-12">
          {/* Image - Mobile: full width, Desktop: 1/3 */}
          <div className="relative h-56 w-full lg:h-120 lg:w-1/3">
            <Image
              src="/about/story.png"
              alt="About Us"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="rounded-lg object-cover"
            />
            <span className="absolute -bottom-6 lg:-bottom-8 z-30 left-12 lg:left-16 w-2/3 mx-auto bg-[#150B00BF] border-2 border-white p-2 lg:p-4 text-white text-[10px] lg:text-[12px] flex justify-center items-center gap-2 rounded-lg text-center whitespace-pre-line">
              <Handshake className="text-yellow-400 shrink-0" />
              {t?.badge || "Driven by Commitment,\nDelivered with Excellence"}
            </span>
          </div>

          {/* Content Box - Mobile: full width, Desktop: 2/3 */}
          <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
            <h2 className="font-manrope text-xl font-semibold text-white lg:text-3xl">
              {t?.subheading || "Building Connections. Delivering Excellence."}
            </h2>

            <p className="mt-2 text-[12px] lg:text-[16px] font-inter text-gray-300 lg:mt-4 mb-4">
              {t?.description ||
                "Mazaya Masanda Logistics is a leading logistics and supply chain solutions provider in Saudi Arabia and beyond. We are committed to delivering reliable, efficient, and innovative logistics services that empower businesses to grow and succeed."}
            </p>

            <div className="mt-2 lg:mt-4 grid grid-cols-2 gap-3 lg:gap-5 lg:grid-cols-2">
              {/* card1 */}
              <div className="w-full rounded-sm border border-white/20 bg-[#1b1810]/95 p-2 shadow-lg backdrop-blur-sm lg:px-5 lg:py-5">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex h-6 w-6 lg:h-8 lg:w-8 shrink-0 items-center justify-center rounded-sm bg-white">
                    <BarChart3 size={18} className="text-yellow-500" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-manrope text-base lg:text-lg font-medium text-white">
                      {t?.storyCardTitle || "Our Story"}
                    </h3>

                    {/* Yellow line */}
                    <div className="mt-1 h-0.5 w-18 bg-yellow-400" />

                    <p className="mt-4 font-manrope text-[10px] lg:text-xs lg:leading-6 text-gray-300 lg:pe-8">
                      {t?.storyCardDesc ||
                        "Founded with a vision to transform logistics, Mazaya Masanda Logistics has grown into a trusted partner for businesses."}
                    </p>
                  </div>
                </div>
              </div>

              {/* card2 */}
              <div className="w-full rounded-sm border border-white/20 bg-[#1b1810]/95 p-2 shadow-lg backdrop-blur-sm lg:px-5 lg:py-5">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex h-6 w-6 lg:h-8 lg:w-8 shrink-0 items-center justify-center rounded-sm bg-white">
                    <Handshake size={18} className="text-yellow-500" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-manrope text-base lg:text-lg font-medium text-white">
                      {t?.missionCardTitle || "Our Mission"}
                    </h3>

                    {/* Yellow line */}
                    <div className="mt-1 h-0.5 w-18 bg-yellow-400" />

                    <p className="mt-4 font-manrope text-[10px] lg:text-xs lg:leading-6 text-gray-300 lg:pe-12">
                      {t?.missionCardDesc ||
                        "To deliver smart, reliable, and cost-effective logistics solutions that create value for our clients and communities."}
                    </p>
                  </div>
                </div>
              </div>

              {/* card3 */}
              <div className="w-full rounded-sm border border-white/20 bg-[#1b1810]/95 p-2 shadow-lg backdrop-blur-sm lg:px-5 lg:py-5">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex h-6 w-6 lg:h-8 lg:w-8 shrink-0 items-center justify-center rounded-sm bg-white">
                    <Goal size={18} className="text-yellow-500" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-manrope text-base lg:text-lg font-medium text-white">
                      {t?.visionCardTitle || "Our Vision"}
                    </h3>

                    {/* Yellow line */}
                    <div className="mt-1 h-0.5 w-18 bg-yellow-400" />

                    <p className="mt-4 font-manrope text-[10px] lg:text-xs lg:leading-6 text-gray-300 lg:pe-6">
                      {t?.visionCardDesc ||
                        "To be the most trusted logistics partner in the region, recognized for our innovation, integrity, and customer success."}
                    </p>
                  </div>
                </div>
              </div>

              {/* card4 */}
              <div className="w-full rounded-sm border border-white/20 bg-[#1b1810]/95 px-4 py-4 shadow-lg backdrop-blur-sm lg:px-5 lg:py-5">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-white">
                    <ChartBarIncreasing size={18} className="text-yellow-500" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-manrope text-base lg:text-lg font-medium text-white">
                      {t?.valuesCardTitle || "Our Values"}
                    </h3>

                    {/* Yellow line */}
                    <div className="mt-1 h-0.5 w-18 bg-yellow-400" />
                    <span className="flex flex-col lg:flex-row lg:gap-8">
                      <ol className="mt-4 font-manrope text-[10px] lg:text-xs lg:leading-4 text-yellow-300">
                        <li className="mb-1 lg:mb-2 list-disc">
                          <span className="text-gray-300">
                            {t?.values.integrity || "Integrity"}
                          </span>
                        </li>
                        <li className="mb-1 lg:mb-2 list-disc">
                          <span className="text-gray-300">
                            {t?.values.customerFocus || "Customer Focus"}
                          </span>
                        </li>
                        <li className="mb-1 lg:mb-2 list-disc">
                          <span className="text-gray-300">
                            {t?.values.excellence || "Excellence"}
                          </span>
                        </li>
                      </ol>
                      <ol className="lg:mt-4 font-manrope text-[10px] lg:text-xs lg:leading-4 text-yellow-300">
                        <li className="mb-1 lg:mb-2 list-disc">
                          <span className="text-gray-300">
                            {t?.values.teamwork || "Teamwork"}
                          </span>
                        </li>
                        <li className="list-disc">
                          <span className="text-gray-300">
                            {t?.values.innovation || "Innovation"}
                          </span>
                        </li>
                      </ol>
                    </span>
                  </div>
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
