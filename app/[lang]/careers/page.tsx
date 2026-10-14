import { getDictionary } from "../dictionaries";
import ApplyOnline from "./ApplyOnline";
import CareerTop from "./CareerTop";
import WhyWork from "./WhyWork";

export default async function Careers({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-[#0A0700] font-manrope">
      <CareerTop
        heroT={dict.careers.hero}
        openPositionsT={dict.careers.openPositions}
      />
      <WhyWork t={dict.careers.whyWork} />
      <ApplyOnline t={dict.careers.apply} />
    </div>
  );
}
