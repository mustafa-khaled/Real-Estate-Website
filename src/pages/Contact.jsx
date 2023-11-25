import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

import HeroSection from "../components/heroSection/HeroSection";

function Contact() {
  return (
    <div>
      <HeroSection page={"Contact"} />
      <div className=" text-white">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;
