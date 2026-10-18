import Image from "next/image";
import SectionHeader from "../../ui/SectionHeader";

export interface PreviousProjectCardT {
  title?: string;
  description?: string;
}

export interface PreviousProjectsT {
  title?: string;
  titleHighlight?: string;
  description?: string;
  statusCompleted?: string;
  statusInProgress?: string;
  cards?: PreviousProjectCardT[];
}

const projectImages = [
  "/projects/logistic.jpeg",
  "/projects/retail.jpeg",
  "/projects/cold-chain.webp",
  "/projects/healthcare.webp",
];

const defaultCards: PreviousProjectCardT[] = [
  {
    title: "E-Commerce Logistics Solutions",
    description:
      "End-to-end logistics solution including warehousing and last-mile delivery, ensuring speed, and efficiency.",
  },
  {
    title: "Retail Distribution Network",
    description:
      "Nationwide distribution network for a leading retail brand across multiple cities, ensuring seamless and timely deliveries.",
  },
  {
    title: "Cold Chain Management Project",
    description:
      "Temperature-controlled logistics and warehousing for the food & beverage industry, quality, and safe handling.",
  },
  {
    title: "Healthcare Logistics Project",
    description:
      "Secure and compliant logistics solution for pharmaceutical distribution, ensuring safety, reliability, and timely delivery.",
  },
];

const PreviousProjects = ({ t }: { t?: PreviousProjectsT }) => {
  const cards = t?.cards?.length ? t.cards : defaultCards;
  const statusCompleted = t?.statusCompleted ?? "Completed";

  return (
    <section className="relative overflow-hidden my-10 lg:my-20 px-4 lg:px-8 text-white">
      <SectionHeader
        title={t?.title ?? "Previous"}
        highlight={t?.titleHighlight ?? "Projects"}
        description={
          t?.description ??
          "A collection of projects we have successfully completed, helping our clients achieve their business goals."
        }
      ></SectionHeader>

      {/* project box */}
      <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full rounded-lg overflow-hidden">
            <div className="relative w-full h-44">
              <Image
                src={projectImages[index] ?? projectImages[0]}
                alt={card.title ?? "Project"}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <div className="relative bg-[#161000] w-full overflow-hidden h-44 lg:h-56 space-y-2 p-4 lg:p-8 border-2 border-amber-950">
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="text-sm text-gray-400">{card.description}</p>
              <p className="text-green-400 text-sm">{statusCompleted}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousProjects;
