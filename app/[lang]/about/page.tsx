import { getDictionary } from "../dictionaries";
import AboutHero from "./AboutHero";
import CompanyOverview from "./CompanyOverview";
import Story from "../../home/Story";
import CoreValues from "./CoreValues";
import Teams from "../../home/Teams";
import Partner from "../../home/Partner";
import AboutCTA from "./AboutCTA";
import BusinessEcosystem from "./BusinessEcosystem";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="relative min-h-screen bg-[#0A0700] text-white selection:bg-[#f5b800] selection:text-black font-manrope pb-16 overflow-x-hidden">
      <AboutHero t={dict.about.hero} />
      <div id="overview">
        <CompanyOverview t={dict.about.companyOverview} />
      </div>
      <div id="business-ecosystem">
        <BusinessEcosystem t={dict.about.businessEcosystem} />
      </div>
      <div id="story">
        <Story t={dict.home.story} />
      </div>
      <div id="values">
        <CoreValues t={dict.about.coreValues} />
      </div>
      <div id="teams">
        <Teams t={dict.home.teams} />
      </div>
      <div id="partner">
        <Partner t={dict.home.partner} />
      </div>
      <div id="certifications">
        <AboutCTA lang={lang} t={dict.about.cta} />
      </div>
    </div>
  );
}
