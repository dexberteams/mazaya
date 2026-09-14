"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

interface CategoryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  icon: React.ReactNode;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    title: "E-commerce",
    description:
      "End-to-end logistics solutions for online businesses, including warehousing, order fulfillment, and last-mile delivery.",
    image: "/industries/Images1.jpg",
    link: "/getQuote",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M3.75 6.56248C3.50136 6.56248 3.2629 6.66125 3.08709 6.83707C2.91127 7.01288 2.8125 7.25134 2.8125 7.49998C2.8125 7.74862 2.91127 7.98708 3.08709 8.16289C3.2629 8.33871 3.50136 8.43748 3.75 8.43748H5.83125L8.29125 18.2812C8.50031 19.1156 9.2475 19.6875 10.1072 19.6875H21.7978C22.6444 19.6875 23.3634 19.125 23.5856 18.3094L26.0156 9.37498H24.0525L21.7969 17.8125H10.1062L7.64719 7.96873C7.54561 7.56488 7.31145 7.2068 6.9822 6.95184C6.65295 6.69687 6.24767 6.55976 5.83125 6.56248H3.75ZM20.625 19.6875C19.0828 19.6875 17.8125 20.9578 17.8125 22.5C17.8125 24.0422 19.0828 25.3125 20.625 25.3125C22.1672 25.3125 23.4375 24.0422 23.4375 22.5C23.4375 20.9578 22.1672 19.6875 20.625 19.6875ZM12.1875 19.6875C10.6453 19.6875 9.375 20.9578 9.375 22.5C9.375 24.0422 10.6453 25.3125 12.1875 25.3125C13.7297 25.3125 15 24.0422 15 22.5C15 20.9578 13.7297 19.6875 12.1875 19.6875ZM15 6.56248V11.25H12.1875L15.9375 15L19.6875 11.25H16.875V6.56248H15ZM12.1875 21.5625C12.7163 21.5625 13.125 21.9712 13.125 22.5C13.125 23.0287 12.7163 23.4375 12.1875 23.4375C11.6587 23.4375 11.25 23.0287 11.25 22.5C11.25 21.9712 11.6587 21.5625 12.1875 21.5625ZM20.625 21.5625C21.1537 21.5625 21.5625 21.9712 21.5625 22.5C21.5625 23.0287 21.1537 23.4375 20.625 23.4375C20.0963 23.4375 19.6875 23.0287 19.6875 22.5C19.6875 21.9712 20.0963 21.5625 20.625 21.5625Z"
          fill="#FFBB00"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Restaurants",
    description:
      "Reliable delivery and supply chain solutions to keep your restaurant operations running smoothly.",
    image: "/industries/image2.jpg",
    link: "/getQuote",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M18.75 12.5L5 26.2513M22.5 3.75128L18.75 7.50128C18.0687 8.18253 17.7275 8.52378 17.545 8.89128C17.374 9.23632 17.2851 9.6162 17.2851 10.0013C17.2851 10.3864 17.374 10.7662 17.545 11.1113C17.7275 11.4788 18.0687 11.82 18.75 12.5013C19.4313 13.1825 19.7725 13.5238 20.14 13.7063C20.485 13.8773 20.8649 13.9662 21.25 13.9662C21.6351 13.9662 22.015 13.8773 22.36 13.7063C22.7275 13.5238 23.0687 13.1825 23.75 12.5013L27.5 8.75128M25 6.24878L21.25 9.99878"
          stroke="#FFBB00"
          strokeWidth="1.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0559 12.3075C9.3497 14.0138 7.0097 14.44 4.87595 12.3075C2.74345 10.1738 1.62595 6.29003 3.3322 4.58253C5.03845 2.87753 8.9222 3.99503 11.0559 6.12753C13.1884 8.26128 12.7622 10.6013 11.0559 12.3075ZM11.0559 12.3075L24.9997 26.25"
          stroke="#FFBB00"
          strokeWidth="1.875"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Retail",
    description:
      "Scalable logistics solutions for retail businesses, ensuring timely delivery and inventory availability.",
    image: "/industries/image3.jpg",
    link: "/getQuote",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M25.6322 13.62V23.6063C25.6322 24.1812 25.4392 24.6617 25.0534 25.0475C24.6676 25.4333 24.1876 25.6258 23.6134 25.625H6.39966C5.82466 25.625 5.34425 25.4325 4.95841 25.0475C4.57258 24.6625 4.38008 24.1821 4.38091 23.6063V13.5725C3.85341 13.1833 3.46758 12.6729 3.22341 12.0413C2.97925 11.4096 2.97383 10.7358 3.20716 10.02L4.42341 6.01C4.59008 5.5 4.85883 5.1 5.22966 4.81C5.60133 4.52 6.0605 4.375 6.60716 4.375H23.3572C23.903 4.375 24.3605 4.51083 24.7297 4.7825C25.098 5.05417 25.368 5.44708 25.5397 5.96125L26.8034 10.0188C27.0376 10.7354 27.0326 11.415 26.7884 12.0575C26.5442 12.7 26.1584 13.2208 25.6309 13.62M17.7559 13.125C18.5584 13.125 19.1576 12.9 19.5534 12.45C19.9492 12.0008 20.1159 11.5367 20.0534 11.0575L19.2247 5.625H15.6334V10.875C15.6334 11.4892 15.8434 12.0175 16.2634 12.46C16.6834 12.9033 17.1817 13.125 17.7584 13.125M12.1334 13.125C12.8051 13.125 13.348 12.9033 13.7622 12.46C14.1763 12.0167 14.3834 11.4883 14.3834 10.875V5.625H10.7909L9.95841 11.1538C9.90758 11.5421 10.0772 11.9675 10.4672 12.43C10.8572 12.8925 11.4134 13.1242 12.1334 13.125ZM6.56966 13.125C7.1205 13.125 7.58883 12.9375 7.97466 12.5625C8.3605 12.1875 8.6005 11.7196 8.69466 11.1588L9.47841 5.625H6.60841C6.33591 5.625 6.11925 5.685 5.95841 5.805C5.79758 5.925 5.67758 6.10542 5.59841 6.34625L4.44466 10.2937C4.23966 10.9504 4.32716 11.5867 4.70716 12.2025C5.08716 12.8183 5.708 13.1258 6.56966 13.125ZM23.4447 13.125C24.193 13.125 24.7905 12.8333 25.2372 12.25C25.6847 11.6667 25.7955 11.0146 25.5697 10.2937L24.3534 6.29875C24.2734 6.05792 24.153 5.88542 23.9922 5.78125C23.8313 5.67708 23.6151 5.625 23.3434 5.625H20.5359L21.3197 11.1588C21.4138 11.7196 21.6538 12.1875 22.0397 12.5625C22.4255 12.9375 22.8938 13.125 23.4447 13.125ZM6.40091 24.375H23.6134C23.8376 24.375 24.0217 24.3029 24.1659 24.1587C24.3101 24.0146 24.3822 23.8304 24.3822 23.6063V14.2163C24.2138 14.2746 24.0538 14.3154 23.9022 14.3387C23.7513 14.3629 23.5988 14.375 23.4447 14.375C22.8822 14.375 22.3872 14.2654 21.9597 14.0463C21.5322 13.8271 21.1263 13.4771 20.7422 12.9963C20.4155 13.4029 20.0126 13.7342 19.5334 13.99C19.0542 14.2458 18.4717 14.3742 17.7859 14.375C17.2876 14.375 16.8134 14.2587 16.3634 14.0262C15.9134 13.7937 15.4613 13.45 15.0072 12.995C14.5888 13.45 14.1251 13.7937 13.6159 14.0262C13.1076 14.2587 12.6226 14.375 12.1609 14.375C11.6367 14.375 11.1259 14.275 10.6284 14.075C10.1309 13.875 9.69466 13.515 9.31966 12.995C8.7055 13.6092 8.16883 13.9925 7.70966 14.145C7.25133 14.2983 6.87133 14.375 6.56966 14.375C6.4155 14.375 6.2605 14.3629 6.10466 14.3387C5.948 14.3146 5.7905 14.2738 5.63216 14.2163V23.605C5.63216 23.83 5.70425 24.0146 5.84841 24.1587C5.99258 24.3029 6.17675 24.375 6.40091 24.375Z"
          fill="#FFBB00"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Food & Beverage",
    description:
      "Safe and temperature-controlled logistics for food, fresh groceries, and beverage products.",
    image: "/industries/image4.jpg",
    link: "/getQuote",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M5 12.5H25L22.5 24.5H7.5L5 12.5Z"
          stroke="#FFBB00"
          strokeWidth="1.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 12.5L15 5.5L20 12.5"
          stroke="#FFBB00"
          strokeWidth="1.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16.5V20.5M11 16.5L11.8 20.5M19 16.5L18.2 20.5"
          stroke="#FFBB00"
          strokeWidth="1.875"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function IndustryCategories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive items per view: mobile 1, tablet 2, desktop 3
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, categories.length - itemsPerView);

  const goToSlide = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, maxSlide));
      setCurrentSlide(clamped);
    },
    [maxSlide]
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  }, [maxSlide]);

  // Touch swipe handling
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="relative w-full bg-[#070502] py-16 sm:py-20 lg:py-24 font-manrope overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            Industry <span className="text-[#FFEAB1]">Categories</span>
          </h2>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous industry"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#3D301E] bg-[#120E08] text-gray-300 hover:text-white hover:border-[#FFBB00] hover:bg-[#1C160C] flex items-center justify-center transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next industry"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#3D301E] bg-[#120E08] text-gray-300 hover:text-white hover:border-[#FFBB00] hover:bg-[#1C160C] flex items-center justify-center transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Slider Track Container ── */}
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative w-full overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
            }}
          >
            {categories.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2.5 sm:px-3"
              >
                <div className="group relative h-full flex flex-col justify-between bg-gradient-to-b from-[#141009] to-[#0D0A06] border border-[#2B2113] hover:border-[#FFBB00]/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.7)]">
                  {/* Top Image */}
                  <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlapping Icon Badge */}
                  <div className="-mt-6 ml-4 relative z-10 w-12 h-12 rounded-lg bg-[#120E08] border border-[#FFBB00] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Card Content */}
                  <div className="mt-4 px-2 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {item.title}
                    </h3>

                    {/* Accent Yellow Bar */}
                    <div className="w-10 h-1 bg-[#FFBB00] rounded-full my-3" />

                    <p className="text-gray-400 text-sm leading-relaxed font-inter font-normal line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer: Learn More Link */}
                  <div className="mt-6 pt-2 px-2 flex justify-end items-center">
                    <Link
                      href={item.link}
                      className="text-[#FFBB00] hover:text-[#FFEAB1] text-sm font-medium flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      Learn More
                      <span className="text-base leading-none">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pagination Indicator Dots ── */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2.5">
          {categories.map((_, index) => {
            const isActive =
              currentSlide === index ||
              (currentSlide >= maxSlide && index >= maxSlide);
            return (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-3.5 h-3.5 bg-[#FFBB00] shadow-[0_0_12px_rgba(255,187,0,0.6)]"
                    : "w-2.5 h-2.5 bg-[#3A2E1D] hover:bg-[#5E4A2E]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
