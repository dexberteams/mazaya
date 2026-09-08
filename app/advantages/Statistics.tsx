"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Statistics = () => {
  return (
    <section className="px-4 lg:px-8 py-8 lg:py-16">
      <h1 className="font-manrope text-[20px] font-bold text-yellow-200 lg:text-4xl">
        Statistics
      </h1>
      <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 mt-4 lg:mt-8">
        {/* card-1 */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-lg border border-[#352801] bg-[#201700] p-3 space-y-1 lg:p-6 lg:space-y-3"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400">
            <Image
              src="/advantages/icons/calendar.svg"
              alt="Years of Experience"
              width={30}
              height={30}
            />
          </div>

          <h2 className="text-[14px] lg:text-xl font-bold text-white">10+</h2>

          <p className="text-[9px] lg:text-[14px] text-center text-white">
            Years of Experience
          </p>
        </motion.div>
        {/* card-2 */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-lg border border-[#352801] bg-[#201700] p-3 lg:p-6 space-y-1 lg:space-y-3"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-amber-400 rounded-full ">
            <Image
              src="/advantages/icons/streamline-plump.svg"
              alt="Years of Experience"
              width={30}
              height={30}
            />
          </div>
          <h2 className="text-white text-[14px] lg:text-xl font-bold">500+</h2>
          <p className="text-white text-[9px] lg:text-[14px] text-center">
            Happy Clients
          </p>
        </motion.div>
        {/* card-3 */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-lg border border-[#352801] bg-[#201700] p-3 lg:p-6 space-y-1 lg:space-y-3"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-amber-400 rounded-full ">
            <Image
              src="/advantages/icons/shipment-delivery.svg"
              alt="Shipments Delivered"
              width={30}
              height={30}
            />
          </div>
          <h2 className="text-white text-[14px] lg:text-xl font-bold">1 M+</h2>
          <p className="text-white text-[9px] lg:text-[14px] text-center">
            Shipments Delivered
          </p>
        </motion.div>
        {/* card-4 */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-lg border border-[#352801] bg-[#201700] p-3 lg:p-6 space-y-1 lg:space-y-3"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-amber-400 rounded-full ">
            <Image
              src="/advantages/icons/map.svg"
              alt="Years of Experience"
              width={30}
              height={30}
            />
          </div>
          <h2 className="text-white text-[14px] lg:text-xl font-bold">3</h2>
          <p className="text-white text-[9px] lg:text-[14px] text-center">
            Regions covered
          </p>
        </motion.div>
        {/* card-5 */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-lg border border-[#352801] bg-[#201700] p-3 lg:p-6 space-y-1 lg:space-y-3"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-amber-400 rounded-full ">
            <Image
              src="/advantages/icons/van.svg"
              alt="Years of Experience"
              width={30}
              height={30}
            />
          </div>
          <h2 className="text-white text-[14px] lg:text-xl font-bold">250+</h2>
          <p className="text-white text-[9px] lg:text-[14px] text-center">
            Fleet assets
          </p>
        </motion.div>
        {/* card-6 */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-lg border border-[#352801] bg-[#201700] p-3 lg:p-6 space-y-1 lg:space-y-3"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
        >
          <div className="flex items-center justify-center w-12 h-12 mt-4 bg-amber-400 rounded-full ">
            <Image
              src="/advantages/icons/calendar.svg"
              alt="Years of Experience"
              width={30}
              height={30}
            />
          </div>
          <h2 className="text-white text-[14px] lg:text-xl font-bold">1M+</h2>
          <p className="text-white text-[9px] lg:text-[14px] text-center">
            Sq.Ft.Warehousing
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
