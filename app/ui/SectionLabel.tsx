type SectionLabelProps = {
  text: string;
  className?: string;
};

const SectionLabel = ({ text, className }: SectionLabelProps) => {
  return (
    <div
      className={`group relative inline-flex items-center gap-3 overflow-hidden px-2 py-1.5 ${
        className || "bg-black"
      }`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-r from-yellow-500/40 via-yellow-500/10 to-transparent transition-opacity duration-300 group-hover:from-yellow-500/60" />

      {/* Lines */}
      <div className="relative z-10 flex flex-col gap-1">
        <span className="h-1 w-4 bg-[#f5c400] transition-all duration-300 group-hover:w-6" />
        <span className="h-0.75 w-4 bg-[#f5c400] transition-all duration-300 group-hover:w-6" />
      </div>

      {/* Text */}
      <span className="relative z-10 text-sm font-medium uppercase text-[#d9d9d9] lg:text-xl">
        {text}
      </span>
    </div>
  );
};

export default SectionLabel;
