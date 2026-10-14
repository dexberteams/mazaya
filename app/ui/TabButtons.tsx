"use client";

import { Building2, Package } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type TabButtonsProps = {
  lang?: string;
  t?: {
    services: string;
    industries: string;
  };
};

const TabButtons = ({ lang = "en", t }: TabButtonsProps) => {
  const [activeTab, setActiveTab] = useState("Services");

  return (
    <div className="grid grid-cols-2 gap-4 p-2 border border-yellow-400 rounded-lg w-11/12 mx-auto mt-2">
      <Link href={`/${lang}/services`}>
        <button
          onClick={() => setActiveTab("Services")}
          className={`cursor-pointer rounded-lg px-4 py-2 text-sm transition-colors lg:px-6 lg:py-3 flex justify-center items-center gap-2 ${
            activeTab === "Services"
              ? "bg-[#FFBB00] text-black"
              : "bg-transparent text-white hover:bg-[#FFBB00] hover:text-black"
          }`}
        >
          <Package />
          {t?.services || "Services"}
        </button>
      </Link>
      <Link href={`/${lang}/industries`}>
        <button
          onClick={() => setActiveTab("Industries")}
          className={`cursor-pointer rounded-lg px-4 py-2 text-sm transition-colors lg:px-6 lg:py-3 flex justify-center items-center gap-2 ${
            activeTab === "Industries"
              ? "bg-[#FFBB00] text-black"
              : "bg-transparent text-white hover:bg-[#FFBB00] hover:text-black"
          }`}
        >
          <Building2 />
          {t?.industries || "Industries"}
        </button>
      </Link>
    </div>
  );
};

export default TabButtons;
