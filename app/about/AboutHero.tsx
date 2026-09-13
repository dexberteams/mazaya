"use client";

import Image from "next/image";
import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  targetId?: string;
  icon: (active: boolean) => React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: "overview",
    label: "Company Overview",
    targetId: "overview",
    icon: (active) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M2.49609 5.5C2.49609 4.086 2.49609 3.379 2.93609 2.94C3.37509 2.5 4.08209 2.5 5.49609 2.5H6.99609C8.41009 2.5 9.11709 2.5 9.55609 2.94C9.99609 3.379 9.99609 4.086 9.99609 5.5V10C9.99609 11.414 9.99609 12.121 9.55609 12.56C9.11709 13 8.41009 13 6.99609 13H5.49609C4.08209 13 3.37509 13 2.93609 12.56C2.49609 12.121 2.49609 11.414 2.49609 10V5.5ZM2.49609 19.25C2.49609 18.551 2.49609 18.202 2.61009 17.926C2.68548 17.744 2.79599 17.5785 2.93531 17.4392C3.07464 17.2999 3.24005 17.1894 3.42209 17.114C3.69809 17 4.04709 17 4.74609 17H7.74609C8.44509 17 8.79409 17 9.07009 17.114C9.25214 17.1894 9.41755 17.2999 9.55687 17.4392C9.6962 17.5785 9.80671 17.744 9.88209 17.926C9.99609 18.202 9.99609 18.551 9.99609 19.25C9.99609 19.949 9.99609 20.298 9.88209 20.574C9.80671 20.756 9.6962 20.9215 9.55687 21.0608C9.41755 21.2001 9.25214 21.3106 9.07009 21.386C8.79409 21.5 8.44509 21.5 7.74609 21.5H4.74609C4.04709 21.5 3.69809 21.5 3.42209 21.386C3.24005 21.3106 3.07464 21.2001 2.93531 21.0608C2.79599 20.9215 2.68548 20.756 2.61009 20.574C2.49609 20.298 2.49609 19.949 2.49609 19.25ZM13.9961 4.75C13.9961 4.051 13.9961 3.702 14.1101 3.426C14.1855 3.24395 14.296 3.07854 14.4353 2.93922C14.5746 2.79989 14.74 2.68938 14.9221 2.614C15.1981 2.5 15.5471 2.5 16.2461 2.5H19.2461C19.9451 2.5 20.2941 2.5 20.5701 2.614C20.7521 2.68938 20.9175 2.79989 21.0569 2.93922C21.1962 3.07854 21.3067 3.24395 21.3821 3.426C21.4961 3.702 21.4961 4.051 21.4961 4.75C21.4961 5.449 21.4961 5.798 21.3821 6.074C21.3067 6.25605 21.1962 6.42146 21.0569 6.56078C20.9175 6.70011 20.7521 6.81062 20.5701 6.886C20.2941 7 19.9451 7 19.2461 7H16.2461C15.5471 7 15.1981 7 14.9221 6.886C14.74 6.81062 14.5746 6.70011 14.4353 6.56078C14.296 6.42146 14.1855 6.25605 14.1101 6.074C13.9961 5.798 13.9961 5.449 13.9961 4.75ZM13.9961 14C13.9961 12.586 13.9961 11.879 14.4361 11.44C14.8751 11 15.5821 11 16.9961 11H18.4961C19.9101 11 20.6171 11 21.0561 11.44C21.4961 11.879 21.4961 12.586 21.4961 14V18.5C21.4961 19.914 21.4961 20.621 21.0561 21.06C20.6171 21.5 19.9101 21.5 18.4961 21.5H16.9961C15.5821 21.5 14.8751 21.5 14.4361 21.06C13.9961 20.621 13.9961 19.914 13.9961 18.5V14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "story",
    label: "Our Story & Vision",
    targetId: "story",
    icon: (active) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M2 8V2H8M16 2H22V8M22 16V22H16M8 22H2V16M10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 6C8.446 6 6.667 9 4 12C6.667 15 8.446 18 12 18C15.554 18 17.333 15 20 12C17.333 9 15.554 6 12 6Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "values",
    label: "Core Values",
    targetId: "values",
    icon: (active) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M17 8.5H7M7 12.5H13M21 3H3V21H21V3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
  {
    id: "leadership",
    label: "Leadership Team",
    targetId: "teams",
    icon: (active) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <g clipPath="url(#clip_leadership_nav)">
          <path
            d="M7.63777 10.184C7.41762 9.66803 7.08432 9.20813 6.66249 8.83833C6.24067 8.46852 5.74112 8.19826 5.20078 8.04752C4.66043 7.89679 4.09312 7.86943 3.54078 7.96749C2.98844 8.06554 2.46521 8.28649 2.00977 8.614M16.3618 10.184C16.5819 9.66803 16.9152 9.20813 17.337 8.83833C17.7589 8.46852 18.2584 8.19826 18.7988 8.04752C19.3391 7.89679 19.9064 7.86943 20.4587 7.96749C21.0111 8.06554 21.5343 8.28649 21.9898 8.614M2.00977 5.102C2.00977 5.68123 2.23986 6.23674 2.64944 6.64632C3.05902 7.0559 3.61453 7.286 4.19377 7.286C4.773 7.286 5.32851 7.0559 5.73809 6.64632C6.14767 6.23674 6.37777 5.68123 6.37777 5.102C6.37777 4.52277 6.14767 3.96726 5.73809 3.55768C5.32851 3.1481 4.773 2.918 4.19377 2.918C3.61453 2.918 3.05902 3.1481 2.64944 3.55768C2.23986 3.96726 2.00977 4.52277 2.00977 5.102ZM17.6218 5.102C17.6218 5.68123 17.8519 6.23674 18.2614 6.64632C18.671 7.0559 19.2265 7.286 19.8058 7.286C20.385 7.286 20.9405 7.0559 21.3501 6.64632C21.7597 6.23674 21.9898 5.68123 21.9898 5.102C21.9898 4.52277 21.7597 3.96726 21.3501 3.55768C20.9405 3.1481 20.385 2.918 19.8058 2.918C19.2265 2.918 18.671 3.1481 18.2614 3.55768C17.8519 3.96726 17.6218 4.52277 17.6218 5.102ZM8.66277 4.087C8.66277 4.52522 8.74908 4.95915 8.91678 5.36401C9.08448 5.76888 9.33028 6.13675 9.64015 6.44662C9.95002 6.75648 10.3179 7.00229 10.7228 7.16999C11.1276 7.33769 11.5615 7.424 11.9998 7.424C12.438 7.424 12.8719 7.33769 13.2768 7.16999C13.6816 7.00229 14.0495 6.75648 14.3594 6.44662C14.6692 6.13675 14.9151 5.76888 15.0828 5.36401C15.2505 4.95915 15.3368 4.52522 15.3368 4.087C15.3368 3.20197 14.9852 2.35319 14.3594 1.72738C13.7336 1.10158 12.8848 0.75 11.9998 0.75C11.1147 0.75 10.266 1.10158 9.64015 1.72738C9.01434 2.35319 8.66277 3.20197 8.66277 4.087Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.7726 11.46C17.0409 10.6563 16.1495 10.0142 15.1554 9.5749C14.1613 9.13556 13.0864 8.90863 11.9996 8.90863C10.9127 8.90863 9.83783 9.13556 8.84373 9.5749C7.84964 10.0142 6.95823 10.6563 6.22656 11.46M15.9546 13.856C15.9381 14.8942 15.5141 15.8842 14.7741 16.6126C14.034 17.3409 13.0374 17.7491 11.9991 17.7491C10.9608 17.7491 9.96408 17.3409 9.22407 16.6126C8.48407 15.8842 8.06007 14.8942 8.04356 13.856"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.3937 13.852V15.339L19.6937 15.679C19.4981 16.5033 19.1695 17.2903 18.7207 18.009L19.6897 19.453L17.5897 21.553L16.1467 20.584C15.4272 21.0352 14.6388 21.3659 13.8127 21.563L13.4767 23.254H10.5167L10.1797 21.563C9.35396 21.3658 8.56593 21.0351 7.84673 20.584L6.39973 21.549L4.29973 19.449L5.26873 18.005C4.81965 17.2864 4.49067 16.4994 4.29473 15.675L2.59473 15.335V13.852"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip_leadership_nav">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: "partners",
    label: "Partners",
    targetId: "partner",
    icon: (active) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M2.5 20C2.73 17.097 5.181 14.672 8.188 14.53C8.44133 14.518 8.712 14.508 9 14.5L9.808 14.552C11.1715 14.6352 12.4694 15.1664 13.5 16.063M15 10.996C16.2993 11.1178 17.5257 11.6518 18.5 12.52M15.488 8C15.9517 7.70654 16.3335 7.30046 16.5979 6.81959C16.8623 6.33873 17.0006 5.79875 17 5.25C17 3.455 15.55 2 13.76 2C12.881 2 12.084 2.351 11.5 2.921M18.5 16V22M21.5 19H15.5M12.25 8.75C12.25 9.61195 11.9076 10.4386 11.2981 11.0481C10.6886 11.6576 9.86195 12 9 12C8.13805 12 7.3114 11.6576 6.7019 11.0481C6.09241 10.4386 5.75 9.61195 5.75 8.75C5.75 7.88805 6.09241 7.0614 6.7019 6.4519C7.3114 5.84241 8.13805 5.5 9 5.5C9.86195 5.5 10.6886 5.84241 11.2981 6.4519C11.9076 7.0614 12.25 7.88805 12.25 8.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "certifications",
    label: "Certifications",
    targetId: "certifications",
    icon: (active) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <g clipPath="url(#clip_certifications_nav)">
          <path
            d="M21.333 4H2.66634C2.31272 4 1.97358 4.14048 1.72353 4.39052C1.47348 4.64057 1.33301 4.97971 1.33301 5.33333V18.6667C1.33301 19.0203 1.47348 19.3594 1.72353 19.6095C1.97358 19.8595 2.31272 20 2.66634 20H12.6663L13.0463 19.5333L13.6663 18.7733L13.6063 18.6667H2.66634V5.33333H21.333V11.04C21.8396 11.3678 22.2898 11.7752 22.6663 12.2467V5.33333C22.6663 4.97971 22.5259 4.64057 22.2758 4.39052C22.0258 4.14048 21.6866 4 21.333 4Z"
            fill="currentColor"
          />
          <path d="M4.66699 8H16.0003V9.06667H4.66699V8Z" fill="currentColor" />
          <path d="M4.66699 10.6667H12.0003V11.7334H4.66699V10.6667Z" fill="currentColor" />
          <path d="M4.66699 15.3333H11.3337V16.4H4.66699V15.3333Z" fill="currentColor" />
          <path
            d="M18.3069 11.4866C17.4538 11.4799 16.6184 11.7306 15.9101 12.2061C15.2017 12.6816 14.6533 13.3597 14.3365 14.1518C14.0196 14.9439 13.9491 15.8132 14.1341 16.646C14.3191 17.4789 14.7511 18.2365 15.3735 18.82L14.0802 20.4L14.6802 22.8066L17.1202 19.8333C17.8926 20.0617 18.7145 20.0617 19.4869 19.8333L21.9269 22.8066L22.5269 20.4L21.2335 18.82C21.856 18.2365 22.2879 17.4789 22.473 16.646C22.658 15.8132 22.5875 14.9439 22.2706 14.1518C21.9538 13.3597 21.4053 12.6816 20.697 12.2061C19.9886 11.7306 19.1533 11.4799 18.3002 11.4866H18.3069ZM18.3069 18.6066C17.7404 18.5988 17.1888 18.4236 16.7216 18.1031C16.2544 17.7826 15.8923 17.3311 15.6809 16.8055C15.4696 16.2798 15.4184 15.7033 15.5337 15.1486C15.6491 14.5939 15.9258 14.0857 16.3292 13.6878C16.7326 13.29 17.2446 13.0203 17.8009 12.9126C18.3571 12.8049 18.9328 12.8641 19.4555 13.0827C19.9782 13.3013 20.4246 13.6696 20.7386 14.1412C21.0526 14.6128 21.2202 15.1667 21.2202 15.7333C21.2132 16.5001 20.9027 17.2329 20.3567 17.7714C19.8107 18.3099 19.0737 18.6102 18.3069 18.6066Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip_certifications_nav">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export default function AboutHero() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (item: NavItem) => {
    setActiveTab(item.id);
    if (item.targetId) {
      const element = document.getElementById(item.targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[760px] flex flex-col justify-between overflow-hidden">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/hero.jpg"
          alt="Mazaya Logistics Fleet"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-center"
        />

        {/* Left Dark Vignette / Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-45% md:via-black/70 md:via-55% to-transparent z-10" />

        {/* Top Vignette */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#070502]/90 via-[#070502]/40 to-transparent z-10" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#070502] via-[#070502]/70 to-transparent z-10" />
      </div>

      {/* ── Main Hero Content ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 flex-1 flex flex-col justify-center">
        {/* Badge: = ABOUT US */}
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <span className="flex flex-col gap-[3px]">
            <span className="w-3.5 h-[2px] bg-[#FFBB00] rounded-full" />
            <span className="w-3.5 h-[2px] bg-[#FFBB00] rounded-full" />
          </span>
          <span className="text-[#FFBB00] text-xs sm:text-sm font-bold uppercase tracking-wider font-inter">
            ABOUT US
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-manrope text-3xl sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.12]">
          Building Connections.
          <span className="block text-[#f3b749] mt-1 sm:mt-2">
            Delivering Excellence.
          </span>
        </h1>

        {/* Divider bar */}
        <div className="w-20 sm:w-28 h-[2px] bg-[#FFBB00] my-5 sm:my-7" />

        {/* Description */}
        <p className="font-inter text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-normal">
          At Mazaya Logistics, we are committed to delivering innovative and
          reliable logistics solutions that empower businesses to grow and
          succeed.
        </p>
      </div>

      {/* ── Bottom Sub-Navigation Floating Bar ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10 pt-10 sm:pt-14">
        <div className="w-full rounded-xl sm:rounded-2xl border border-[#FFBB00]/40 bg-[#120d06]/85 backdrop-blur-md shadow-[0_0_25px_rgba(255,187,0,0.12)] px-4 sm:px-8 py-3.5 sm:py-4.5">
          <div className="flex items-center justify-between gap-6 sm:gap-8 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item)}
                  className={`flex items-center gap-2.5 whitespace-nowrap text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#FFBB00] font-semibold underline underline-offset-8 decoration-[#FFBB00] decoration-2"
                      : "text-[#FFEAB1]/85 hover:text-[#FFBB00] font-normal"
                  }`}
                >
                  <span className={isActive ? "text-[#FFBB00]" : "text-[#FFEAB1]/85 group-hover:text-[#FFBB00]"}>
                    {item.icon(isActive)}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
