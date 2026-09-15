import FleetOverview from "./FleetOverview";
import Hero from "./Hero";

const FleetTop = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Mobile Hero Background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{
          backgroundImage: "url('/fleet/fleet-hero.png')",
          height: "calc(100vh + 300px)",
        }}
      />

      {/* Mobile Dark Overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[calc(100vh+300px)] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.40)_35%,rgba(0,0,0,0.65)_75%,#0A0700_100%)] lg:hidden" />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <FleetOverview></FleetOverview>
      </div>
    </div>
  );
};

export default FleetTop;
