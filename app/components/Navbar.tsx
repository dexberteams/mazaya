"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

type Lang = "en" | "ar";

const Navbar = ({ lang = "en" }: { lang?: string }) => {
  const isAr = lang === "ar";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname() || "/";

  const t = isAr
    ? {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        industries: "القطاعات",
        projects: "المشاريع",
        advantages: "المزايا",
        careers: "الوظائف",
        contactUs: "اتصل بنا",
        langEn: "English",
        langAr: "العربية",
        enShort: "EN",
        arShort: "AR",
      }
    : {
        home: "Home",
        about: "About",
        services: "Services",
        industries: "Industries",
        projects: "Projects",
        advantages: "Advantages",
        careers: "Careers",
        contactUs: "Contact Us",
        langEn: "English",
        langAr: "العربية",
        enShort: "EN",
        arShort: "AR",
      };

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.about, href: "/about" },
    { name: t.services, href: "/services" },
    { name: t.industries, href: "/industries" },
    { name: t.projects, href: "/projects" },
    { name: t.advantages, href: "/advantages" },
    { name: t.careers, href: "/careers" },
  ];

  const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";
  const switchLocale = (next: Lang) => {
    setIsLangOpen(false);
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
    router.push(
      `/${next}${pathWithoutLocale === "/" ? "/" : pathWithoutLocale}`,
    );
  };
  const localeHref = (href: string) =>
    href === "/" ? `/${lang}` : `/${lang}${href}`;

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

  const isActive = (href: string) => {
    const target = href === "/" ? `/${lang}` : `/${lang}${href}`;
    return pathname === target || pathname === `${target}/`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-700 bg-[#1a1a1a]/90 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${lang}`}
          className="w-32 sm:w-32 lg:w-40 h-10 flex items-center"
        >
          <Image
            src="/logo/Logo.png"
            alt="Mazaya Logistics"
            width={200}
            height={200}
            className="w-full h-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={localeHref(link.href)}
                className={`relative text-sm transition-colors duration-200 hover:text-[#FFBB00] ${
                  active
                    ? "font-bold text-[#FFBB00] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#FFBB00]"
                    : "font-medium text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="lang-switcher relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 rounded-lg border border-white/20 px-2 py-2 font-medium text-white transition-all hover:bg-white/10 sm:px-3"
              aria-label="Change language"
            >
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
              <span className="hidden text-sm sm:block">
                {isAr ? t.arShort : t.enShort}
              </span>
            </button>

            <div
              className={`absolute inset-e-0 top-full mt-2 min-w-32.5 overflow-hidden rounded-xl border border-white/10 bg-[#1E1813] shadow-xl transition-all duration-200 ${
                isLangOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <button
                onClick={() => switchLocale("en")}
                className="w-full px-4 py-2.5 text-start text-sm text-white transition-colors hover:bg-white/10"
              >
                {t.langEn}
              </button>

              <button
                onClick={() => switchLocale("ar")}
                className="w-full px-4 py-2.5 text-start text-sm text-white transition-colors hover:bg-white/10"
              >
                {t.langAr}
              </button>
            </div>
          </div>

          <Link
            href={`/${lang}/contactus`}
            className="hidden whitespace-nowrap rounded-lg bg-white px-3 py-2 text-sm font-medium text-black transition-all hover:bg-[#FFBB00] sm:block"
          >
            {t.contactUs}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-amber-400 transition-colors hover:bg-white/10 xl:hidden"
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

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
          isMenuOpen
            ? "max-h-125 border-t border-white/10 bg-[#1E1813]/95 opacity-100 backdrop-blur-md"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={localeHref(link.href)}
                onClick={handleMenuClick}
                className={`border-s-2 px-4 py-3 text-sm transition-all duration-200 hover:border-[#FFBB00] hover:text-[#FFBB00] ${
                  active
                    ? "border-[#FFBB00] font-bold text-[#FFBB00]"
                    : "border-transparent font-medium text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href={`/${lang}/contactus`}
            onClick={handleMenuClick}
            className="mt-2 rounded-lg border border-[#FFBB00] px-4 py-3 text-center text-sm font-medium text-[#FFBB00] transition-all hover:bg-[#FFBB00] hover:text-black"
          >
            {t.contactUs}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
