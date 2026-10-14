import AdvantagesTop from "./AdvantagesTop";
import Faq from "./Faq";
import LatestNews from "./LatestNews";
import ProcessTimeline from "./ProcessTimeline";
import Quote from "./Quote";
import { getDictionary } from "../dictionaries";

export const metadata = {
  title: "Advantages | Mazaya Fast Logistics",
  description:
    "Discover the Mazaya Masanda Advantage: professional teams, modern fleet, and scalable supply chain solutions.",
};

const Advantages = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="bg-[#0A0700] font-manrope">
      <AdvantagesTop heroT={dict.advantages?.hero} />
      <LatestNews />
      <ProcessTimeline />
      <Faq />
      <Quote t={dict.advantages?.cta} lang={lang} />
    </section>
  );
};

export default Advantages;
