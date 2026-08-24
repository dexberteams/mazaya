"use client";

import { Building2, Package } from "lucide-react";
import { useState } from "react";

const TabButtons = () => {
  const [activeTab, setActiveTab] = useState("Services");

  return (
    <div className="grid grid-cols-2 gap-4 p-2 border border-yellow-400 rounded-lg w-11/12 mx-auto mt-2">
      <button
        onClick={() => setActiveTab("Services")}
        className={`cursor-pointer rounded-lg px-4 py-2 text-sm transition-colors lg:px-6 lg:py-3 flex justify-center items-center gap-2 ${
          activeTab === "Services"
            ? "bg-[#FFBB00] text-black"
            : "bg-transparent text-white hover:bg-[#FFBB00] hover:text-black"
        }`}
      >
        <Package />
        Services
      </button>

      <button
        onClick={() => setActiveTab("Industries")}
        className={`cursor-pointer rounded-lg px-4 py-2 text-sm transition-colors lg:px-6 lg:py-3 flex justify-center items-center gap-2 ${
          activeTab === "Industries"
            ? "bg-[#FFBB00] text-black"
            : "bg-transparent text-white hover:bg-[#FFBB00] hover:text-black"
        }`}
      >
        <Building2 />
        Industries
      </button>
    </div>
  );
};

export default TabButtons;
