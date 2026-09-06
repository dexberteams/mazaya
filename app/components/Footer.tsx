import { ArrowLeftToLine, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-6 py-12 lg:py-20 sm:px-10 lg:px-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,70,20,0.22)_0%,transparent_70%)]" />

      {/* Globe Rotating Earth Background — 3-layer yellow-vibe planet */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className="earth-planet-container shrink-0 opacity-55"
          style={{
            width: 'clamp(600px, 80vw, 1250px)',
            height: 'clamp(600px, 80vw, 1250px)',
          }}
        >
          {/* Layer 1 — Day surface: earth.png scrolling */}
          <div className="earth-layer-day" />

          {/* Layer 2 — Atmosphere: amber radial glow pulsing */}
          <div className="earth-layer-atmosphere" />

          {/* Layer 3 — Cloud drift: soft golden ellipse wandering */}
          <div className="earth-layer-clouds" />

          {/* Layer 4 — Inner shadow: depth & edge darkness */}
          <div className="earth-layer-inner-shadow" />
        </div>
      </div>

      <div className="relative z-10 mx-auto  max-w-6xl gap-5 shadow-2xl shadow-amber-300 bg-[#393527]/40 p-3 lg:p-6 backdrop-blur-[1px] border-2 border-amber-400 rounded-lg lg:pt-16">
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          {/* Left Side */}
          <div className="space-y-5">
            {/* Logo */}
            <Link href="/" className="w-32 sm:w-32 lg:w-40 h-10 flex items-center">
              <Image
                src="/logo/Logo.png"
                alt="Mazaya Logistics"
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
            </Link>

            <p className="max-w-sm text-xs lg:text-sm text-white lg:w-3/4">
              Mazaya Logistics delivers reliable transportation, warehousing,
              fulfillment and supply chain solutions across Saudi Arabia and GCC
              with efficiency, innovation and customer satisfaction.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src="/home/icons/facebook.png"
                  alt="Facebook"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src="/home/icons/instragram.png"
                  alt="Instagram"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src="/home/icons/linkedin.png"
                  alt="LinkedIn"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src="/home/icons/twitter.png"
                  alt="Twitter"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain invert"
                />
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src="/home/icons/youtube.png"
                  alt="YouTube"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </Link>
            </div>

            <div className="space-y-1 pt-2 text-xs text-white">
              <p>© 2026 Mazaya Logistics. All Rights Reserved.</p>
              <p>
                Developed by{" "}
                <Link href="https://dexber.vercel.app/en">
                  <span className="font-medium text-[#f5d76e]">Dexber</span>
                </Link>
              </p>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="flex flex-col text-center">
            <h3 className="mb-3 text-[19px] text-white">
              Ready to Move Your Business Forward?
            </h3>
            <p className="mb-7 text-[10px] lg:text-xs text-[#fffefc]">
              Reliable Logistics Solutions Across Saudi Arabia & Beyond
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-quote"
                className="rounded-md bg-white px-3 py-1 lg:px-6 lg:py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#f5d76e] hover:shadow-[0_0_20px_rgba(245,215,110,0.4)] flex gap-1 justify-center items-center"
              >
                Get Quote <FaArrowRightLong />
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-white bg-[#2E2919] px-3 py-1 lg:px-6 lg:py-2.5 text-sm font-medium text-white flex gap-1 justify-center items-center"
              >
                Contact Us
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="relative z-10 mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-x-3 lg:gap-x-6 gap-y-2 border-t border-[#c9a227] pt-6 text-xs text-white lg:justify-end">
          <Link href="/privacy" className="transition hover:text-[#f4c621]">
            Privacy Policy
          </Link>
          <span className="">|</span>
          <Link href="/terms" className="transition hover:text-[#f4c621]">
            Terms & Conditions
          </Link>
          <span className="">|</span>
          <Link href="/sitemap" className="transition hover:text-[#f4c621]">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
