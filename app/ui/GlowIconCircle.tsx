import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface GlowIconCircleProps {
  icon: LucideIcon | IconType;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const GlowIconCircle = ({
  icon: Icon,
  size = 34,
  strokeWidth = 1.8,
  className = "text-white",
}: GlowIconCircleProps) => {
  return (
    <div className="relative flex h-14 w-14 lg:h-17 lg:w-17 shrink-0 items-center justify-center">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-[#D6B85A]/20 blur-xl" />

      {/* Main Circle */}
      <div
        className="
          relative flex h-14 w-14 lg:h-17 lg:w-17 items-center justify-center
          overflow-hidden rounded-full
          bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.20)_0%,rgba(100,90,60,0.35)_35%,rgba(30,27,18,0.9)_75%,rgba(10,9,6,0.95)_100%)]
          shadow-[inset_0_0_18px_rgba(255,255,255,0.08),0_0_20px_rgba(210,180,90,0.18)]
        "
      >
        {/* Top-right + Bottom-left highlighted border */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 35deg, transparent 0deg, transparent 75deg, rgba(235,220,170,0.9) 75deg, rgba(235,220,170,0.55) 130deg, transparent 150deg, transparent 255deg, rgba(235,220,170,0.85) 255deg, rgba(235,220,170,0.5) 310deg, transparent 330deg)",

            mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",

            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",
          }}
        />

        {/* Dynamic Icon */}
        <Icon
          size={size}
          strokeWidth={strokeWidth}
          className={`relative z-10 ${className}`}
        />
      </div>
    </div>
  );
};

export default GlowIconCircle;
