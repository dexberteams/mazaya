import { Box } from "lucide-react";

const Quote = () => {
  return (
    <section className="relative overflow-hidden my-10 lg:my-20 mx-4 lg:mx-8 flex flex-col lg:flex-row justify-between text-white border border-gray-900 p-4 lg:p-10 rounded-lg">
      <div className="flex items-center gap-2">
        <p>
          <Box className="w-12 h-12 lg:w-18 lg:h-18 text-yellow-400" />
        </p>
        <p className="flex flex-col gap-2">
          <span className="text-lg lg:text-2xl font-semibold">
            Have a Project in Mind?
          </span>
          <span className="text-xs">
            Let&apos;s work together to create a logistics solution that drives
            your business forward.
          </span>
        </p>
      </div>
      <div className="flex flex-col items-end mt-4 lg:mt-0">
        <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded transition-all duration-300">
          Get Quote
        </button>
      </div>
    </section>
  );
};

export default Quote;
