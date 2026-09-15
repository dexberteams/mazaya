import { MoveRight } from "lucide-react";
import Image from "next/image";

const LatestNews = () => {
  return (
    <div className="my-10 lg:my-20 px-4 lg:px-8">
      <h1 className="w-11/12 text-2xl font-bold leading-tight sm:text-4xl lg:p-4 lg:text-4xl text-white!">
        Latest <span className="text-yellow-200">News</span>
      </h1>
      {/* project box */}
      <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {/* card 1 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-48 lg:h-56">
            <Image
              src="/advantages/warehouse.webp"
              alt="Project 1"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-52 lg:h-56 space-y-2 p-4 lg:p-6 border-2 border-amber-950">
            <p className="text-white">May 20,2024</p>
            <p className="h-0.5 w-10 bg-yellow-400"></p>
            <h3 className="text-base font-semibold text-white">
              The Future of Warehousing: Trends Shaping Industry
            </h3>
            <p className="text-sm text-white">
              Explore the latest trends in warehousing and how technology is
              transforming logistics operations.
            </p>
            <p className="text-blue-400 text-sm flex gap-1 items-center">
              Read More <MoveRight />
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-48 lg:h-56">
            <Image
              src="/advantages/news1.png"
              alt="Project 1"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-52 lg:h-56 space-y-2 p-4 lg:p-6 border-2 border-amber-950">
            <p className="text-white">May 15,2024</p>
            <p className="h-0.5 w-10 bg-yellow-400"></p>
            <h3 className="text-base font-semibold text-white">
              How Last-Mile Delivery Drives Customer Satisfaction
            </h3>
            <p className="text-sm text-white">
              Last-mile delivery is the final step to happy customers. Learn how
              we optimize it for better results.
            </p>
            <p className="text-blue-400 text-sm flex gap-1 items-center">
              Read More <MoveRight />
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-48 lg:h-56">
            <Image
              src="/advantages/supply-chain.png"
              alt="Project 1"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-52 lg:h-56 space-y-2 p-4 lg:p-6 border-2 border-amber-950">
            <p className="text-white">May 10, 2024</p>
            <p className="h-0.5 w-10 bg-yellow-400"></p>
            <h3 className="text-base font-semibold text-white">
              Leveraging Technology for Smarter Supply Chains
            </h3>
            <p className="text-sm text-white">
              Digital tools and real-time visibility are key to building
              resilient and efficient supply chains.
            </p>
            <p className="text-blue-400 text-sm flex gap-1 items-center">
              Read More <MoveRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
