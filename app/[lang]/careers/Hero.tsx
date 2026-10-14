"use client";

import Image from "next/image";
import SectionLabel from "../../ui/SectionLabel";

type HeroProps = {
  t?: {
    sectionLabel?: string;
    heading?: string;
    subHeading?: string;
    headingHighlight?: string;
    subtitle?: string;
    teamMembers?: string;
    departments?: string;
  };
};

const Hero = ({ t }: HeroProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative h-100 w-full sm:h-120 lg:h-150">
        <Image
          src="/career/hero.jpg"
          alt="Projects"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
        />

        {/* Gradient Overlay (LTR: dark left, fade right) */}
        <div
          className="
            hidden
            lg:absolute lg:inset-0 lg:block rtl:lg:hidden
            lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.82)_28%,rgba(0,0,0,0.42)_60%,rgba(0,0,0,0.05)_85%,transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_25%,transparent_72%,rgba(0,0,0,0.45)_100%)]
          "
        />

        {/* Gradient Overlay (RTL: dark right, fade left) */}
        <div
          className="
            hidden
            lg:absolute lg:inset-0 rtl:lg:block
            lg:bg-[linear-gradient(to_left,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.82)_28%,rgba(0,0,0,0.42)_60%,rgba(0,0,0,0.05)_85%,transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_25%,transparent_72%,rgba(0,0,0,0.45)_100%)]
          "
        />

        {/* Content */}
        <div
          className="
            relative z-10 flex h-full w-full flex-col items-start
            justify-center font-manrope text-white
            px-4 pt-5 sm:px-8 sm:pt-12
            lg:w-1/2 lg:gap-2 lg:px-16 lg:pt-10
          "
        >
          <SectionLabel
            text={t?.sectionLabel || "careers"}
            className="bg-transparent lg:ml-4 rtl:lg:mr-4 rtl:lg:ml-0"
          />

          <h1
            className="
              mt-3 w-11/12 text-3xl font-bold leading-tight
              sm:text-4xl
              lg:mt-0 lg:p-4 lg:text-5xl
            "
          >
            <span className="block">{t?.heading || "Build Your Future"}</span>
            <span className="block">
              {t?.subHeading ? <span>{t.subHeading} </span> : <span>With </span>}
              <span className="text-yellow-200">
                {t?.headingHighlight || "Mazaya Logistics"}
              </span>
            </span>
          </h1>

          <span className="my-3 block h-0.5 w-24 bg-yellow-400 lg:ml-4 rtl:lg:mr-4 rtl:lg:ml-0" />

          <p
            className="
              mt-2 max-w-xl p-1 text-xs leading-5
              sm:text-base sm:leading-6
              lg:w-4/5 lg:p-4 font-manrope text-gray-300
            "
          >
            {t?.subtitle ||
              "Join a team that's moving the world forward. Explore opportunities, grow your skills, and make an impact with us."}
          </p>

          <div className="mt-4 flex gap-5 lg:ml-4 rtl:lg:mr-4 rtl:lg:ml-0">
            <div className="flex items-center justify-center gap-2 lg:gap-4">
              <Image
                src="/career/icons/group.svg"
                alt="user"
                width={100}
                height={100}
                className="h-6 w-6 lg:h-10 lg:w-10"
              />

              <p className="flex flex-col">
                <span className="text-[14px] lg:text-[16px]">500+</span>
                <span className="text-xs text-gray-400">
                  {t?.teamMembers || "Team Members"}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 lg:gap-4">
              <Image
                src="/career/icons/building.svg"
                alt="building"
                width={100}
                height={100}
                className="h-6 w-6 lg:h-10 lg:w-10"
              />

              <p className="flex flex-col">
                <span className="text-[14px] lg:text-[16px]">10+</span>
                <span className="text-xs text-gray-400">
                  {t?.departments || "Departments"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
