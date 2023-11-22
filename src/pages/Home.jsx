import HeroSection from "../components/home/HeroSection";
import ClientTestimonials from "../components/ClientTestimonials";
import ProjectsSection from "../components/home/ProjectsSection";
import AboutUs from "../components/AboutUs";
import RequestCallback from "../components/home/RequestCallback";

function Home() {
  return (
    <div>
      <HeroSection />
      <ClientTestimonials />
      <ProjectsSection />
      <AboutUs />
      <RequestCallback />
    </div>
  );
}

export default Home;
