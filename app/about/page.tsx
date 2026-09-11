import Story from "../home/Story";
import Teams from "../home/Teams";
import Partner from "../home/Partner";


const About = () => {
  return (
    <div className="relative min-h-screen bg-[#070502] text-white selection:bg-[#f5b800] selection:text-black font-sans pb-24 overflow-x-hidden">
      {/* ── SECTION 1: HERO SECTION ── */}


      {/* ── story section ── */}
      <Story />

      {/* ── teams section ── */}
      <Teams />

      {/* Patner sections */}
      <Partner />


    </div>

  );
};

export default About;
