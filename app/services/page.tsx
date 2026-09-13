import QuickSolution from "../home/QuickSolution";
import WhyChoose from "../home/WhyChoose";
import ServiceCta from "./ServiceCta";
import ServiceHero from "./ServiceHero";


const services = () => {
    return (
        <div className="">
            {/* ── SECTION 1: HERO SECTION ── */}
            <ServiceHero />

            <QuickSolution />

            {/* Why choose us section */}
            <WhyChoose />

            <ServiceCta />


        </div>

    );
};

export default services;
