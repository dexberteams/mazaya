import FleetCoverage from "./FleetCoverage";
import FleetFeatures from "./FleetFeatures";
import FleetTop from "./FleetTop";
import FleetTypes from "./FleetTypes";
import OurFleetCoverage from "./OurFlletCoverage";
import Quote from "./Quote";
import WhyChooseFleet from "./WhyChooseFleet";

const Fleet = () => {
  return (
    <div className="bg-[#0A0700] font-manrope">
      <FleetTop></FleetTop>
      <FleetFeatures></FleetFeatures>
      <FleetTypes></FleetTypes>
      <FleetCoverage></FleetCoverage>
      <OurFleetCoverage></OurFleetCoverage>
      <WhyChooseFleet></WhyChooseFleet>
      <Quote></Quote>
    </div>
  );
};

export default Fleet;
