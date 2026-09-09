type SectionIntroProps = {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
};

const SectionHeader = ({
  title,
  highlight,
  description,
  className = "",
}: SectionIntroProps) => {
  return (
    <div className={`w-full lg:w-[30%] ${className}`}>
      <h1 className="font-manrope text-[20px] font-bold text-white lg:text-4xl">
        {title}{" "}
        {highlight && <span className="text-yellow-200">{highlight}</span>}
      </h1>

      <p className="mt-4 font-manrope text-xs text-white lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
