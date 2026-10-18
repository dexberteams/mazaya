import Image from "next/image";
import SectionHeader from "../../ui/SectionHeader";

export interface FeaturedCardT {
  title?: string;
  description?: string;
  status?: string;
}

export interface FeaturedMainT {
  title?: string;
  category?: string;
  description?: string;
  metricsTitle?: string;
  metrics?: string[];
  statsLabels?: string[];
}

export interface FeaturedProjectsT {
  title?: string;
  titleHighlight?: string;
  description?: string;
  featured?: FeaturedMainT;
  cards?: FeaturedCardT[];
}

const defaultCards: FeaturedCardT[] = [
  {
    title: "Cold Chain Logistics",
    description: "Temperature-controlled transportation for pharmaceutical and food industries.",
    status: "Completed",
  },
  {
    title: "Warehouse Automation",
    description: "Implemented smart inventory management with barcode scanning and live monitoring.",
    status: "In Progress",
  },
  {
    title: "Cross Border Distribution",
    description: "Managed international logistics operations across GCC countries.",
    status: "Completed",
  },
];

const defaultFeatured: FeaturedMainT = {
  title: "National E-Commerce Distribution Network",
  category: "Supply Chain Logistics",
  description:
    "Successfully managed nationwide distribution for one of Saudi Arabia's fastest-growing e-commerce brands using integrated warehousing, fleet operations, and last-mile delivery.",
  metricsTitle: "Project Metrics",
  metrics: [
    "3 Million Deliveries",
    "120 Cities Covered",
    "150+ Fleet Vehicles",
    "99% On-Time Delivery",
  ],
  statsLabels: ["Products Delivered", "Projects Completed", "Client Satisfaction", "Operations Support"],
};

const statsValues = ["5M+", "250+", "98%", "24/7"];

const getStatusColor = (status?: string) => {
  if (!status) return "rounded-[4px] border-[0.5px] border-[#00C307] bg-[#008F05]/26 backdrop-blur-[2px]";
  const lower = status.toLowerCase();
  if (lower.includes("progress") || lower.includes("قيد")) {
    return "rounded-[4px] border-[0.5px] border-[#8F8600] bg-[#8F8600]/26 backdrop-blur-[2px]";
  }
  return "rounded-[4px] border-[0.5px] border-[#00C307] bg-[#008F05]/26 backdrop-blur-[2px]";
};

const FeaturedProjects = ({ t }: { t?: FeaturedProjectsT }) => {
  const featured = t?.featured ?? defaultFeatured;
  const cards = t?.cards?.length ? t.cards : defaultCards;

  return (
    <section className="relative overflow-hidden my-10 lg:my-20 px-4 lg:px-8 text-white">
      <SectionHeader
        title={t?.title ?? "Featured"}
        highlight={t?.titleHighlight ?? "Projects"}
        description={t?.description ?? "Highlighting some of our most successful and innovative projects that showcase our expertise and capabilities."}
      ></SectionHeader>
      <div className="grid gap-3 lg:grid-cols-2 mt-5 lg:mt-10">
        {/* ================= Featured Project ================= */}
        <div className="group relative min-h-107.5 overflow-hidden rounded-md border border-[#6b5a18]">
          {/* Background Image */}
          <Image
            src="/projects/feature1.png"
            alt={featured.title ?? "Featured Project"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/60" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
            <div>
              <h2 className="font-manrope text-xl font-semibold text-white">{featured.title}</h2>

              <p className="mt-1 text-xs text-white/80 sm:text-sm">{featured.category}</p>

              <p className="mt-5 max-w-xl text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                {featured.description}
              </p>

              {/* Project Metrics */}
              <div className="mt-5">
                <h3 className="text-xs font-semibold text-white">{featured.metricsTitle}</h3>

                <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {featured.metrics?.map((metric, idx) => (
                    <div key={idx}>
                      <p className="text-xs text-white/80">✓ {metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Stats + Button */}
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                {statsValues.map((val, idx) => (
                  <div key={idx}>
                    <h4 className="text-sm font-bold text-[#FFBB00]">{val}</h4>
                    <p className="mt-1 text-[10px] text-white/80">
                      {featured.statsLabels?.[idx] ?? ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= Right Side Projects ================= */}
        <div className="flex flex-col gap-3">
          {cards.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex min-h-34.5 overflow-hidden rounded-md border border-[#6b5a18] bg-[#211900] p-2.5 transition-all duration-300 hover:border-[#FFBB00]"
            >
              {/* Image */}
              <div className="relative h-27.5 w-31.25 shrink-0 overflow-hidden rounded-sm sm:h-28.75 sm:w-33.75">
                <Image
                  src={
                    idx === 0
                      ? "/projects/feature2.png"
                      : idx === 1
                      ? "/projects/feature3.png"
                      : "/projects/feature4.png"
                  }
                  alt={project.title ?? "Project"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="135px"
                />
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col justify-between px-3 py-1 sm:px-4">
                <div>
                  <h3 className="font-manrope text-sm font-semibold text-white sm:text-base">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-[10px] leading-4 text-white/60 sm:text-xs">
                    {project.description}
                  </p>
                </div>

                {/* Status */}
                <div className="flex justify-end">
                  <span className={`rounded px-2.5 py-1 text-[9px] font-medium text-white ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
