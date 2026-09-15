import Hero from "./Hero";
import OpenPosition from "./OpenPosition";

const CareerTop = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0
          h-[65%] sm:h-[68%] lg:h-[70%] lg:hidden
          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: "url('/career/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0
          h-[65%] sm:h-[68%] lg:h-[70%]
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_25%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.7)_75%,rgba(0,0,0,0.95)_100%)]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <OpenPosition />
      </div>
    </div>
  );
};

export default CareerTop;
