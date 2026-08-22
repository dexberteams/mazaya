"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "Advantages", href: "/advantages" },
  { name: "Careers", href: "/careers" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLangOpen && !(event.target as Element).closest(".lang-switcher")) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-700 bg-[#1a1a1a]/90 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-[#FFBB00]"
        >
          Mazaya
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm transition-colors duration-200 hover:text-[#FFBB00] ${
                  isActive
                    ? "font-bold text-[#FFBB00] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#FFBB00]"
                    : "font-medium text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="lang-switcher relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 rounded-lg border border-white/20 px-2 py-2 font-medium text-white transition-all hover:bg-white/10 sm:px-3"
              aria-label="Change language"
            >
              {/* Globe Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582"
                />
              </svg>

              <span className="hidden text-sm sm:block">EN</span>
            </button>

            {/* Language Dropdown */}
            <div
              className={`absolute right-0 top-full mt-2 min-w-32.5 overflow-hidden rounded-xl border border-white/10 bg-[#1E1813] shadow-xl transition-all duration-200 ${
                isLangOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <button
                onClick={() => setIsLangOpen(false)}
                className="w-full px-4 py-2.5 text-left text-sm text-white transition-colors hover:bg-white/10"
              >
                English
              </button>

              <button
                onClick={() => setIsLangOpen(false)}
                className="w-full px-4 py-2.5 text-left text-sm text-white transition-colors hover:bg-white/10"
              >
                العربية
              </button>
            </div>
          </div>

          {/* Desktop Login Button */}
          <Link
            href="/login"
            className="hidden whitespace-nowrap rounded-lg bg-white px-3 py-2 text-sm font-medium text-black transition-all hover:bg-[#FFBB00] sm:block"
          >
            Login
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 xl:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
          isMenuOpen
            ? "max-h-125 border-t border-white/10 bg-[#1E1813]/95 opacity-100 backdrop-blur-md"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleMenuClick}
                className={`border-l-2 px-4 py-3 text-sm transition-all duration-200 hover:border-[#FFBB00] hover:text-[#FFBB00] ${
                  isActive
                    ? "border-[#FFBB00] font-bold text-[#FFBB00]"
                    : "border-transparent font-medium text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Login */}
          <Link
            href="/login"
            onClick={handleMenuClick}
            className="mt-2 rounded-lg border border-[#FFBB00] px-4 py-3 text-center text-sm font-medium text-[#FFBB00] transition-all hover:bg-[#FFBB00] hover:text-black"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
