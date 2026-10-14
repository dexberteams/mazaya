import { getDictionary } from "../dictionaries";
import QuickSolution from "../../home/QuickSolution";
import WhyChoose from "../../home/WhyChoose";
import ServiceCta from "./ServiceCta";
import ServiceHero from "./ServiceHero";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-[#0A0700] font-manrope">
      {/* ── SECTION 1: HERO SECTION ── */}
      <ServiceHero t={dict.services.hero} />

      <QuickSolution t={dict.home.quickSolution} />

      {/* Why choose us section */}
      <WhyChoose t={dict.home.whyChoose} />

      <ServiceCta lang={lang} t={dict.services.cta} />
    </div>
  );
}
