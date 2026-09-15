import { MoveRight } from "lucide-react";
import Image from "next/image";

const FleetOverview = () => {
  return (
    <section className="pt-4 overflow-hidden px-4 lg:my-20 lg:px-8 flex flex-col lg:flex-row gap-2">
      <div className="lg:w-[40%]">
        <h1 className="font-manrope text-[20px] font-bold text-white lg:text-4xl">
          Our
          <span className="text-yellow-200">Fleet Overview</span>
        </h1>
        {/* Yellow line */}
        <div className="mt-4 h-px w-16 bg-[#FFBB00] sm:w-20" />
        <p className="mt-4 font-manrope text-xs text-white/70 lg:text-base w-full lg:w-2/3">
          We operate a diverse fleet of vehicles to handle all types of cargo
          and meet the unique needs of our clients across various industries.
        </p>
        <button className="mt-3 lg:mt-10 lg:w-auto rounded-sm border border-amber-300/20 bg-yellow-400 px-3 py-1 lg:px-6 lg:py-2 lg:font-semibold text-black shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 flex justify-center items-center gap-1">
          Get a Quote <MoveRight></MoveRight>
        </button>
      </div>
      {/* card box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
        {/* card-1 */}
        <div className="overflow-hidden rounded-sm border border-white/10 bg-[#151000]/80 p-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          {/* Image */}
          <div className="relative h-48 lg:h-32 w-full overflow-hidden rounded-sm">
            <Image
              src="/fleet/fleet-bus.png"
              alt="fleet"
              fill
              sizes="100vw"
              className="animate-[zoom_4s_ease-in-out_infinite] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-2 p-1 pt-3 text-white">
            <h3 className="text-[16px] font-semibold">Heavy-Duty Trucks</h3>

            <p className="text-[12px] text-white/70">
              Ideal for long-haul and large-volume freight transportation.
            </p>

            <p className="text-[12px] text-yellow-500">95+ Vehicles</p>
          </div>
        </div>
        {/* card-2 */}
        <div className="overflow-hidden rounded-sm border border-white/10 bg-[#151000]/80 p-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          {/* Image */}
          <div className="relative h-48 lg:h-32 w-full overflow-hidden rounded-sm">
            <Image
              src="/fleet/medium-truck.jpg"
              alt="fleet"
              fill
              sizes="100vw"
              quality={100}
              className="animate-[zoom_4s_ease-in-out_infinite] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-2 p-1 pt-3 text-white">
            <h3 className="text-[16px] font-semibold">Medium Trucks</h3>

            <p className="text-[12px] text-white/70">
              Perfect regional deliveries and medium-sized cargo transport.
            </p>

            <p className="text-[12px] text-yellow-500">70+ Vehicles</p>
          </div>
        </div>
        {/* card-3 */}
        <div className="overflow-hidden rounded-sm border border-white/10 bg-[#151000]/80 p-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          {/* Image */}
          <div className="relative h-48 lg:h-32 w-full overflow-hidden rounded-sm">
            <Image
              src="/fleet/lighter-truck.jpg"
              alt="fleet"
              fill
              sizes="100vw"
              className="animate-[zoom_4s_ease-in-out_infinite] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-2 p-1 pt-3 text-white">
            <h3 className="text-[16px] font-semibold">Light Trucks</h3>

            <p className="text-[12px] text-white/70">
              Best for small shipments and intra-city distribution needs.
            </p>

            <p className="text-[12px] text-yellow-500">60+ Vehicles</p>
          </div>
        </div>
        {/* card-4 */}
        <div className="overflow-hidden rounded-sm border border-white/10 bg-[#151000]/80 p-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          {/* Image */}
          <div className="relative h-48 lg:h-32 w-full overflow-hidden rounded-sm">
            <Image
              src="/fleet/pickup.avif"
              alt="fleet"
              fill
              sizes="100vw"
              className="animate-[zoom_4s_ease-in-out_infinite] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-2 p-1 pt-3 text-white">
            <h3 className="text-[16px] font-semibold">Vans & Pickups</h3>

            <p className="text-[12px] text-white/70">
              Flexible and reliable for last-mile delivery and urgent shipments.
            </p>

            <p className="text-[12px] text-yellow-500">25+ Vehicles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetOverview;
