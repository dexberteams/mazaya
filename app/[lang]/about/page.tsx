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
      {/* ── SECTION 1: HERO SECTION ── */}
      <AboutHero t={dict.about.hero} />

      {/* ── SECTION 2: COMPANY OVERVIEW ── */}
      <div id="overview">
        <CompanyOverview t={dict.about.companyOverview} />
      </div>

      {/* SECTION 3: BUSINESS ECOSYSTEM */}
      <div id="business-ecosystem">
        <BusinessEcosystem t={dict.about.businessEcosystem} />
      </div>

      {/* ── SECTION 4: OUR STORY & VISION ── */}
      <div id="story">
        <Story t={dict.home.story} />
      </div>

      {/* ── SECTION 5: CORE VALUES ── */}
      <div id="values">
        <CoreValues t={dict.about.coreValues} />
      </div>

      {/* ── SECTION 6: LEADERSHIP TEAM ── */}
      <div id="teams">
        <Teams t={dict.home.teams} />
      </div>

      {/* ── SECTION 7: PARTNERS ── */}
      <div id="partner">
        <Partner t={dict.home.partner} />
      </div>

      {/* ── SECTION 8: CALL TO ACTION / CERTIFICATIONS ── */}
      <div id="certifications">
        <AboutCTA lang={lang} t={dict.about.cta} />
      </div>
    </div>
  );
}
