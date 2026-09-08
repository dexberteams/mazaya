import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

const PreviousProjects = () => {
  return (
    <section className="relative overflow-hidden my-10 lg:my-20 px-4 lg:px-8 text-white">
      <SectionHeader
        title="Previous"
        highlight="Projects"
        description="A collection of projects we have successfully completed, helping our clients achieve their business goals."
      ></SectionHeader>
      {/* project box */}
      <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
        {/* card 1 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-44">
            <Image
              src="/projects/logistic.jpeg"
              alt="Project 1"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-44 lg:h-56 space-y-2 p-4 lg:p-8 border-2 border-amber-950">
            <h3 className="text-base font-semibold text-white">
              E-Commerce Logistics Solutions
            </h3>
            <p className="text-sm text-gray-400">
              End-to-end logistics solution including warehousing and last-mile
              delivery,ensuring speed, and efficiency.
            </p>
            <p className="text-green-400 text-sm">Completed</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-44">
            <Image
              src="/projects/retail.jpeg"
              alt="Project 2"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-44 lg:h-56 space-y-2 p-4 lg:p-6 border-2 border-amber-950">
            <h3 className="text-base font-semibold text-white">
              Retail Distribution Network
            </h3>
            <p className="text-sm text-gray-400">
              Nationwide distribution network for a leading retail brand across
              multiple cities, ensuring seamless and timely deliveries.
            </p>
            <p className="text-green-400 text-sm">Completed</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-44">
            <Image
              src="/projects/cold-chain.webp"
              alt="Project 3"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-44 lg:h-56 space-y-2 p-4 lg:p-6 border-2 border-amber-950">
            <h3 className="text-base font-semibold text-white">
              Cold Chain Management Project
            </h3>
            <p className="text-sm text-gray-400">
              Temperature-controlled logistics and warehousing for the food &
              beverage industry,quality, and safe handling.
            </p>
            <p className="text-green-400 text-sm">Completed</p>
          </div>
        </div>
        {/* card 4 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-44">
            <Image
              src="/projects/healthcare.webp"
              alt="Project 4"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-44 lg:h-56 space-y-2 p-4 lg:p-6 border-2 border-amber-950">
            <h3 className="text-base font-semibold text-white">
              Healthcare Logistics Project
            </h3>
            <p className="text-sm text-gray-400">
              Secure and compliant logistics solution for pharmaceutical
              distribution, ensuring safety, reliability, and timely delivery.
            </p>
            <p className="text-green-400 text-sm">Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousProjects;
