import Image from "next/image";

export interface LatestNewsCardT {
  date?: string;
  title?: string;
  description?: string;
}

export interface LatestNewsT {
  title?: string;
  titleHighlight?: string;
  cards?: LatestNewsCardT[];
}

const newsImages = [
  "/advantages/warehouse.webp",
  "/advantages/news1.png",
  "/advantages/supply-chain.png",
];

const defaultCards: LatestNewsCardT[] = [
  {
    date: "May 20, 2024",
    title: "The Future of Warehousing: Trends Shaping Industry",
    description:
      "Explore the latest trends in warehousing and how technology is transforming logistics operations.",
  },
  {
    date: "May 15, 2024",
    title: "How Last-Mile Delivery Drives Customer Satisfaction",
    description:
      "Last-mile delivery is the final step to happy customers. Learn how we optimize it for better results.",
  },
  {
    date: "May 10, 2024",
    title: "Leveraging Technology for Smarter Supply Chains",
    description:
      "Digital tools and real-time visibility are key to building resilient and efficient supply chains.",
  },
];

const LatestNews = ({ t }: { t?: LatestNewsT }) => {
  const cards = t?.cards?.length ? t.cards : defaultCards;

  return (
    <div className="my-10 lg:my-20 px-4 lg:px-8">
      <h1 className="w-11/12 text-2xl font-bold leading-tight sm:text-4xl lg:p-4 lg:text-4xl text-white!">
        {t?.title || "Latest"}{" "}
        <span className="text-yellow-200">{t?.titleHighlight || "News"}</span>
      </h1>

      {/* project box */}
      <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full rounded-lg overflow-hidden">
            <div className="relative w-full h-48 lg:h-56">
              <Image
                src={newsImages[index] ?? newsImages[0]}
                alt={card.title ?? "News"}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <div className="relative bg-[#161000] w-full overflow-hidden h-52 lg:h-56 space-y-2 p-4 lg:p-6 border-2 border-amber-950">
              <p className="text-white">{card.date}</p>
              <p className="h-0.5 w-10 bg-yellow-400"></p>
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="text-xs text-white">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
