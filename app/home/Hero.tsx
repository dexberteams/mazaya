import { CirclePlay, MapPinSearch } from "lucide-react";
import Image from "next/image";
import TabButtons from "../ui/TabButtons";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden py-16 lg:py-24">
      {/* Hero Content */}
      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-8 px-4 sm:flex-row sm:px-8 lg:px-16">
          {/* for mobile view rating */}
          <Image
            src="/home/Rating.png"
            alt="Rating"
            width={100}
            height={100}
            className="h-10 w-56 lg:hidden"
          />

          {/* left */}
          <div className="flex w-full flex-col items-start justify-center font-manrope text-white lg:w-1/2 lg:gap-2">
            <h1 className="w-3/4 text-4xl font-extrabold lg:w-2/3 lg:p-4 lg:text-5xl lg:leading-tight">
              Your Trusted Logistics Partner
            </h1>

            <p className="p-2 text-sm lg:w-4/5 lg:p-4 lg:text-base">
              Reliable transportation, warehousing and supply chain solutions
              with speed, safety and efficiency.
            </p>

            <div className="flex gap-4 p-4">
              <button className="rounded-lg bg-[#FFBB00] px-3 py-1.5 text-sm text-black transition-colors hover:bg-yellow-500 lg:mt-4 lg:px-6 lg:py-3">
                Get Quote
              </button>

              <button className="flex gap-1 rounded-lg border-2 border-yellow-400 bg-[#1E1813] px-3 py-1.5 text-sm text-white lg:mt-4 lg:px-6 lg:py-3">
                <span>
                  <MapPinSearch />
                </span>
                Track Shipment
              </button>
            </div>
          </div>

          {/* right */}
          <div>
            {/* rating for desktop */}
            <Image
              src="/home/Rating.png"
              alt="Rating"
              width={100}
              height={100}
              className="mb-8 lg:mt-8 hidden h-10 w-56 lg:block"
            />

            <div className="flex flex-col items-start justify-center gap-8 rounded-lg border border-[#FFBB00]/50 bg-[#1E1813]/90 p-4 font-(family-name:--font-anek-bangla) text-white backdrop-blur-sm lg:mt-10 ">
              <div className="flex items-center gap-3">
                <Image
                  src="/home/icons/truck-driver.png"
                  alt="Professional Drivers"
                  width={24}
                  height={24}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-sm">500+</span>
                  <span className="text-sm text-gray-400">
                    Professional Drivers
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/home/icons/truck-delivery.png"
                  alt="Successful Deliveries"
                  width={24}
                  height={24}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-sm">10,000+</span>
                  <span className="text-sm text-gray-400">
                    Successful Deliveries
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/home/icons/city.png"
                  alt="Cities Covered"
                  width={24}
                  height={24}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-sm">15+</span>
                  <span className="text-sm text-gray-400">Cities Covered</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/home/icons/hand-support.png"
                  alt="Client Satisfaction"
                  width={24}
                  height={24}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-sm">99%</span>
                  <span className="text-sm text-gray-400">
                    Client Satisfaction
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className=" ml-4 flex w-11/12 justify-between  px-4 py-2  font-(family-name:--font-anek-bangla) text-white lg:w-1/2 lg:gap-16 lg:px-14">
          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
            <Image
              src="/home/icons/delivery.png"
              alt="On-Time Delivery"
              width={24}
              height={24}
            />

            <p className="flex flex-col gap-1 text-center lg:text-start">
              <span className="text-xs lg:text-sm">On-Time Delivery</span>
              <span className="text-xs text-gray-400 lg:text-sm">Everyday</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
            <Image
              src="/home/icons/lock-line.png"
              alt="Safe & Secure"
              width={24}
              height={24}
            />

            <p className="flex flex-col gap-1 text-center lg:text-start">
              <span className="text-xs lg:text-sm">Safe & Secure</span>
              <span className="text-xs text-gray-400 lg:text-sm">
                Cargo Protection
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
            <Image
              src="/home/icons/hand-support.png"
              alt="24/7 Support"
              width={24}
              height={24}
            />

            <p className="flex flex-col gap-1 text-center lg:text-start">
              <span className="text-xs lg:text-sm">24/7 Support</span>
              <span className="text-xs text-gray-400 lg:text-sm">
                Always Here
              </span>
            </p>
          </div>
        </div>
        {/* bottom buttons for desktop*/}
        <div className="hidden lg:flex gap-4 w-1/3 justify-center items-center mx-auto p-4 border border-yellow-400/45 rounded-full mt-8 bg-linear-to-b from-yellow-800/40 via-yellow-500/10 to-transparent transition-opacity duration-300">
          <button className=" rounded-full bg-transparent hover:bg-[#FFBB00] px-4 py-2 text-sm text-white transition-colors  lg:px-6 lg:py-3">
            Services
          </button>
          <button className=" rounded-full bg-white  px-4 py-2 text-sm text-black transition-colors hover:bg-yellow-800  lg:px-6 lg:py-3 flex items-center gap-2 hover:text-white">
            <CirclePlay className="text-[#FFBB00]" />
            Watch our Stories
          </button>
          <button className=" rounded-full bg-transparent hover:bg-[#FFBB00] text-white  px-4 py-2 text-sm transition-colors lg:px-6 lg:py-3">
            Industries
          </button>
        </div>
        {/* bottom button for mobile */}
        <div className="flex flex-col lg:hidden mt-4">
          <button className=" rounded-full bg-white  px-4 py-2 text-sm text-black hover:bg-yellow-800  lg:px-6 lg:py-3 flex justify-center items-center gap-2 hover:text-white w-11/12 mx-auto">
            <CirclePlay className="text-[#FFBB00]" />
            Watch our Stories
          </button>
          <TabButtons></TabButtons>
        </div>
      </div>
    </section>
  );
};

export default Hero;
