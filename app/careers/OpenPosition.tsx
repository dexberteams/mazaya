import Image from "next/image";
import SectionHeader2 from "../ui/SectionHeader2";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

const OpenPosition = () => {
  return (
    <section className="mt-2 px-4 lg:my-20 lg:px-8">
      <SectionHeader2
        title="Open"
        highlight="Positions"
        description="Explore our current job openings and find the right opportunity to grow your career with Mazaya Logistics."
      ></SectionHeader2>
      {/* card box */}
      <div className="mt-3 grid gap-3 lg:mt-8 lg:gap-8">
        {/* card-1 */}
        <div className="rounded-[7px] border border-[#6f5a22]/70 bg-[#161000]/35 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 p-3 flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex gap-2 lg:gap-6">
            <Image
              src="/career/icons/ci_user-01.svg"
              alt="user"
              width={100}
              height={100}
              className="p-2 lg:p-4 border border-[#352801] bg-black/30 rounded-lg w-12 h-12 lg:w-20 lg:h-20"
            />

            <div className="text-white">
              <p className="flex flex-col">
                <span className="text-[14px] lg:text-xl">
                  Operations Coordinator
                </span>
                <span className="text-yellow-400 mt-2 text-[12px] lg:text-base">
                  Operations Department
                </span>
              </p>

              <p className="flex justify-between lg:items-center gap-4 text-white/70 mt-2 text-[9px] lg:text-xs">
                <span className="flex gap-1 justify-center items-center">
                  <MapPin />
                  Riyadh, Saudi Arabia
                </span>

                <span className="flex gap-1 justify-center items-center">
                  <BriefcaseBusiness />
                  Full Time
                </span>

                <span className="flex gap-1 justify-center items-center">
                  <CalendarDays />
                  Posted 2 days ago
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-white bg-black/25 backdrop-blur-md text-xs border border-white/10 p-2 lg:p-3 rounded-sm mt-3 lg:mt-0">
              View Details
            </button>
          </div>
        </div>
        {/* card-2 */}
        <div className="rounded-[7px] border border-[#6f5a22]/70 bg-[#161000]/35 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 p-3 flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex gap-2 lg:gap-6">
            <Image
              src="/career/icons/reicon_profile.svg"
              alt="user"
              width={100}
              height={100}
              className="p-2 lg:p-4 border border-[#352801] bg-black/30 rounded-lg w-12 h-12 lg:w-20 lg:h-20"
            />

            <div className="text-white">
              <p className="flex flex-col">
                <span className="text-[14px] lg:text-xl">
                  Warehouse Supervisor
                </span>
                <span className="text-yellow-400 mt-2 text-[12px] lg:text-base">
                  Warehousing Department
                </span>
              </p>

              <p className="flex justify-between lg:items-center gap-4 text-white/70 mt-2 text-[9px] lg:text-xs">
                <span className="flex gap-1 justify-center items-center">
                  <MapPin />
                  Jeddah, Saudi Arabia
                </span>

                <span className="flex gap-1 justify-center items-center">
                  <BriefcaseBusiness />
                  Full Time
                </span>

                <span className="flex gap-1 justify-center items-center">
                  <CalendarDays />
                  Posted 3 days ago
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-white bg-black/25 backdrop-blur-md text-xs border border-white/10 p-2 lg:p-3 rounded-sm mt-3 lg:mt-0">
              View Details
            </button>
          </div>
        </div>
        {/* card-3 */}
        <div className="rounded-[7px] border border-[#6f5a22]/70 bg-[#161000]/35 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 p-3 flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex gap-2 lg:gap-6">
            <Image
              src="/career/icons/basil_user-outline.svg"
              alt="user"
              width={100}
              height={100}
              className="p-2 lg:p-4 border border-[#352801] bg-black/30 rounded-lg w-12 h-12 lg:w-20 lg:h-20"
            />

            <div className="text-white">
              <p className="flex flex-col">
                <span className="text-[14px] lg:text-xl">Fleet Manager</span>
                <span className="text-yellow-400 mt-2 text-[12px] lg:text-base">
                  Fleet Department
                </span>
              </p>

              <p className="flex justify-between lg:items-center gap-4 text-white/70 mt-2 text-[9px] lg:text-xs">
                <span className="flex gap-1 justify-center items-center">
                  <MapPin />
                  Riyadh, Saudi Arabia
                </span>

                <span className="flex gap-1 justify-center items-center">
                  <BriefcaseBusiness />
                  Full Time
                </span>

                <span className="flex gap-1 justify-center items-center">
                  <CalendarDays />
                  Posted 5 days ago
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-white bg-black/25 backdrop-blur-md text-xs border border-white/10 p-2 lg:p-3 rounded-sm mt-3 lg:mt-0">
              View Details
            </button>
          </div>
        </div>
        {/* card-4 */}
        <div className="rounded-[7px] border border-[#6f5a22]/70 bg-[#161000]/35 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 p-3 flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex gap-2 lg:gap-6">
            <Image
              src="/career/icons/gg_user.svg"
              alt="user"
              width={100}
              height={100}
              className="p-2 lg:p-4 border border-[#352801] bg-black/30 rounded-lg w-12 h-12 lg:w-20 lg:h-20"
            />

            <div className="text-white">
              <p className="flex flex-col">
                <span className="text-[14px] lg:text-xl">HR Specialist</span>
                <span className="text-yellow-400 mt-2 text-[12px] lg:text-base">
                  Human Resources
                </span>
              </p>

              <p className="flex justify-between lg:items-center gap-4 text-white/70 mt-2 text-[9px] lg:text-xs">
                <span className="flex gap-1 justify-center items-center">
                  <MapPin />
                  Riyadh, Saudi Arabia
                </span>

                <span className="flex gap-1 justify-center items-center">
                  <BriefcaseBusiness />
                  Full Time
                </span>

                <span className="flex gap-1 justify-center items-center">
                  <CalendarDays />
                  Posted 2 days ago
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-white bg-black/25 backdrop-blur-md text-xs border border-white/10 p-2 lg:p-3 rounded-sm mt-3 lg:mt-0">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenPosition;
