import FeaturedProjects from "./FeaturedProjects";
import PreviousProjects from "./PreviousProjects";
import ProjectsTop from "./ProjectsTop";
import Quote from "./Quote";
import Testimonials from "./Testimonials";
import { getDictionary } from "../dictionaries";

export const metadata = {
  title: "Projects | Mazaya Fast Logistics",
  description:
    "Explore our successfully completed and ongoing logistics projects across Saudi Arabia and the region.",
};

const Projects = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-[#0A0700] font-manrope">
      <ProjectsTop heroT={dict.projects?.hero} />
      <PreviousProjects />
      <FeaturedProjects />
      <Testimonials />
      <Quote t={dict.projects?.cta} lang={lang} />
    </div>
  );
};

export default Projects;
