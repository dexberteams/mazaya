import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Globe,
  Lightbulb,
  Gauge,
  PhoneCall,
  CalendarCheck2,
  TrendingUp,
  Clock,
  ShieldCheck,
  Headphones,
  FileText,
  Rocket,
  ArrowRight,
} from "lucide-react";
import QuoteForm from "./components/QuoteForm";
import LogisticsCoverage from "./components/LogisticsCoverage";
import ProcessTimeline from "./components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Get a Quote | Mazaya Logistics",
  description:
    "Tell us about your logistics requirements and our team will prepare a customized solution tailored to your business needs across Saudi Arabia, GCC, and worldwide.",
};

const WHY_CHOOSE_ITEMS = [
  {
    icon: Users,
    title: "Professional Operations Team",
    description: "Skilled professionals ensuring excellence in every operation.",
  },
  {
    icon: Globe,
    title: "Extensive Coverage",
    description: "Strong network across Saudi Arabia, GCC and worldwide.",
  },
  {
    icon: Lightbulb,
    title: "Flexible Solutions",
    description: "Customized logistics solutions tailored to your business needs.",
  },
  {
    icon: Gauge,
    title: "Fast Execution",
    description: "Quick response and efficient execution for timely delivery.",
  },
  {
    icon: PhoneCall,
    title: "High-Quality Operation",
    description: "Commitment to quality, safety and operational excellence.",
  },
  {
    icon: CalendarCheck2,
    title: "Experience in Seasonal Projects",
    description: "Proven expertise in handling high-volume and seasonal demands.",
  },
  {
    icon: TrendingUp,
    title: "Regular Performance Reports",
    description: "Transparent reporting and real-time visibility of your operations.",
  },
];

const PROCESS_BENEFITS = [
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Live updates at every step of your shipment.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Advanced security and care at every stage.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is always here to assist you.",
  },
  {
    icon: FileText,
    title: "Complete Transparency",
    description: "Full visibility and clear updates throughout the process.",
  },
];

export default function GetQuotePage() {
  return (
    <div className="relative min-h-screen bg-[#070502] text-white selection:bg-[#f5b800] selection:text-black font-sans pb-24 overflow-x-hidden">
      {/* ── SECTION 1: HERO SECTION ── */}
      <section className="relative w-full pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        {/* Background Image with Cinematic Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/getQuote/get-hero.jpg"
            alt="Mazaya Logistics Port and Freight Fleet"
            fill
            priority
            unoptimized
            className="object-cover object-right lg:object-center opacity-85 select-none"
          />
          {/* Gradients: dark on left for high contrast readability, subtle vignette on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070502] via-[#070502]/85 to-[#070502]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070502] via-transparent to-[#070502]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,184,0,0.12)_0%,transparent_60%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#f5b800] font-bold text-sm tracking-wider">
                =
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#f5f5f5] uppercase">
                GET QUOTE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Let’s Build the Right{" "}
              <span className="text-[#fae4a8] block sm:inline">
                Logistics Solution for You
              </span>
            </h1>

            {/* Yellow accent divider */}
            <div className="w-20 h-[2px] bg-[#f5b800] mt-4 mb-6" />

            {/* Sub-paragraphs */}
            <div className="space-y-4 max-w-2xl text-sm sm:text-base text-[#cfc7bc] leading-relaxed">
              <p>
                Tell us about your logistics requirements and our team will prepare
                a solution tailored to your business needs.
              </p>
              <p className="text-[#a89f92]">
                From transportation and warehousing to delivery and fulfillment,
                share your requirements with us and take the next step toward
                smarter logistics.
              </p>
            </div>

            {/* Geographic Coverage Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium">
              <div className="inline-flex items-center gap-2">
                <span className="text-base">🇸🇦</span>
                <span className="text-[#f5b800]">Saudi Arabia</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-base">🌍</span>
                <span className="text-[#f5b800]">GCC Countries</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-base">✈️</span>
                <span className="text-[#f5b800]">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 space-y-24">
        {/* ── SECTION 2: FORM & WHY CHOOSE MAZAYA ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Quote Form (Client Component) */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          {/* Right Column: Why Choose Mazaya Logistics? */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0e0a03]/80 border border-[#2b200e] p-6 sm:p-8 lg:p-10 backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why Choose{" "}
              <span className="text-[#f5b800]">Mazaya Logistics?</span>
            </h2>
            <div className="w-14 h-[2px] bg-[#f5b800] mt-3 mb-8" />

            <div className="space-y-6">
              {WHY_CHOOSE_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-[#f5b800]/40 bg-[#161005] flex items-center justify-center text-[#f5b800] shrink-0 group-hover:border-[#f5b800] group-hover:bg-[#f5b800]/10 transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#f5b800] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#9e9587] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: LOGISTICS COVERAGE ── */}
        <LogisticsCoverage />

        {/* ── SECTION 4: PROCESS TIMELINE ── */}
        <div className="space-y-12">
          <ProcessTimeline />

          {/* Benefits Bar (Screenshot 4) */}
          <div className="rounded-xl bg-[#0c0903] border border-[#2b200e] p-6 lg:p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#2b200e]/70">
              {PROCESS_BENEFITS.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3.5 ${
                      index > 0 ? "pt-5 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full border border-[#f5b800]/40 bg-[#161005] flex items-center justify-center text-[#f5b800] shrink-0">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#f5b800] tracking-wide">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#9e9587] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── SECTION 5: READY TO GET STARTED? CTA BANNER ── */}
          <div className="rounded-xl bg-gradient-to-r from-[#120d04] via-[#0c0903] to-[#120d04] border border-[#38280f] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#211607] border border-[#f5b800]/30 flex items-center justify-center text-[#f5b800] shrink-0">
                <Rocket className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Ready to Get Started?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#a39b8e] max-w-xl">
                  Share your logistics requirements with our team and let’s create
                  the right solution for your business.
                </p>
              </div>
            </div>

            <Link
              href="#quote-form"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f5b800] hover:bg-[#e0a700] text-black font-semibold text-sm transition-all duration-200 shrink-0 shadow-lg shadow-[#f5b800]/20 hover:shadow-[#f5b800]/30"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
