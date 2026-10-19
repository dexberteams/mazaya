import Image from "next/image";

interface CoverageTranslations {
  heading: string;
  saudiArabia: string;
  nationwideDelivery: string;
  citiesCovered: string;
  gccCountries: string;
  crossBorderLogistics: string;
  regionalDistribution: string;
  worldwide: string;
  globalFreight: string;
  internationalShipping: string;
  mapAlt: string;
}

interface LogisticsCoverageProps {
  translations: CoverageTranslations;
  isAr: boolean;
}

export default function LogisticsCoverage({
  translations: t,
  isAr,
}: LogisticsCoverageProps) {
  const cards = [
    {
      title: t.saudiArabia,
      icon: (
        <Image
          src="/getQuote/flag-saudi-arabia.png"
          alt="Saudi Arabia Flag"
          width={24}
          height={24}
        />
      ),
      color: "bg-emerald-500",
      items: [t.nationwideDelivery, t.citiesCovered],
    },
    {
      title: t.gccCountries,
      icon: (
        <span role="img" aria-label="Globe" className="text-xl">
          🌍
        </span>
      ),
      color: "bg-sky-400",
      items: [t.crossBorderLogistics, t.regionalDistribution],
    },
    {
      title: t.worldwide,
      icon: (
        <span role="img" aria-label="Airplane" className="text-xl">
          ✈️
        </span>
      ),
      color: "bg-fuchsia-400",
      items: [t.globalFreight, t.internationalShipping],
    },
  ];

  return (
    <section className="w-full" dir={isAr ? "rtl" : "ltr"}>
      <div className="relative overflow-hidden rounded-2xl border border-[#38280f] bg-[#312203] p-6 shadow-2xl shadow-black/80 sm:p-8 lg:p-12">
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#f5b800]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#f5b800]/5 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.heading}
            </h2>

            <div className="mb-8 mt-3 h-1 w-16 rounded-full bg-[#f5b800]" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col rounded-xl border border-[#2e210b] bg-[#090602]/90 p-4 transition-colors hover:border-[#f5b800]/40"
                >
                  <div className="mb-3 flex items-center gap-2">
                    {card.icon}

                    <h3 className="text-sm font-bold text-[#f5b800]">
                      {card.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 text-xs text-[#c4bcaf]">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${card.color}`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Coverage Map */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-xl sm:aspect-[16/9]">
              <Image
                src="/getQuote/logisticsCoverage.png"
                alt={t.mapAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
