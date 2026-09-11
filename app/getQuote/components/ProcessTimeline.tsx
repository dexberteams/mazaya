import Image from "next/image";
import React, { isValidElement, type ComponentType, type ReactNode } from "react";

interface TimelineStep {
  step: string;
  title: string;
  description: string;
  icon: ReactNode | ComponentType<{ className?: string }>;
  imagePlaceholderText: string;
  imageSrc?: string;
}

function renderTimelineStepIcon(icon: TimelineStep["icon"]) {
  if (isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === "function" || (typeof icon === "object" && icon !== null)) {
    const Icon = icon as ComponentType<{ className?: string }>;
    return <Icon className="w-6 h-6 stroke-[2.2]" />;
  }
  return null;
}


const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "01",
    title: "Pickup",
    description:
      "We collect your goods safely from your location with our professional team.",
    icon: (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5 23.125C23.5375 23.125 24.375 22.2875 24.375 21.25C24.375 20.2125 23.5375 19.375 22.5 19.375C21.4625 19.375 20.625 20.2125 20.625 21.25C20.625 22.2875 21.4625 23.125 22.5 23.125ZM24.375 11.875H21.25V15H26.825L24.375 11.875ZM7.5 23.125C8.5375 23.125 9.375 22.2875 9.375 21.25C9.375 20.2125 8.5375 19.375 7.5 19.375C6.4625 19.375 5.625 20.2125 5.625 21.25C5.625 22.2875 6.4625 23.125 7.5 23.125ZM25 10L28.75 15V21.25H26.25C26.25 23.325 24.575 25 22.5 25C20.425 25 18.75 23.325 18.75 21.25H11.25C11.25 23.325 9.575 25 7.5 25C5.425 25 3.75 23.325 3.75 21.25H1.25V7.5C1.25 6.1125 2.3625 5 3.75 5H21.25V10H25ZM3.75 7.5V18.75H4.7C5.3875 17.9875 6.3875 17.5 7.5 17.5C8.6125 17.5 9.6125 17.9875 10.3 18.75H18.75V7.5H3.75Z" fill="#101010" />
    </svg>),
    imagePlaceholderText: "Pickup Cargo Dock",
    imageSrc: "/getQuote/track-1.jpg",
  },
  {
    step: "02",
    title: "Packaging",
    description:
      "Your items are carefully packaged using high-quality materials to ensure full protection.",
    icon: (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.875 27.5C21.875 27.5 21.25 25 21.25 21.25C21.25 14.25 22.9163 5.83375 23.75 2.5C24.5838 6.25 26.25 15 26.25 20C26.25 21.525 26.0175 23.2825 25.8363 24.4225C25.7736 24.7969 25.6225 25.151 25.3955 25.4554C25.1685 25.7597 24.8723 26.0056 24.5313 26.1725L21.875 27.5ZM21.875 27.5H6.32753C5.18003 27.5 4.18878 26.7162 4.03378 25.5787C3.84289 24.1438 3.7481 22.6976 3.75003 21.25C3.75003 13.75 6.25003 6.25 6.25003 6.25" stroke="#101010" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.52621 22.5925C7.50954 22.1658 7.50079 21.7183 7.49996 21.25C7.49996 19.185 7.64496 16.9975 7.87121 14.8538C7.90424 14.5499 8.04856 14.269 8.27636 14.0652C8.50415 13.8614 8.79931 13.7492 9.10496 13.75H16.5875C17.3362 13.75 17.9162 14.4038 17.84 15.1488C17.6252 17.1756 17.5117 19.2119 17.5 21.25C17.5 21.65 17.5066 22.035 17.52 22.405C17.5277 22.5778 17.5005 22.7504 17.4401 22.9125C17.3796 23.0746 17.2871 23.2228 17.1681 23.3483C17.0491 23.4739 16.9061 23.5741 16.7474 23.6431C16.5888 23.7122 16.4179 23.7485 16.245 23.75H8.75371C8.43956 23.7526 8.13657 23.6336 7.90823 23.4178C7.67988 23.2021 7.54388 22.9063 7.52871 22.5925M7.22496 2.50001H23.75C23.63 2.98001 23.4925 3.56376 23.3462 4.23501C23.2245 4.80236 22.9129 5.31123 22.4629 5.67758C22.0129 6.04393 21.4515 6.24586 20.8712 6.25001H5.42871C5.63746 5.18251 5.84121 4.23501 6.02246 3.45001C6.08587 3.17875 6.23949 2.93705 6.45817 2.76447C6.67685 2.59188 6.94639 2.49865 7.22496 2.50001Z" stroke="#101010" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
    </svg>),
    imagePlaceholderText: "Packaging & Crating",
    imageSrc: "/getQuote/box-2.jpg",
  },
  {
    step: "03",
    title: "Transportation",
    description:
      "Goods are transported using our modern fleet with real-time tracking and safety.",
    icon: (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.7125 13.325C25.5375 12.825 25.0625 12.5 24.5 12.5H15.5125C14.9375 12.5 14.475 12.825 14.2875 13.325L12.5 18.4625L12.5125 25.35C12.5125 25.825 12.9 26.25 13.375 26.25H14.15C14.625 26.25 15 25.775 15 25.3V23.75H25V25.3C25 25.775 25.3875 26.25 25.8625 26.25H26.625C27.1 26.25 27.4875 25.825 27.4875 25.35L27.5 23.6375V18.4625L25.7125 13.325ZM15.5125 13.75H24.5L25.7875 17.5H14.225L15.5125 13.75ZM15 21.25C14.3125 21.25 13.75 20.6875 13.75 20C13.75 19.3125 14.3125 18.75 15 18.75C15.6875 18.75 16.25 19.3125 16.25 20C16.25 20.6875 15.6875 21.25 15 21.25ZM25 21.25C24.3125 21.25 23.75 20.6875 23.75 20C23.75 19.3125 24.3125 18.75 25 18.75C25.6875 18.75 26.25 19.3125 26.25 20C26.25 20.6875 25.6875 21.25 25 21.25Z" fill="#101010" />
      <path d="M17.5 11.25H18.75V3.75H8.75V10H2.5V26.25H3.75V11.25H10V5H17.5V11.25Z" fill="#101010" />
      <path d="M6.25 13.75H8.75V16.25H6.25V13.75ZM12.5 6.25H15V8.75H12.5V6.25ZM6.25 18.75H8.75V21.25H6.25V18.75ZM6.25 23.75H8.75V26.25H6.25V23.75Z" fill="#101010" />
    </svg>),
    imagePlaceholderText: "Fleet On Route",
    imageSrc: "/getQuote/track-3.jpg",
  },
  {
    step: "04",
    title: "Customs",
    description:
      "We handle all customs clearances and documentation to ensure smooth cross-border movement.",
    icon: (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2107_993)">
        <path d="M27.5998 10.6751C27.0935 10.9073 26.5581 11.0699 26.0081 11.1584C26.8875 13.6621 26.8903 16.3902 26.0161 18.8957C25.1419 21.4012 23.4425 23.5354 21.1964 24.9485C18.9504 26.3617 16.2909 26.9699 13.6539 26.6736C11.0169 26.3772 8.55873 25.1939 6.68233 23.3175C4.80594 21.4411 3.62261 18.983 3.32628 16.3459C3.02994 13.7089 3.63819 11.0495 5.05133 8.80341C6.46446 6.55736 8.59866 4.85796 11.1041 3.98375C13.6096 3.10953 16.3378 3.11235 18.8414 3.99174C18.9299 3.44179 19.0925 2.90636 19.3248 2.40007C16.4633 1.41066 13.351 1.42072 10.496 2.4286C7.64104 3.43649 5.21217 5.38264 3.6061 7.94919C2.00003 10.5158 1.31166 13.5511 1.65343 16.5594C1.9952 19.5677 3.3469 22.3712 5.48778 24.5121C7.62865 26.6529 10.4322 28.0046 13.4405 28.3464C16.4488 28.6882 19.4841 27.9998 22.0506 26.3937C24.6172 24.7877 26.5634 22.3588 27.5712 19.5038C28.5791 16.6489 28.5892 13.5365 27.5998 10.6751Z" fill="#101010" />
        <path d="M16.8751 4.80841C18.3411 6.3823 19.4472 8.25616 20.1168 10.3001H15.6251V4.66675H14.3751V10.3084H9.88346C10.5545 8.26079 11.6635 6.38393 13.1335 4.80841C12.4075 4.93996 11.6978 5.14951 11.0168 5.43341C9.94274 6.9121 9.12314 8.55976 8.5918 10.3084H5.78346C5.56147 10.7467 5.37206 11.2007 5.2168 11.6667H8.2418C8.00716 12.7624 7.88707 13.8796 7.88346 15.0001C7.88598 16.2257 8.02574 17.4472 8.30013 18.6417H5.35013C5.52158 19.1092 5.72771 19.5633 5.9668 20.0001H8.65846C9.16839 21.5967 9.92474 23.1038 10.9001 24.4667C11.5985 24.7661 12.328 24.9869 13.0751 25.1251C11.7149 23.6417 10.6689 21.8984 10.0001 20.0001H14.3835V25.2834H15.6335V20.0001H20.0001C19.3289 21.8991 18.28 23.6424 16.9168 25.1251C17.6675 24.9822 18.3998 24.7558 19.1001 24.4501C20.074 23.0922 20.8303 21.5909 21.3418 20.0001H24.0085C24.2464 19.5714 24.4525 19.1257 24.6251 18.6667H21.6668C21.9412 17.4722 22.0809 16.2507 22.0835 15.0251C22.0799 13.9046 21.9598 12.7874 21.7251 11.6917H24.7251C24.6751 11.5501 24.6251 11.4167 24.5668 11.2834C23.5412 11.2191 22.5476 10.9013 21.6751 10.3584H21.3751C21.3751 10.2667 21.3085 10.1834 21.2835 10.0917C20.5385 9.54833 19.9233 8.84639 19.4824 8.03653C19.0414 7.22667 18.7856 6.32906 18.7335 5.40841C18.1343 5.1502 17.5121 4.9493 16.8751 4.80841ZM14.3751 18.6334H9.5918C9.00543 16.3399 8.97971 13.939 9.5168 11.6334H14.3751V18.6334ZM20.8335 15.0001C20.8303 16.2282 20.6764 17.4512 20.3751 18.6417H15.6251V11.6667H20.4835C20.7229 12.7615 20.8403 13.8795 20.8335 15.0001Z" fill="#101010" />
        <path d="M25.0002 9.16658C27.3013 9.16658 29.1668 7.30111 29.1668 4.99992C29.1668 2.69873 27.3013 0.833252 25.0002 0.833252C22.699 0.833252 20.8335 2.69873 20.8335 4.99992C20.8335 7.30111 22.699 9.16658 25.0002 9.16658Z" fill="#101010" />
      </g>
      <defs>
        <clipPath id="clip0_2107_993">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>),
    imagePlaceholderText: "Customs Clearance",
    imageSrc: "/getQuote/track-4.jpg",
  },
  {
    step: "05",
    title: "Delivery",
    description:
      "Your goods are delivered safely and on time to the final destination.",
    icon: (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.25 2.0437L5 8.5187V13.125H6.875V10.6687L15.3125 15.5375V25.3562L12.9187 24.1625L12.0813 25.8375L16.2812 27.9375L27.5 21.4812V8.5187L16.25 2.0437ZM24.6688 9.0562L21.4 10.9437L12.9688 6.0937L16.2437 4.2062L24.6625 9.0562H24.6688ZM16.25 13.9187L7.83125 9.0562L11.0938 7.17495L19.525 12.025L16.25 13.9187ZM17.1875 25.2562V15.5437L20.625 13.5562V16.875H22.5V12.475L25.625 10.6687V20.3937L17.1875 25.25V25.2562Z" fill="#101010" />
      <path d="M10.625 15H1.25V16.875H10.625V15ZM12.5 18.75H5V20.625H12.5V18.75ZM10 22.5H3.75V24.375H10V22.5Z" fill="#101010" />
    </svg>),
    imagePlaceholderText: "Final Mile Delivery",
    imageSrc: "/getQuote/track-5.jpg",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="w-full">
      {/* Title */}
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Process <span className="text-[#f5b800]">Timeline</span>
        </h2>
      </div>

      {/* Steps Grid with top timeline connector */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {TIMELINE_STEPS.map((item, index) => {
            return (
              <div key={item.step} className="flex flex-col items-center relative">
                {/* Connecting Horizontal Line to next step (Desktop only) */}
                {index < TIMELINE_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-[18px] left-1/2 w-[calc(100%+1.5rem)] h-[1.5px] bg-[#544328] z-0 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {/* Step Number Circle */}
                <div className="relative z-10 w-9 h-9 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shadow-md shadow-black/50">
                  {item.step}
                </div>

                {/* Vertical Dashed Line connecting Circle to Card */}
                <div className="w-full flex justify-center items-center h-5" aria-hidden="true">
                  <svg width="2" height="20" viewBox="0 0 2 20" fill="none" className="overflow-visible">
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="20"
                      stroke="#544328"
                      strokeWidth="1.5"
                      strokeDasharray="3 3.5"
                    />
                  </svg>
                </div>

                {/* Card */}
                <div className="w-full flex-1 flex flex-col justify-between rounded-xl bg-[#0c0903] border border-[#2b200e] overflow-hidden hover:border-[#f5b800]/50 transition-all duration-300 group">
                  {/* Card Content Top */}
                  <div className="p-5 flex flex-col items-center text-center flex-1">
                    {/* Golden Circle Icon */}
                    <div className="w-12 h-12 rounded-full bg-[#f5b800] text-black flex items-center justify-center mb-4 shadow-md shadow-[#f5b800]/20 group-hover:scale-105 transition-transform duration-300">
                      {renderTimelineStepIcon(item.icon)}
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#a39b8e] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Image Bottom */}
                  <div className="relative w-full h-36 overflow-hidden">
                    {item.imageSrc ? (
                      <>
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />

                      </>
                    ) : (
                      <div className="relative z-10 flex flex-col items-center justify-center h-full p-3 text-center text-[#857969]">
                        <span className="text-[11px] font-medium tracking-wide">
                          {item.imagePlaceholderText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
