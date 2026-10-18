"use client";

import Image from "next/image";

export interface WareHouseTypesT {
  heading: string;
  headingHighlight: string;
  cards: {
    title: string;
    description: string;
  }[];
}

interface WareHouseTypesProps {
  t?: WareHouseTypesT;
  lang?: string;
}

const warehouseImages = [
  "/warehouse/general.png",
  "/warehouse/temparature.png",
  "/warehouse/bounded.png",
  "/warehouse/ecommarce.png",
];

const WareHouseTypes = ({ t, lang = "en" }: WareHouseTypesProps) => {
  if (!t) return null;

  const currentLang = lang.toLowerCase().split("-")[0];
  const isArabic = currentLang === "ar";

  return (
    <section
      lang={currentLang}
      dir={isArabic ? "rtl" : "ltr"}
      className="my-10 overflow-hidden px-4 lg:my-20 lg:px-8"
    >
      {/* Section heading */}
      <h2 className="font-manrope text-[20px] font-bold text-white lg:text-4xl">
        {t.heading}{" "}
        <span className="text-yellow-200">{t.headingHighlight}</span>
      </h2>

      <div
        className={`mt-4 h-0.5 w-24 bg-yellow-400 lg:mt-8 lg:w-32 ${
          isArabic ? "mr-0 ml-auto" : ""
        }`}
      />

      {/* Warehouse cards */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-8">
        {t.cards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="group relative w-full overflow-hidden rounded-lg"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden lg:h-52">
              <Image
                src={warehouseImages[index]}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card content */}
            <div className="relative h-36 w-full space-y-2 overflow-hidden border-2 border-amber-950 bg-[#161000] p-4 lg:h-40 lg:p-6">
              <h3 className="text-base font-semibold text-white">
                {card.title}
              </h3>

              <p className="text-sm leading-6 text-gray-400">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WareHouseTypes;
