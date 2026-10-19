import FleetCoverage from "./FleetCoverage";
import FleetFeatures from "./FleetFeatures";
import FleetTop from "./FleetTop";
import FleetTypes from "./FleetTypes";
import Quote from "./Quote";
import WhyChooseFleet from "./WhyChooseFleet";
import { getDictionary } from "../dictionaries";

export const metadata = {
  title: "Fleet | Mazaya Fast Logistics",
  description:
    "Explore Mazaya Masanda Logistics' modern, heavy-duty and temperature-controlled fleet ready for all your transportation needs.",
};

const Fleet = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const isAr = lang === "ar";

  return (
    <div className="bg-[#0A0700] font-manrope">
      <FleetTop
        heroT={dict.fleet?.hero}
        overviewT={dict.fleet.overview}
        isAr={isAr}
      />
      <FleetFeatures translations={dict.fleet.features} isAr={lang === "ar"} />
      <FleetTypes translations={dict.fleet.types} isAr={lang === "ar"} />
      <FleetCoverage translations={dict.fleet.fleetCoverage} isAr={isAr} />
      <WhyChooseFleet translations={dict.fleet.whyChoose} isAr={isAr} />
      <Quote t={dict.fleet?.cta} lang={lang} />
    </div>
  );
};

export default Fleet;
