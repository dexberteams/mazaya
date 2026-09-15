import { Factory, Globe, SquareCheckBig, Van } from "lucide-react";
import GlowIconSquare from "./GlowIconSquare";

const StatsCards = () => {
  return (
    <>
      <div
        className="
         my-5 lg:mt-14
         grid grid-cols-2 lg:grid-cols-4
         gap-4
         rounded-lg
         border border-white/30
         bg-white/4
         p-2 lg:p-8
         backdrop-blur-xl
         shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_40px_rgba(0,0,0,0.25)]
        "
      >
        {/* Card 1 */}
        <div className="flex items-center justify-center gap-4 border-r border-white/10 p-2 lg:p-4">
          <GlowIconSquare icon={SquareCheckBig} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400">50%+</span>
            <span className="text-xs text-gray-400 lg:text-sm">
              Active Clients
            </span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-center gap-4 p-2 lg:border-r lg:border-white/10 lg:p-4">
          <GlowIconSquare icon={Factory} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400">12+</span>
            <span className="text-xs text-gray-400 lg:text-sm">
              Industries served
            </span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-center gap-4 border-r border-white/10 p-2 lg:p-4">
          <GlowIconSquare icon={Van} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400">1 M+</span>
            <span className="text-xs text-gray-400 lg:text-sm">
              Delivered Completed
            </span>
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex items-center justify-center gap-4 p-2 lg:p-4">
          <GlowIconSquare icon={Globe} />

          <p className="flex flex-col items-start">
            <span className="text-yellow-400">3</span>
            <span className="text-xs text-gray-400 lg:text-sm">
              Regions Covered
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default StatsCards;
