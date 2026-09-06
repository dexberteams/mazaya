import Hero from "./Hero";
import Client from "./Client";

const ProjectsTop = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Mobile Background Image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{
          backgroundImage: "url('/projects/hero.jpg')",
        }}
      />

      {/* Mobile Overlay */}
      <div
        className="
          pointer-events-none absolute inset-0 lg:hidden
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_25%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.7)_75%,rgba(0,0,0,0.9)_100%)]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Client />
      </div>
    </div>
  );
};

export default ProjectsTop;
