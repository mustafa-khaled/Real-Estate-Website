import ContactForm from "../components/ContactForm";
import HeroSection from "../components/heroSection/HeroSection";

function Contact() {
  return (
    <div>
      <HeroSection page={"Contact"} />
      <div className="bg-secondary text-white">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
