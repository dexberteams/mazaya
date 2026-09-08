"use client";
import Image from "next/image";
import { useState } from "react";
import SectionLabel from "../ui/SectionLabel";
const teamMembers = [
  {
    id: 1,
    name: "Eng. Shafi Aldawsari",
    role: "Founder & CEO",
    image: "/home/team/team5.jpeg",
    description:
      "Leads Mazaya Fast’s strategic vision and business development, with a focus on building strong partnerships and expanding the company’s logistics solutions. He is committed to strengthening Mazaya’s position as a trusted logistics partner through sustainable growth, operational efficiency, and services designed to meet evolving market needs.",
  },
  {
    id: 2,
    name: "Rashed Abdelbari",
    role: "General Supervisor",
    image: "/home/team/team1.jpeg",
    description:
      "Oversees Mazaya Fast’s overall performance, promoting effective coordination across departments and ensuring the execution of operational plans and objectives. His focus is on enhancing efficiency, strengthening quality and operational discipline, and supporting the company’s stability and continued growth.",
  },
  {
    id: 3,
    name: "Othman Ali",
    role: "Operations & Supply Chain Manager",
    image: "/home/team/team2.jpeg",
    description:
      "Leads operations and supply chain activities at Mazaya Fast, overseeing the execution of logistics projects and the management of operational resources and teams. His focus is on improving operational efficiency, optimizing performance, and ensuring the delivery of reliable logistics solutions aligned with client requirements.",
  },
  {
    id: 4,
    name: "Amjad Ahmed",
    role: "Assistant Operations Manager",
    image: "/home/team/team3.jpeg",
    description:
      "Supports the management of daily operations, the execution of operational plans, and coordination across field teams. His focus is on execution efficiency, performance monitoring, and resolving operational challenges to ensure service continuity and consistently meet client requirements.",
  },
  {
    id: 5,
    name: "Alfas Ahmed",
    role: "Fleet & Maintenance Supervisor",
    image: "/home/team/team4.jpeg",
    description:
      "Leads fleet movement and maintenance operations, overseeing vehicle readiness and fleet availability. His focus is on coordinating vehicle movement, preventive maintenance, and minimizing downtime to ensure fleet readiness and support logistics operations with efficiency and reliability.",
  },
];
const Teams = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };
  return (
    <div className="my-10 p-4 font-manrope lg:my-20 lg:p-8">
      {" "}
      <SectionLabel text="about us" />{" "}
      <h1 className="mt-4 text-2xl font-bold text-white lg:text-4xl">
        {" "}
        Meet the <span className="text-yellow-400">Leadership Team</span>{" "}
      </h1>{" "}
      {/* ========================================================= MOBILE CAROUSEL ========================================================= */}{" "}
      <div className="mt-8 lg:hidden">
        {" "}
        {/* Slider */}{" "}
        <div className="overflow-hidden rounded-lg">
          {" "}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {" "}
            {teamMembers.map((member) => {
              const isActive = activeId === member.id;
              return (
                <div
                  key={member.id}
                  className="w-full shrink-0 px-0.5"
                  onTouchStart={() => setActiveId(member.id)}
                  onTouchEnd={() => setActiveId(null)}
                  onTouchCancel={() => setActiveId(null)}
                >
                  {" "}
                  <div
                    className={`group relative h-[500px] w-full overflow-hidden rounded-lg border bg-[#111] transition-all duration-500 ${isActive ? "scale-[0.98] border-yellow-400/80 shadow-[0_0_25px_rgba(250,204,21,0.25)]" : "border-yellow-500/40"}`}
                  >
                    {" "}
                    {/* Image */}{" "}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="100vw"
                      className={`rounded-lg object-cover object-top transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""}`}
                    />{" "}
                    {/* Dark Gradient */}{" "}
                    <div
                      className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black transition-all duration-500 ${isActive ? "via-black/20" : ""}`}
                    />{" "}
                    {/* Content */}{" "}
                    <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-5 pt-24 text-center">
                      {" "}
                      <h3 className="text-lg font-semibold text-white">
                        {" "}
                        {member.name}{" "}
                      </h3>{" "}
                      <p className="mt-1 text-xs font-medium text-yellow-400">
                        {" "}
                        {member.role}{" "}
                      </p>{" "}
                      {/* Line */}{" "}
                      <div
                        className={`mx-auto mt-4 h-0.5 bg-yellow-400 transition-all duration-500 ${isActive ? "w-20" : "w-12"}`}
                      />{" "}
                      <p className="mt-4 text-[10px] leading-relaxed text-white">
                        {" "}
                        {member.description}{" "}
                      </p>{" "}
                    </div>{" "}
                    {/* Hover / Active Border */}{" "}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-lg border transition-all duration-500 ${isActive ? "border-yellow-400/70" : "border-transparent"}`}
                    />{" "}
                  </div>{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
        {/* ========================================================= MOBILE CONTROLS ========================================================= */}{" "}
        <div className="mt-5 flex items-center justify-center gap-5">
          {" "}
          {/* Previous */}{" "}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous team member"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-500/50 text-lg text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
          >
            {" "}
            ←{" "}
          </button>{" "}
          {/* Dots */}{" "}
          <div className="flex items-center gap-2">
            {" "}
            {teamMembers.map((member, index) => (
              <button
                key={member.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to ${member.name}`}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-6 bg-yellow-400" : "w-2 bg-white/30"}`}
              />
            ))}{" "}
          </div>{" "}
          {/* Next */}{" "}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next team member"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-500/50 text-lg text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
          >
            {" "}
            →{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* ========================================================= DESKTOP GRID ========================================================= */}{" "}
      <div className="mt-8 hidden grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-5 lg:gap-4">
        {" "}
        {teamMembers.map((member) => {
          const isActive = activeId === member.id;
          return (
            <div
              key={member.id}
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
              className={`group relative h-[500px] overflow-hidden rounded-lg border bg-[#111] transition-all duration-500 ${isActive ? "scale-[0.98] border-yellow-400/80 shadow-[0_0_25px_rgba(250,204,21,0.25)]" : "border-yellow-500/40"}`}
            >
              {" "}
              {/* Image */}{" "}
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="20vw"
                className={`rounded-lg object-cover object-top transition-transform duration-700 ease-out ${isActive ? "scale-105" : "group-hover:scale-105"}`}
              />{" "}
              {/* Dark Gradient */}{" "}
              <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black transition-all duration-500 ${isActive ? "via-black/20" : ""}`}
              />{" "}
              {/* Content */}{" "}
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent px-4 pb-4 pt-20 text-center">
                {" "}
                <h3 className="text-lg font-semibold text-white transition-transform duration-500 lg:text-xl">
                  {" "}
                  {member.name}{" "}
                </h3>{" "}
                <p className="mt-1 text-xs font-medium text-yellow-400">
                  {" "}
                  {member.role}{" "}
                </p>{" "}
                {/* Line */}{" "}
                <div
                  className={`mx-auto mt-4 h-0.5 bg-white transition-all duration-500 ${isActive ? "w-20 bg-yellow-400" : "w-12 group-hover:w-20"}`}
                />{" "}
                <p className="mt-4 text-[10px] leading-relaxed text-white lg:text-xs">
                  {" "}
                  {member.description}{" "}
                </p>{" "}
              </div>{" "}
              {/* Hover Border */}{" "}
              <div
                className={`pointer-events-none absolute inset-0 rounded-lg border transition-all duration-500 ${isActive ? "border-yellow-400/70" : "border-transparent group-hover:border-yellow-400/70"}`}
              />{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
    </div>
  );
};
export default Teams;
