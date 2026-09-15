type SectionIntroProps = {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
};

const SectionHeader2 = ({
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
      <div className="mt-2 lg:mt-4 h-0.5 w-24 bg-yellow-400 lg:w-32"></div>
      <p className="mt-4 font-manrope text-xs text-white/55 lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader2;
