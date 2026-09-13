import AboutHero from "./AboutHero";
import CompanyOverview from "./CompanyOverview";
import Story from "../home/Story";
import CoreValues from "./CoreValues";
import Teams from "../home/Teams";
import Partner from "../home/Partner";
import AboutCTA from "./AboutCTA";

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#070502] text-white selection:bg-[#f5b800] selection:text-black font-sans pb-16 overflow-x-hidden">
      {/* ── SECTION 1: HERO SECTION ── */}
      <AboutHero />

      {/* ── SECTION 2: COMPANY OVERVIEW ── */}
      <div id="overview">
        <CompanyOverview />
      </div>

      {/* ── SECTION 3: OUR STORY & VISION ── */}
      <div id="story">
        <Story />
      </div>

      {/* ── SECTION 4: CORE VALUES ── */}
      <div id="values">
        <CoreValues />
      </div>

      {/* ── SECTION 5: LEADERSHIP TEAM ── */}
      <div id="teams">
        <Teams />
      </div>

      {/* ── SECTION 6: PARTNERS ── */}
      <div id="partner">
        <Partner />
      </div>

      {/* ── SECTION 7: CALL TO ACTION / CERTIFICATIONS ── */}
      <div id="certifications">
        <AboutCTA />
      </div>
    </div>
  );
};

export default About;
