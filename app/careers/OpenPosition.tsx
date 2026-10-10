"use client";
import Image from "next/image";
import SectionHeader2 from "../ui/SectionHeader2";
import {
  BriefcaseBusiness,
  CalendarDays,
  Clock,
  X,
  MapPin,
} from "lucide-react";
import { useState } from "react";

const OpenPosition = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section id="open-positions" className="mt-2 px-4 lg:my-20 lg:px-8">
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
            <button
              onClick={() => setIsPopupOpen(true)}
              className="mt-3 rounded-sm border border-white/10 bg-black/25 p-2 text-xs text-white backdrop-blur-md transition-colors hover:border-yellow-400/50 hover:text-yellow-400 lg:mt-0 lg:p-3"
            >
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
            <button
              onClick={() => setIsPopupOpen(true)}
              className="mt-3 rounded-sm border border-white/10 bg-black/25 p-2 text-xs text-white backdrop-blur-md transition-colors hover:border-yellow-400/50 hover:text-yellow-400 lg:mt-0 lg:p-3"
            >
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
            <button
              onClick={() => setIsPopupOpen(true)}
              className="mt-3 rounded-sm border border-white/10 bg-black/25 p-2 text-xs text-white backdrop-blur-md transition-colors hover:border-yellow-400/50 hover:text-yellow-400 lg:mt-0 lg:p-3"
            >
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
            <button
              onClick={() => setIsPopupOpen(true)}
              className="mt-3 rounded-sm border border-white/10 bg-black/25 p-2 text-xs text-white backdrop-blur-md transition-colors hover:border-yellow-400/50 hover:text-yellow-400 lg:mt-0 lg:p-3"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Job Details Coming Soon Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#6f5a22]/70 bg-[#161000] p-6 text-center shadow-[0_0_40px_rgba(255,187,0,0.12)] sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsPopupOpen(false)}
              aria-label="Close popup"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={17} />
            </button>

            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#FFBB00]/30 bg-[#FFBB00]/10 text-[#FFBB00]">
              <Clock size={27} />
            </div>

            {/* Content */}
            <h3
              id="coming-soon-title"
              className="mt-5 text-xl font-bold text-white sm:text-2xl"
            >
              Coming Soon!
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/65">
              We are preparing more details about this job opportunity. Please
              check back soon for updates. Thank you for your interest in
              joining Mazaya Logistics.
            </p>

            {/* Status */}
            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-[#FFBB00]/20 bg-[#FFBB00]/[0.07] px-3 py-1.5 text-xs font-medium text-[#FFBB00]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FFBB00]" />
              Job details coming soon
            </div>

            {/* Close Action */}
            <button
              type="button"
              onClick={() => setIsPopupOpen(false)}
              className="mt-6 w-full rounded-lg bg-[#FFBB00] px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OpenPosition;
