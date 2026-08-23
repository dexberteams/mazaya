"use client";

import Image from "next/image";
import { useState } from "react";
import SectionLabel from "../ui/SectionLabel";

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Al-Qahtani",
    role: "Founder & CEO",
    image: "/home/team/team1.png",
    description:
      "Leading the company's vision, strategic growth, and commitment to delivering world-class logistics solutions while building long-term partnerships with clients.",
  },
  {
    id: 2,
    name: "Khalid Al-Harbi",
    role: "General Supervisor",
    image: "/home/team/team1.png",
    description:
      "Overseeing company-wide operations, ensuring every team works together efficiently and maintaining high service quality and operational excellence.",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    role: "Operations Manager",
    image: "/home/team/team1.png",
    description:
      "Managing daily logistics operations, optimizing workflows, and ensuring shipments are delivered efficiently and on schedule.",
  },
  {
    id: 4,
    name: "Yousef Khan",
    role: "Assistant Operations Manager",
    image: "/home/team/team1.png",
    description:
      "Supporting operational planning, coordinating teams, and maintaining smooth day-to-day logistics activities across multiple service locations.",
  },
  {
    id: 5,
    name: "Saeed Al-Mutairi",
    role: "Fleet & Maintenance Supervisor",
    image: "/home/team/team1.png",
    description:
      "Responsible for fleet performance, vehicle maintenance, safety compliance, and ensuring maximum operational reliability across all transportation assets.",
  },
];

const Teams = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="my-10 p-4 font-manrope lg:my-20 lg:p-8">
      <SectionLabel text="about us" />

      <h1 className="mt-4 text-2xl font-bold text-white lg:text-4xl">
        Meet the <span className="text-yellow-400">Leadership Team</span>
      </h1>

      {/* Team Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {teamMembers.map((member) => {
          const isActive = activeId === member.id;

          return (
            <div
              key={member.id}
              onTouchStart={() => setActiveId(member.id)}
              onTouchEnd={() => setActiveId(null)}
              onTouchCancel={() => setActiveId(null)}
              className={`group relative h-95 overflow-hidden border bg-[#111] transition-all duration-500 lg:h-125 ${
                isActive
                  ? "scale-[0.98] border-yellow-400/80 shadow-[0_0_25px_rgba(250,204,21,0.25)]"
                  : "border-yellow-500/40"
              }`}
            >
              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 20vw"
                className={`object-cover object-top transition-transform duration-700 ease-out ${
                  isActive ? "scale-105" : "group-hover:scale-105"
                }`}
              />

              {/* Dark Gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-b from-transparent via-black/5 to-black transition-all duration-500 ${
                  isActive ? "via-black/20" : ""
                }`}
              />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 text-center  bg-linear-to-t from-black via-black/70 to-transparent">
                <h3 className="text-lg font-semibold text-white transition-transform duration-500 lg:text-xl">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-yellow-400">
                  {member.role}
                </p>

                {/* Line */}
                <div
                  className={`mx-auto mt-4 h-0.5 bg-white transition-all duration-500 ${
                    isActive ? "w-20 bg-yellow-400" : "w-12 group-hover:w-20"
                  }`}
                />

                <p className="mt-4 text-[10px] leading-relaxed text-white lg:text-xs">
                  {member.description}
                </p>
              </div>

              {/* Hover / Touch Border */}
              <div
                className={`absolute inset-0 border transition-all duration-500 ${
                  isActive
                    ? "border-yellow-400/70"
                    : "border-transparent group-hover:border-yellow-400/70"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
