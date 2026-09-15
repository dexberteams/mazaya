import AdvantagesTop from "./AdvantagesTop";
import Faq from "./Faq";
import LatestNews from "./LatestNews";
import ProcessTimeline from "./ProcessTimeline";
import Quote from "./Quote";

const Advantages = () => {
  return (
    <section className="bg-[#0A0700] font-manrope">
      <AdvantagesTop></AdvantagesTop>
      <LatestNews></LatestNews>
      <ProcessTimeline></ProcessTimeline>
      <Faq></Faq>
      <Quote></Quote>
    </section>
  );
};

export default Advantages;
