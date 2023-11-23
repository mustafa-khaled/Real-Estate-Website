import HeroSection from "../components/heroSection/HeroSection";
import ProjectsComponent from "../components/Projects";
import ClientTestimonials from "../components/ClientTestimonials";

function Projects() {
  return (
    <div>
      <HeroSection page={"Projects"} />
      <ProjectsComponent />
      <ClientTestimonials />
    </div>
  );
}

export default Projects;
