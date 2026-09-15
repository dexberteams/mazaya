import Image from "next/image";

const WareHouseTypes = () => {
  return (
    <section className="my-10 overflow-hidden px-4 lg:my-20 lg:px-8">
      <h1 className="font-manrope text-[20px] font-bold text-white lg:text-4xl">
        Why Choose
        <span className="text-yellow-200">Our Warehousing Services?</span>
      </h1>
      <div className="mt-4 lg:mt-8 h-0.5 w-24 bg-yellow-400 lg:w-32"></div>
      {/* card-box */}
      <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
        {/* card 1 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-48 lg:h-52">
            <Image
              src="/warehouse/general.png"
              alt="Project 1"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-36 lg:h-40 space-y-2 p-4 lg:p-8 border-2 border-amber-950">
            <h3 className="text-base font-semibold text-white">
              General Warehousing
            </h3>
            <p className="text-sm text-gray-400">
              Ideal for non-perishable goods, retail products, and general
              merchandise.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-48 lg:h-52">
            <Image
              src="/warehouse/temparature.png"
              alt="Project 1"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-36 lg:h-40 space-y-2 p-4 lg:p-8 border-2 border-amber-950">
            <h3 className="text-base font-semibold text-white">
              Temperature Controlled
            </h3>
            <p className="text-sm text-gray-400">
              Maintains controlled temperature for sensitive and perishable
              products.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-48 lg:h-52">
            <Image
              src="/warehouse/bounded.png"
              alt="Project 1"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-36 lg:h-40 space-y-2 p-4 lg:p-8 border-2 border-amber-950">
            <h3 className="text-base font-semibold text-white">
              Bonded Warehousing
            </h3>
            <p className="text-sm text-gray-400">
              Customs-bonded facilities for duty deferment and compliance.
            </p>
          </div>
        </div>
        {/* card 4 */}
        <div className="relative  w-full rounded-lg overflow-hidden">
          <div className="relative w-full h-48 lg:h-52">
            <Image
              src="/warehouse/ecommarce.png"
              alt="Project 1"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="relative bg-[#161000] w-full  overflow-hidden h-36 lg:h-40 space-y-2 p-4 lg:p-8 border-2 border-amber-950">
            <h3 className="text-base font-semibold text-white">
              E-commerce Warehousing
            </h3>
            <p className="text-sm text-gray-400">
              Fast and accurate fulfillment for online stores and e-commerce
              businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WareHouseTypes;
