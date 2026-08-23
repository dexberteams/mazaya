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
            className="absolute inset-0 opacity-[0.29]"
            style={{
              backgroundImage: `
        linear-gradient(
          90deg,
          transparent 0,
          transparent 99px,
          rgba(255,187,0,0.25) 100px,
          transparent 101px,
          transparent 329px
        ),
        linear-gradient(
          0deg,
          transparent 0,
          transparent 109px,
          rgba(255,187,0,0.25) 110px,
          transparent 111px,
          transparent 219px
        ),
        linear-gradient(
          45deg,
          transparent 0,
          transparent 139px,
          rgba(255,187,0,0.22) 140px,
          transparent 141px
        )
      `,
              backgroundSize: "330px 220px",
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
