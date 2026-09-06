"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import Image from "next/image";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import CustomVideo from "../ui/CustomVideo";

const reviews = [
  {
    name: "Ahmed Al-Qahtani",
    role: "General Manager",
    company: "Kestaa",
    image: "/home/client1.png",
    review:
      "Working with Mazaya Logistics has made our delivery operations faster, smoother, and more reliable.",
  },
  {
    name: "Omar Hassan",
    role: "Warehouse Manager",
    company: "Jahez",
    image: "/home/client2.png",
    review:
      "Mazaya Logistics delivers on time. Their team is professional, reliable and always responsive.",
  },
  {
    name: "Mohammed Ali",
    role: "Operations Manager",
    company: "Aramex",
    image: "/home/client3.avif",
    review:
      "Working with Mazaya Logistics has made our supply chain operations faster and more efficient.",
  },
  {
    name: "Al-Quareshi Hakim",
    role: "Operations Manager",
    company: "Ajex",
    image: "/home/client4.avif",
    review:
      "Thanks to Mazaya Logistics, our supply chain is now more efficient, organized, and consistently dependable.",
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const reviewSlides = [];

  for (let i = 0; i < reviews.length; i += 2) {
    reviewSlides.push(reviews.slice(i, i + 2));
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === reviewSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? reviewSlides.length - 1 : prev - 1));
  };
  return (
    <section className="relative overflow-hidden my-10 lg:my-20 px-4 lg:px-8 text-white">
      <SectionHeader
        title="Testimonials"
        description="What our clients say about working with Mazaya Logistics."
      ></SectionHeader>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-4 mt-5 lg:mt-10">
        {/* ================= VIDEO SECTION ================= */}
        <CustomVideo></CustomVideo>

        {/* ================= CLIENT REVIEW CAROUSEL ================= */}
        <div className="relative min-h-95 overflow-hidden lg:min-h-117.5">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
            }}
          >
            {reviewSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex min-w-full flex-col gap-4">
                {slide.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex flex-1 items-center gap-5 overflow-hidden rounded-md border border-white/10 bg-[#1E1813]/90 p-4 transition-all duration-500 hover:border-yellow-400/40 hover:bg-[#251f13] sm:p-5 lg:p-6"
                  >
                    {/* Quote */}
                    <BiSolidQuoteAltRight
                      size={18}
                      className="absolute top-4 right-4 text-white"
                    />

                    {/* Client Image */}
                    <div className="relative h-24 w-24 shrink-0 overflow-visible sm:h-28 sm:w-28 lg:h-30 lg:w-30">
                      {/* Top Square Shadow */}
                      <div className="absolute -top-2 left-4 h-4 w-1/2 bg-linear-to-r from-amber-500 to-transparent" />

                      {/* Bottom Square Shadow */}
                      <div className="absolute -bottom-2 right-4 h-4 w-1/2 bg-linear-to-l from-amber-500" />

                      {/* Image */}
                      <div className="relative h-full w-full overflow-hidden rounded-sm border border-amber-400">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="120px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="flex flex-1 flex-col justify-center">
                      {/* Stars */}
                      <div className="mb-2 flex gap-1 text-yellow-400">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} size={14} fill="currentColor" />
                        ))}
                      </div>

                      <p className="text-xs leading-5 text-white lg:leading-6">
                        “{item.review}”
                      </p>

                      <div className="mt-3">
                        <h3 className="text-sm font-semibold text-white">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-white/50">
                          {item.role}
                        </p>

                        <span className="mt-2 inline-block text-xs font-semibold text-yellow-400">
                          {item.company}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous reviews"
            className="absolute bottom-1 left-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-black lg:bottom-4"
          >
            <ArrowLeft size={16} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next reviews"
            className="absolute right-4 bottom-1 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-black lg:bottom-4"
          >
            <ArrowRight size={16} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {reviewSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  activeSlide === index
                    ? "w-6 bg-yellow-400"
                    : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
