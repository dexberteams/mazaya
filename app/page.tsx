import Footer from "./components/Footer";
import ClientSection from "./home/ClientSection";
import Hero from "./home/Hero";
import MazayaLogistics from "./home/MazayaLogistics";
import Partner from "./home/Partner";
import QuickSolution from "./home/QuickSolution";
import Services from "./home/Services";
import Story from "./home/Story";
import Teams from "./home/Teams";
import WhyChoose from "./home/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Partner></Partner>
      <Story></Story>
      <div className="relative">
        {/* bg-pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
        /* Vertical lines */
        linear-gradient(
          90deg,
          transparent 0,
          transparent 59px,
          rgba(255, 187, 0, 0.07) 60px,
          transparent 61px
        ),

        /* Horizontal lines */
        linear-gradient(
          0deg,
          transparent 0,
          transparent 59px,
          rgba(255, 187, 0, 0.07) 60px,
          transparent 61px
        ),

        /* Diagonal right */
        linear-gradient(
          135deg,
          transparent 49.5%,
          rgba(255, 187, 0, 0.09) 50%,
          transparent 50.5%
        ),

        /* Diagonal left */
        linear-gradient(
          45deg,
          transparent 49.5%,
          rgba(255, 187, 0, 0.09) 50%,
          transparent 50.5%
        )
      `,
              backgroundSize: `
        118px 180px,
        100% 60px,
        236px 120px,
        236px 120px
      `,
              backgroundPosition: `
        0 0,
        0 0,
        0 60px,
        118px 60px
      `,
            }}
          />
        </div>
        <QuickSolution></QuickSolution>
        <Services></Services>
      </div>
      <WhyChoose></WhyChoose>
      <Teams></Teams>
      <MazayaLogistics></MazayaLogistics>
      <ClientSection></ClientSection>
      <Footer></Footer>
    </div>
  );
}
