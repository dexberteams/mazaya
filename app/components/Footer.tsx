"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className="relative w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20 font-manrope">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,110,25,0.20)_0%,rgba(0,0,0,0)_68%)]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D49A24]/[0.05] blur-[120px]" />
      </div>

      {/* =========================================================
          EARTH
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className="
            earth-planet-container
            shrink-0
            translate-y-[45%]
            opacity-55
            sm:translate-y-[48%]
            sm:opacity-65
            lg:translate-y-[38%]
            lg:opacity-70
          "
          style={{
            width: "clamp(700px, 90vw, 1450px)",
            height: "clamp(700px, 90vw, 1450px)",
          }}
        >
          {/* Day surface */}
          <div
            className="earth-layer-day"
            style={
              !isHomePage
                ? {
                  animation: "none",
                  backgroundPosition: "52% 50%",
                }
                : undefined
            }
          />

          {/* Atmosphere */}
          <div
            className="earth-layer-atmosphere"
            style={!isHomePage ? { animation: "none" } : undefined}
          />

          {/* Clouds */}
          <div
            className="earth-layer-clouds"
            style={!isHomePage ? { animation: "none" } : undefined}
          />

          {/* Inner shadow */}
          <div className="earth-layer-inner-shadow" />
        </div>
      </div>

      {/* =========================================================
          FOOTER WRAPPER
      ========================================================= */}
      <div className="relative z-10 mx-auto w-full ">
        {/* =======================================================
            MAZAYA WATERMARK
        ======================================================= */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-42px]
            z-0
            -translate-x-1/2
            opacity-40
            sm:top-[-65px]
            lg:top-[-165px]
           w-full

          "
        >
          <svg
            viewBox="0 0 1300 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full"
          >
            <g clipPath="url(#clip0_2823_432)">
              <path
                d="M576.976 116.694V193.461H544.367V118.693C544.367 104.489 534.891 94.3164 520.717 94.3164C509.021 94.3164 500.062 100.548 494.836 110.519V193.461H462.227V118.693C462.227 104.489 452.762 94.2603 438.577 94.2603C425.883 94.2603 416.43 101.491 411.451 112.708L411.193 193.461H378.842V67.3689H411.945L410.206 79.0798H410.947C418.919 70.3668 430.615 64.8762 445.305 64.8762C464.211 64.8762 478.946 73.3535 487.121 87.3325C495.083 73.623 508.528 64.8762 527.692 64.8762C557.554 64.8538 576.976 86.5353 576.976 116.694Z"
                stroke="#D49A24"
                strokeOpacity="0.38"
                strokeWidth="3"
                strokeMiterlimit="10"
              />

              <path
                d="M729.056 67.3689V193.461H695.707L697.445 182.233H696.447C688.732 190.205 677.53 195.942 662.1 195.942C627.001 195.942 597.879 168.029 597.879 130.392C597.879 92.7557 627.034 64.8425 662.1 64.8425C677.53 64.8425 688.732 70.5801 696.447 78.5521H697.49L695.752 67.3239L729.056 67.3689ZM696.2 149.615V111.215C690.235 100.492 679.548 94.5185 665.834 94.5185C644.674 94.5185 630.735 109.463 630.735 130.449C630.735 151.434 644.674 166.379 665.834 166.379C679.548 166.289 690.235 160.315 696.2 149.592V149.615Z"
                stroke="#D49A24"
                strokeOpacity="0.38"
                strokeWidth="3"
                strokeMiterlimit="10"
              />

              <path
                d="M862.477 165.548V193.461H753.951V169.287L816.423 95.2596H756.441V67.3689H861.479V91.5206L799.008 165.548H862.477Z"
                stroke="#D49A24"
                strokeOpacity="0.38"
                strokeWidth="3"
                strokeMiterlimit="10"
              />

              <path
                d="M1011.08 67.3689V193.461H977.719L979.468 182.233H978.47C970.755 190.205 959.553 195.942 944.123 195.942C909.024 195.942 879.902 168.029 879.902 130.392C879.902 92.7557 909.058 64.8425 944.123 64.8425C959.553 64.8425 970.755 70.5801 978.47 78.5521H979.468L977.719 67.3689H1011.08ZM978.224 149.615V111.215C972.224 100.492 961.538 94.5185 947.857 94.5185C926.697 94.5185 912.758 109.463 912.758 130.449C912.758 151.434 926.697 166.379 947.857 166.379C961.538 166.289 972.224 160.315 978.224 149.592V149.615Z"
                stroke="#D49A24"
                strokeOpacity="0.38"
                strokeWidth="3"
                strokeMiterlimit="10"
              />

              <path
                d="M1164.4 67.3689L1084.51 240.282H1053.11L1080.02 182.963L1027.51 67.3689H1062.85L1096.2 144.383L1129.06 67.3689H1164.4Z"
                stroke="#D49A24"
                strokeOpacity="0.38"
                strokeWidth="3"
                strokeMiterlimit="10"
              />

              <path
                d="M1298.32 67.3689V193.461H1264.97L1266.71 182.233H1265.71C1257.99 190.205 1246.79 195.942 1231.36 195.942C1196.26 195.942 1167.14 168.029 1167.14 130.392C1167.14 92.7557 1196.3 64.8425 1231.36 64.8425C1246.79 64.8425 1257.99 70.5801 1265.71 78.5521H1266.71L1264.97 67.3239L1298.32 67.3689ZM1265.46 149.615V111.215C1259.49 100.492 1248.79 94.5185 1235.1 94.5185C1213.94 94.5185 1200 109.463 1200 130.449C1200 151.434 1213.94 166.379 1235.1 166.379C1248.79 166.289 1259.49 160.315 1265.46 149.592V149.615Z"
                stroke="#D49A24"
                strokeOpacity="0.38"
                strokeWidth="3"
                strokeMiterlimit="10"
              />

              <path
                d="M242.215 1.97607L230.014 9.30805L152.169 56.2192L77.7888 13.5523L63.9848 5.61399L1.68164 43.4753V228.549H77.7888V101.368L120.546 125.912L153.066 144.596L180.809 127.877L229.969 98.2573L306.133 52.3904V41.297L242.215 1.97607Z"
                stroke="#D49A24"
                strokeOpacity="0.38"
                strokeWidth="3"
                strokeMiterlimit="10"
              />

              <path
                d="M230.016 228.549H306.134V140.475L230.027 186.51L230.016 228.549Z"
                stroke="#D49A24"
                strokeOpacity="0.38"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
            </g>

            <defs>
              <clipPath id="clip0_2823_432">
                <rect width="1300" height="242" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* =======================================================
            MAIN FOOTER CARD
        ======================================================= */}
        <div
          className="
            relative
            z-10
            overflow-hidden
            rounded-[4px]
            border
            border-[#A9791C]
            bg-[rgba(18,14,6,0.70)]
            
            backdrop-blur-[3px]

            px-5
            py-7

            sm:px-8
            sm:py-8

            lg:px-7
            lg:py-24

            xl:px-7
          "
        >
          {/* subtle inner glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,154,36,0.10),transparent_55%)]" />

          {/* =====================================================
              DESKTOP GRID
          ===================================================== */}
          <div
            className="
              relative
              grid
              grid-cols-1

              lg:grid-cols-[1fr_1.35fr_1fr]
              lg:items-stretch
              lg:gap-8
          "
          >
            {/* ===================================================
                LEFT — BRAND
            =================================================== */}
            <div
              className="
                flex
                flex-col

                items-center
                text-center

                lg:items-start
                lg:text-left
              "
            >
              {/* Logo */}
              <Link
                href="/"
                className="inline-flex transition-opacity duration-300 hover:opacity-90"
              >
                <Image
                  src="/logo/Logo.png"
                  alt="Mazaya Logistics"
                  width={160}
                  height={40}
                  priority
                  className="
                    h-[25px]
                    w-auto
                    object-contain

                    sm:h-[27px]

                    lg:h-[25px]
                  "
                />
              </Link>

              {/* Desktop description */}
              <p
                className="
                  mt-4
                  max-w-[330px]
                  text-[11px]
                  font-normal
                  leading-[1.55]
                  text-[#B9B9B9]
                  font-inter

                  sm:text-[12px]

                  lg:max-w-[250px]
                  lg:text-[10px]
                  lg:leading-[1.55]
                "
              >
                Mazaya Logistics delivers reliable transportation,
                warehousing, fulfillment and supply chain solutions across
                Saudi Arabia and GCC with efficiency, innovation and customer
                satisfaction.
              </p>

              {/* Social icons */}
              <div className="mt-4 flex items-center justify-center gap-[7px] lg:justify-start">
                <SocialIcon
                  href="https://facebook.com"
                  src="/home/icons/facebook.png"
                  alt="Facebook"
                />

                <SocialIcon
                  href="https://instagram.com"
                  src="/home/icons/instragram.png"
                  alt="Instagram"
                />

                <SocialIcon
                  href="https://linkedin.com"
                  src="/home/icons/linkedin.png"
                  alt="LinkedIn"
                />

                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <div className="flex h-[17px] w-[17px] items-center justify-center rounded-[3px] bg-[#1DA1F2] text-white sm:h-[18px] sm:w-[18px]">
                    <svg
                      className="h-[10px] w-[10px] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                    </svg>
                  </div>
                </Link>

                <SocialIcon
                  href="https://youtube.com"
                  src="/home/icons/youtube.png"
                  alt="YouTube"
                />
              </div>

              {/* Developed */}
              <div
                className="
                  mt-6
                  text-center

                  lg:mt-auto
                  lg:pt-8
                  lg:text-left
                "
              >
                <p className="flex items-center justify-center gap-1 text-[10px] font-medium text-white lg:justify-start">
                  Developed by:

                  <Link
                    href="https://dexber.vercel.app/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-[#D49A24]"
                  >
                    <svg
                      className="h-[11px] w-[11px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
                    </svg>

                    Dexber
                  </Link>
                </p>

                <p className="mx-auto mt-2 max-w-[290px] text-[9px] leading-[1.45] text-[#777777] font-inter lg:mx-0 lg:max-w-[270px]">
                  Design concepts are created by Dexber for presentation
                  purposes. Third-party content and trademarks belong to their
                  respective owners.
                </p>
              </div>
            </div>

            {/* ===================================================
                CENTER — CTA
            =================================================== */}
            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                text-center

                lg:mt-0
                lg:justify-start
                lg:pt-0
              "
            >
              <h3
                className="
                  max-w-[470px]
                  text-[19px]
                  font-bold
                  leading-[1.2]
                  tracking-[-0.025em]
                  text-white

                  sm:text-[22px]

                  lg:text-[23px]
                  xl:text-[24px]
                "
              >
                Ready to Move Your Business Forward?
              </h3>

              <p
                className="
                  mt-2
                  text-[11px]
                  font-normal
                  leading-[1.4]
                  text-[#D4D4D4]

                  sm:text-[12px]

                  lg:text-[11px]
                "
              >
                Reliable Logistics Solutions Across Saudi Arabia &amp; Beyond
              </p>

              {/* Buttons */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <Link
                  href="/getQuote"
                  className="
                    inline-flex
                    h-[34px]
                    min-w-[106px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[5px]
                    bg-white
                    px-4
                    text-[11px]
                    font-medium
                    text-[#111]

                    transition-all
                    duration-300

                    hover:bg-[#FFBB00]
                    hover:shadow-[0_0_18px_rgba(255,187,0,0.35)]
                  "
                >
                  Get Quote
                  <span className="text-[14px] leading-none">→</span>
                </Link>

                <Link
                  href="/contactus"
                  className="
                    inline-flex
                    h-[34px]
                    min-w-[112px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[5px]
                    border
                    border-[#756039]
                    bg-[rgba(26,20,10,0.45)]
                    px-4
                    text-[11px]
                    font-medium
                    text-white

                    transition-all
                    duration-300

                    hover:border-white
                    hover:bg-[rgba(37,29,15,0.75)]
                  "
                >
                  Contact Us
                  <span className="text-[14px] leading-none">→</span>
                </Link>
              </div>

              {/* =================================================
                  MOBILE DESCRIPTION
                  ================================================= */}
              <p
                className="
                  mt-6
                  max-w-[290px]
                  text-[11px]
                  leading-[1.45]
                  text-[#B8B8B8]
                  font-inter

                  lg:hidden
                "
              >
                Mazaya Logistics delivers reliable transportation,
                warehousing, fulfillment and supply chain solutions across
                Saudi Arabia and GCC with efficiency, innovation and customer
                satisfaction.
              </p>

              {/* MOBILE SOCIALS */}
              <div className="mt-4 flex items-center gap-[7px] lg:hidden">
                <SocialIcon
                  href="https://facebook.com"
                  src="/home/icons/facebook.png"
                  alt="Facebook"
                />

                <SocialIcon
                  href="https://instagram.com"
                  src="/home/icons/instragram.png"
                  alt="Instagram"
                />

                <SocialIcon
                  href="https://linkedin.com"
                  src="/home/icons/linkedin.png"
                  alt="LinkedIn"
                />

                <SocialIcon
                  href="https://twitter.com"
                  src="/home/icons/twitter.png"
                  alt="Twitter"
                />

                <SocialIcon
                  href="https://youtube.com"
                  src="/home/icons/youtube.png"
                  alt="YouTube"
                />
              </div>

              {/* MOBILE DEVELOPED BY */}
              <div className="mt-5 text-center lg:hidden">
                <p className="flex items-center justify-center gap-1 text-[10px] font-medium text-white">
                  Developed by:

                  <Link
                    href="https://dexber.vercel.app/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-white"
                  >
                    <svg
                      className="h-[11px] w-[11px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
                    </svg>

                    Dexber
                  </Link>
                </p>

                <p className="mx-auto mt-2 max-w-[280px] text-[9px] leading-[1.45] text-[#777] font-inter">
                  Design concepts are created by Dexber for presentation
                  purposes. Third-party content and trademarks belong to their
                  respective owners.
                </p>
              </div>
            </div>

            {/* ===================================================
                RIGHT — LEGAL
            =================================================== */}
            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-end
                text-center

                lg:mt-0
                lg:items-end
                lg:text-right
              "
            >
              <p className="text-[10px] font-medium text-white">
                © 2026 Mazaya Logistics. All Rights Reserved.
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[9px] text-[#A3A3A3] lg:justify-end">
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-[#D49A24]"
                >
                  Privacy Policy
                </Link>

                <span>|</span>

                <Link
                  href="/terms"
                  className="transition-colors hover:text-[#D49A24]"
                >
                  Terms &amp; Conditions
                </Link>

                <span>|</span>

                <Link
                  href="/sitemap"
                  className="transition-colors hover:text-[#D49A24]"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>

          {/* =====================================================
              MOBILE COPYRIGHT
          ===================================================== */}
          <div className="relative mt-5 text-center lg:hidden">
            <p className="text-[9px] font-medium text-white">
              © 2026 Mazaya Logistics. All Rights Reserved.
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 text-[9px] text-[#A3A3A3]">
              <Link
                href="/privacy"
                className="transition-colors hover:text-[#D49A24]"
              >
                Privacy Policy
              </Link>

              <span>|</span>

              <Link
                href="/terms"
                className="transition-colors hover:text-[#D49A24]"
              >
                Terms &amp; Conditions
              </Link>

              <span>|</span>

              <Link
                href="/sitemap"
                className="transition-colors hover:text-[#D49A24]"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===============================================================
   SOCIAL ICON COMPONENT
=============================================================== */

function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="transition-transform duration-200 hover:scale-110"
    >
      <Image
        src={src}
        alt={alt}
        width={18}
        height={18}
        className="h-[17px] w-[17px] object-contain sm:h-[18px] sm:w-[18px]"
      />
    </Link>
  );
}




























































// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Footer() {
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   return (
//     <footer className="relative w-full  px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 font-manrope">
//       {/* ── Ambient Radial Glow ── */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,110,25,0.22)_0%,transparent_70%)]" />

//       {/* ── Background Earth Planet (Animated on Home, Static on other pages) ── */}
//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
//         <div
//           className="earth-planet-container shrink-0 opacity-65 sm:opacity-75 translate-y-[42%] sm:translate-y-[48%] lg:translate-y-[37%]"
//           style={{
//             width: "clamp(800px, 90vw, 1450px)",
//             height: "clamp(800px, 90vw, 1450px)",
//           }}
//         >
//           {/* Layer 1 — Day surface: earth.png scrolling on home, static on other pages */}
//           <div
//             className="earth-layer-day"
//             style={
//               !isHomePage
//                 ? { animation: "none", backgroundPosition: "52% 50%" }
//                 : undefined
//             }
//           />

//           {/* Layer 2 — Atmosphere: amber radial glow pulsing */}
//           <div
//             className="earth-layer-atmosphere"
//             style={!isHomePage ? { animation: "none" } : undefined}
//           />

//           {/* Layer 3 — Cloud drift */}
//           <div
//             className="earth-layer-clouds"
//             style={!isHomePage ? { animation: "none" } : undefined}
//           />

//           {/* Layer 4 — Inner shadow: depth & edge darkness */}
//           <div className="earth-layer-inner-shadow" />
//         </div>
//       </div>

//       {/* ── Outer Card Wrapper with Centered Watermark ── */}
//       <div className="relative z-10 mx-auto w-full">
//         <div className="w-full pointer-events-none absolute -top-14 sm:-top-20 lg:-top-45 left-1/2 -translate-x-1/2  z-0 flex justify-center select-none">
//           <svg
//             viewBox="0 0 1300 242"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full h-auto"
//           >
//             <g clipPath="url(#clip0_2823_432)">
//               <path
//                 d="M576.976 116.694V193.461H544.367V118.693C544.367 104.489 534.891 94.3164 520.717 94.3164C509.021 94.3164 500.062 100.548 494.836 110.519V193.461H462.227V118.693C462.227 104.489 452.762 94.2603 438.577 94.2603C425.883 94.2603 416.43 101.491 411.451 112.708L411.193 193.461H378.842V67.3689H411.945L410.206 79.0798H410.947C418.919 70.3668 430.615 64.8762 445.305 64.8762C464.211 64.8762 478.946 73.3535 487.121 87.3325C495.083 73.623 508.528 64.8762 527.692 64.8762C557.554 64.8538 576.976 86.5353 576.976 116.694Z"
//                 stroke="#D49A24"
//                 strokeOpacity="0.38"
//                 strokeWidth="3"
//                 strokeMiterlimit="10"
//               />
//               <path
//                 d="M729.056 67.3689V193.461H695.707L697.445 182.233H696.447C688.732 190.205 677.53 195.942 662.1 195.942C627.001 195.942 597.879 168.029 597.879 130.392C597.879 92.7557 627.034 64.8425 662.1 64.8425C677.53 64.8425 688.732 70.5801 696.447 78.5521H697.49L695.752 67.3239L729.056 67.3689ZM696.2 149.615V111.215C690.235 100.492 679.548 94.5185 665.834 94.5185C644.674 94.5185 630.735 109.463 630.735 130.449C630.735 151.434 644.674 166.379 665.834 166.379C679.548 166.289 690.235 160.315 696.2 149.592V149.615Z"
//                 stroke="#D49A24"
//                 strokeOpacity="0.38"
//                 strokeWidth="3"
//                 strokeMiterlimit="10"
//               />
//               <path
//                 d="M862.477 165.548V193.461H753.951V169.287L816.423 95.2596H756.441V67.3689H861.479V91.5206L799.008 165.548H862.477Z"
//                 stroke="#D49A24"
//                 strokeOpacity="0.38"
//                 strokeWidth="3"
//                 strokeMiterlimit="10"
//               />
//               <path
//                 d="M1011.08 67.3689V193.461H977.719L979.468 182.233H978.47C970.755 190.205 959.553 195.942 944.123 195.942C909.024 195.942 879.902 168.029 879.902 130.392C879.902 92.7557 909.058 64.8425 944.123 64.8425C959.553 64.8425 970.755 70.5801 978.47 78.5521H979.468L977.719 67.3689H1011.08ZM978.224 149.615V111.215C972.224 100.492 961.538 94.5185 947.857 94.5185C926.697 94.5185 912.758 109.463 912.758 130.449C912.758 151.434 926.697 166.379 947.857 166.379C961.538 166.289 972.224 160.315 978.224 149.592V149.615Z"
//                 stroke="#D49A24"
//                 strokeOpacity="0.38"
//                 strokeWidth="3"
//                 strokeMiterlimit="10"
//               />
//               <path
//                 d="M1164.4 67.3689L1084.51 240.282H1053.11L1080.02 182.963L1027.51 67.3689H1062.85L1096.2 144.383L1129.06 67.3689H1164.4Z"
//                 stroke="#D49A24"
//                 strokeOpacity="0.38"
//                 strokeWidth="3"
//                 strokeMiterlimit="10"
//               />
//               <path
//                 d="M1298.32 67.3689V193.461H1264.97L1266.71 182.233H1265.71C1257.99 190.205 1246.79 195.942 1231.36 195.942C1196.26 195.942 1167.14 168.029 1167.14 130.392C1167.14 92.7557 1196.3 64.8425 1231.36 64.8425C1246.79 64.8425 1257.99 70.5801 1265.71 78.5521H1266.71L1264.97 67.3239L1298.32 67.3689ZM1265.46 149.615V111.215C1259.49 100.492 1248.79 94.5185 1235.1 94.5185C1213.94 94.5185 1200 109.463 1200 130.449C1200 151.434 1213.94 166.379 1235.1 166.379C1248.79 166.289 1259.49 160.315 1265.46 149.592V149.615Z"
//                 stroke="#D49A24"
//                 strokeOpacity="0.38"
//                 strokeWidth="3"
//                 strokeMiterlimit="10"
//               />
//               <path
//                 d="M242.215 1.97607L230.014 9.30805L152.169 56.2192L77.7888 13.5523L63.9848 5.61399L1.68164 43.4753V228.549H77.7888V101.368L120.546 125.912L153.066 144.596L180.809 127.877L229.969 98.2573L306.133 52.3904V41.297L242.215 1.97607Z"
//                 stroke="#D49A24"
//                 strokeOpacity="0.38"
//                 strokeWidth="3"
//                 strokeMiterlimit="10"
//               />
//               <path
//                 d="M230.016 228.549H306.134V140.475L230.027 186.51L230.016 228.549Z"
//                 stroke="#D49A24"
//                 strokeOpacity="0.38"
//                 strokeWidth="3"
//                 strokeMiterlimit="10"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_2823_432">
//                 <rect width="1300" height="242" fill="white" />
//               </clipPath>
//             </defs>
//           </svg>
//         </div>


//         {/* ── Main Glassmorphism Footer Card (Pixel-perfect to Figma) ── */}
//         <div className="relative z-10 rounded-xl border border-[#9E731C]/80 bg-[#120E06]/50 backdrop-blur[9px] p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(200,140,20,0.22)]">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
//             {/* ── Left Column: Brand Info, Socials, Dexber Credit ── */}
//             <div className="lg:col-span-5 flex flex-col justify-between">
//               <div>
//                 {/* Logo */}
//                 <Link href="/" className="inline-block">
//                   <Image
//                     src="/logo/Logo.png"
//                     alt="Mazaya Logistics"
//                     width={160}
//                     height={40}
//                     className="h-7 sm:h-8 w-auto object-contain"
//                   />
//                 </Link>

//                 {/* Description */}
//                 <p className="mt-4 text-[13px] leading-[1.65] text-[#b8b8b8] font-inter font-normal max-w-[340px]">
//                   Mazaya Logistics delivers reliable transportation, warehousing,
//                   fulfillment and supply chain solutions across Saudi Arabia and
//                   GCC with efficiency, innovation and customer satisfaction.
//                 </p>

//                 {/* Social Icons row */}
//                 <div className="mt-5 flex items-center gap-2.5">
//                   <Link
//                     href="https://facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="transition-transform hover:scale-110"
//                   >
//                     <Image
//                       src="/home/icons/facebook.png"
//                       alt="Facebook"
//                       width={22}
//                       height={22}
//                       className="h-5 w-5 sm:h-[22px] sm:w-[22px] object-contain"
//                     />
//                   </Link>
//                   <Link
//                     href="https://instagram.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="transition-transform hover:scale-110"
//                   >
//                     <Image
//                       src="/home/icons/instragram.png"
//                       alt="Instagram"
//                       width={22}
//                       height={22}
//                       className="h-5 w-5 sm:h-[22px] sm:w-[22px] object-contain"
//                     />
//                   </Link>
//                   <Link
//                     href="https://linkedin.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="LinkedIn"
//                     className="transition-transform hover:scale-110"
//                   >
//                     <Image
//                       src="/home/icons/linkedin.png"
//                       alt="LinkedIn"
//                       width={22}
//                       height={22}
//                       className="h-5 w-5 sm:h-[22px] sm:w-[22px] object-contain"
//                     />
//                   </Link>
//                   <Link
//                     href="https://twitter.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Twitter"
//                     className="transition-transform hover:scale-110"
//                   >
//                     <div className="w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-[4px] bg-[#1DA1F2] flex items-center justify-center text-white">
//                       <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
//                         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
//                       </svg>
//                     </div>
//                   </Link>
//                   <Link
//                     href="https://youtube.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="YouTube"
//                     className="transition-transform hover:scale-110"
//                   >
//                     <Image
//                       src="/home/icons/youtube.png"
//                       alt="YouTube"
//                       width={22}
//                       height={22}
//                       className="h-5 w-5 sm:h-[22px] sm:w-[22px] object-contain"
//                     />
//                   </Link>
//                 </div>
//               </div>

//               {/* Developed By & Disclaimer */}
//               <div className="mt-8 lg:mt-12 space-y-1.5 text-xs">
//                 <p className="flex items-center gap-1.5 text-xs text-white font-medium">
//                   Developed by:
//                   <Link
//                     href="https://dexber.vercel.app/en"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 font-semibold text-white hover:text-yellow-400 transition-colors"
//                   >
//                     <svg
//                       className="w-3.5 h-3.5 text-white"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <line x1="12" y1="2" x2="12" y2="22" />
//                       <line x1="2" y1="12" x2="22" y2="12" />
//                       <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
//                       <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
//                     </svg>
//                     Dexber
//                   </Link>
//                 </p>
//                 <p className="text-[11px] leading-[1.4] text-[#7a7a7a] font-inter max-w-[340px]">
//                   Design concepts are created by Dexber for presentation purposes.
//                   Third-party content and trademarks belong to their respective
//                   owners.
//                 </p>
//               </div>
//             </div>

//             {/* ── Right Column: CTA & Legal Links ── */}
//             <div className="lg:col-span-4 flex flex-col justify-between">
//               {/* CTA Section */}
//               <div className="text-center pt-2 sm:pt-4">
//                 <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight font-manrope">
//                   Ready to Move Your Business Forward?
//                 </h3>
//                 <p className="mt-2.5 mb-7 text-xs sm:text-sm text-[#d4d4d4] font-inter font-normal">
//                   Reliable Logistics Solutions Across Saudi Arabia & Beyond
//                 </p>

//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap items-center justify-center gap-4">
//                   <Link
//                     href="/getQuote"
//                     className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#FFBB00] hover:shadow-[0_0_20px_rgba(255,187,0,0.4)]"
//                   >
//                     Get Quote &rarr;
//                   </Link>
//                   <Link
//                     href="/contactus"
//                     className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#6B542A] bg-[#1a140a]/60 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-[#251d0f]"
//                   >
//                     Contact Us &rarr;
//                   </Link>
//                 </div>
//               </div>

//               {/* Bottom Rights & Policy Links */}
//               <div className="mt-8 lg:mt-auto flex flex-col items-center lg:items-end gap-1.5 text-xs text-[#a3a3a3]">
//                 <p className="text-white text-center lg:text-right font-medium text-xs">
//                   &copy; 2026 Mazaya Logistics. All Rights Reserved.
//                 </p>
//                 <div className="flex items-center justify-center lg:justify-end gap-2 text-xs text-[#a3a3a3]">
//                   <Link
//                     href="/privacy"
//                     className="hover:text-yellow-400 transition-colors"
//                   >
//                     Privacy Policy
//                   </Link>
//                   <span>|</span>
//                   <Link
//                     href="/terms"
//                     className="hover:text-yellow-400 transition-colors"
//                   >
//                     Terms & Conditions
//                   </Link>
//                   <span>|</span>
//                   <Link
//                     href="/sitemap"
//                     className="hover:text-yellow-400 transition-colors"
//                   >
//                     Sitemap
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }
