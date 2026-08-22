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
      <QuickSolution></QuickSolution>
      <Services></Services>
      <WhyChoose></WhyChoose>
      <Teams></Teams>
      <MazayaLogistics></MazayaLogistics>
      <ClientSection></ClientSection>
      <Footer></Footer>
    </div>
  );
}
