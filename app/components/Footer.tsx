"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const showDexbar = isHomePage || isAboutPage;

  return (
    <footer className="relative w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20 font-manrope">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,110,25,0.20)_0%,rgba(0,0,0,0)_68%)]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] sm:h-[500px] sm:w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D49A24]/[0.06] blur-[90px] sm:blur-[120px]" />
      </div>

      {/* =========================================================
          EARTH (Centered in the middle of footer on mobile)
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className="
            earth-planet-container
            shrink-0
            translate-y-0
            opacity-75
            sm:translate-y-0
            sm:opacity-75
            lg:translate-y-[38%]
            lg:opacity-70
            w-[clamp(320px,88vw,480px)]
            h-[clamp(320px,88vw,480px)]
            lg:w-[clamp(700px,90vw,1450px)]
            lg:h-[clamp(700px,90vw,1450px)]
          "
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
      <div className="relative z-10 mx-auto w-full">
        {/* =======================================================
            MAZAYA WATERMARK
        ======================================================= */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-32px]
            z-0
            -translate-x-1/2
            opacity-30
            sm:opacity-40
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
              FOOTER CONTENT GRID
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
                    h-[26px]
                    w-auto
                    object-contain
                    sm:h-[27px]
                    lg:h-[25px]
                  "
                />
              </Link>

              {/* Desktop description (hidden on mobile, shown on lg+) */}
              <p
                className="
                  hidden
                  lg:block
                  mt-4
                  max-w-[250px]
                  text-[10px]
                  font-normal
                  leading-[1.55]
                  text-[#B9B9B9]
                  font-inter
                "
              >
                Mazaya Masanda Logistics delivers reliable transportation,
                warehousing, fulfillment and supply chain solutions across Saudi
                Arabia and GCC with efficiency, innovation and customer
                satisfaction.
              </p>

              {/* Desktop social icons (hidden on mobile, shown on lg+) */}
              <div className="hidden lg:flex mt-4 items-center justify-start gap-[7px]">
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
                  href="https://www.linkedin.com/"
                  src="/home/icons/linkedin.png"
                  alt="LinkedIn"
                />
                <SocialIcon
                  href="https://wa.me/9960551010596"
                  src="/home/icons/whats-app.webp"
                  alt="Whatsapp"
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

              {/* Desktop developed by (hidden on mobile, shown on lg+) */}

              {showDexbar && (
                <div className="mt-2 hidden lg:block">
                  <p className="flex items-center justify-start gap-1 text-[14px] font-medium text-white">
                    Developed by:
                    <Link
                      href="https://dexber.vercel.app/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Image
                        src="/logo/Dexber_White.png"
                        alt="Dexbar"
                        width={250}
                        height={80}
                        className="h-auto w-[80px] object-contain"
                      />
                    </Link>
                  </p>

                  <p className="mt-2 max-w-[270px] font-inter text-[9px] leading-[1.45] text-[#777777]">
                    Design concepts are created by Dexbar for presentation
                    purposes. Third-party content and trademarks belong to their
                    respective owners.
                  </p>
                </div>
              )}
            </div>

            {/* ===================================================
                CENTER — CTA & MOBILE CONTENT
            =================================================== */}
            <div
              className="
                mt-6
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
                  leading-[1.25]
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
                  max-w-[320px]
                  text-[11px]
                  font-normal
                  leading-[1.4]
                  text-[#D4D4D4]

                  sm:max-w-none
                  sm:text-[12px]

                  lg:text-[11px]
                "
              >
                Reliable Logistics Solutions Across Saudi Arabia &amp; Beyond
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <Link
                  href="/getQuote"
                  className="
                    inline-flex
                    h-[36px]
                    min-w-[108px]
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
                    active:scale-95
                  "
                >
                  Get Quote
                  <span className="text-[14px] leading-none">→</span>
                </Link>

                <Link
                  href="/contactus"
                  className="
                    inline-flex
                    h-[36px]
                    min-w-[114px]
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
                    active:scale-95
                  "
                >
                  Contact Us
                  <span className="text-[14px] leading-none">→</span>
                </Link>
              </div>

              {/* =================================================
                  MOBILE DESCRIPTION (only on mobile)
              ================================================= */}
              <p
                className="
                  mt-6
                  max-w-[320px]
                  text-[11px]
                  leading-[1.5]
                  text-[#B8B8B8]
                  font-inter

                  lg:hidden
                "
              >
                Mazaya masanda Logistics delivers reliable transportation,
                warehousing, fulfillment and supply chain solutions across Saudi
                Arabia and GCC with efficiency, innovation and customer
                satisfaction.
              </p>

              {/* MOBILE SOCIALS (only on mobile) */}
              <div className="mt-4 flex items-center justify-center gap-2.5 lg:hidden">
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
                  href="https://www.linkedin.com/"
                  src="/home/icons/linkedin.png"
                  alt="LinkedIn"
                />
                <SocialIcon
                  href="https://wa.me/9960551010596"
                  src="/home/icons/whats-app.webp"
                  alt="Whatsapp"
                />

                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-[3px] bg-[#1DA1F2] text-white">
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

              {/* MOBILE DEVELOPED BY (only on mobile) */}

              {showDexbar && (
                <div className="mt-5 text-center lg:hidden">
                  <p className="flex items-center justify-center gap-1 text-[12px] font-medium text-white">
                    Developed by:
                    <Link
                      href="https://dexber.vercel.app/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Image
                        src="/logo/Dexber_White.png"
                        alt="Dexbar"
                        width={250}
                        height={80}
                        className="h-auto w-[60px] object-contain sm:w-[115px]"
                      />
                    </Link>
                  </p>

                  <p className="mx-auto mt-2 max-w-[280px] font-inter text-[9px] leading-[1.45] text-[#777777]">
                    Design concepts are created by Dexbar for presentation
                    purposes. Third-party content and trademarks belong to their
                    respective owners.
                  </p>
                </div>
              )}
            </div>

            {/* ===================================================
                RIGHT — LEGAL (Desktop only)
            =================================================== */}
            <div
              className="
                hidden
                lg:flex
                flex-col
                items-end
                justify-end
                text-right
              "
            >
              <p className="text-[10px] font-medium text-white">
                © 2026 Mazaya Masanda Logistics. All Rights Reserved.
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-end gap-x-1.5 gap-y-1 text-[9px] text-[#A3A3A3]">
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
              MOBILE COPYRIGHT & LEGAL (only on mobile)
          ===================================================== */}
          <div className="relative mt-6 border-t border-[#A9791C]/25 pt-4 text-center lg:hidden">
            <p className="text-[10px] font-medium text-white">
              © 2026 Mazaya Masanda Logistics. All Rights Reserved.
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 text-[10px] text-[#A3A3A3]">
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
