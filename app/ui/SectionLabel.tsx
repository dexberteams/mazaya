type SectionLabelProps = {
  text: string;
};

const SectionLabel = ({ text }: SectionLabelProps) => {
  return (
    <div className="group relative inline-flex items-center gap-3 overflow-hidden bg-black px-2 py-1.5">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-r from-yellow-500/40 via-yellow-500/10 to-transparent transition-opacity duration-300 group-hover:from-yellow-500/60" />

      <div className="relative z-10 flex flex-col gap-1">
        <span className="h-1 w-4 bg-[#f5c400] transition-all duration-300 group-hover:w-6" />
        <span className="h-0.75 w-4 bg-[#f5c400] transition-all duration-300 group-hover:w-6" />
      </div>

      <span className="relative z-10 text-sm lg:text-xl font-medium uppercase text-[#d9d9d9]">
        {text}
      </span>
    </div>
  );
};

export default SectionLabel;
