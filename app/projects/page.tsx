import FeaturedProjects from "./FeaturedProjects";
import PreviousProjects from "./PreviousProjects";
import ProjectsTop from "./ProjectsTop";
import Quote from "./Quote";
import Testimonials from "./Testimonials";

const Projects = () => {
  return (
    <div className="bg-[#0A0700] font-manrope">
      <ProjectsTop />
      <PreviousProjects></PreviousProjects>
      <FeaturedProjects></FeaturedProjects>
      <Testimonials></Testimonials>
      <Quote></Quote>
    </div>
  );
};

export default Projects;
