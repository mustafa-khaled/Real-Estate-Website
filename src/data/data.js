import image1 from "../Assets/villa.jpg";
import image2 from "../Assets/Apartment.jpg";
import image3 from "../Assets/hotel-apartment.jpg";
import image4 from "../Assets/commercial-1.jpg";
import image5 from "../Assets/administrative.jpg";
import image6 from "../Assets/medical.jpg";
import image7 from "../Assets/woman-working-pharmacy-wearing-coat.jpg";
import image8 from "../Assets/new-cairo-city.jpg";

import experienceIcon from "../Assets/experience-iconnn.png";
import trustIcon from "../Assets/trust-icon.png";
import varietyIcon from "../Assets/variety-icon.png";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const projectsData = [
  {
    id: 1,
    title: "Villa",
    description: "Settle In a Modern Villa With Your Family",
    image: image1,
  },
  {
    id: 2,
    title: "Apartment",
    description: "Experience urban living at its finest in our apartments",
    image: image2,
  },
  {
    id: 3,
    title: "Hotel Apartment",
    description: "Discover unlimited options and move to the new capital city",
    image: image3,
  },
  {
    id: 4,
    title: "Commercial",
    description: "Open your new store in Egypt's best city",
    image: image4,
  },
  {
    id: 5,
    title: "Administrative",
    description: "Your new office in a modern work environment",
    image: image5,
  },
  {
    id: 6,
    title: "Medical",
    description: "Medical units available with different facilities",
    image: image6,
  },
  {
    id: 7,
    title: "Pharmacies",
    description:
      "Healthcare made easy with pharmacies units with different facilities",
    image: image7,
  },
  {
    id: 8,
    title: "New Cairo",
    description:
      "Experience the allure of a vibrant community in the heart of New Cairo",
    image: image8,
  },
];

export const headerData = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Projects", to: "/projects" },
  { id: 3, title: "About", to: "/about" },
  { id: 4, title: "Contact", to: "/contact" },
];

export const clientTestimonialsData = [
  {
    id: 1,
    number: "8000",
    title: "Clients",
    description:
      "Proudly serving a huge number of satisfied clients from different nationalities",
  },

  {
    id: 2,
    number: "350",
    title: "Projects",
    description:
      "Consultancy in many real estate projects of all types all over Egypt",
  },

  {
    id: 3,
    number: "6",
    title: "Years",
    description:
      "Profound knowledge and extensive experience throughout the years in real estate field",
  },
];

export const aboutUsData = [
  {
    id: 1,
    title: "Experience",
    image: experienceIcon,
    description:
      "Based on our extensive experience and resources, we provide sincere consultancy you can depend on to help you with your investment and property buying decisions.",
    bgColor: "#222222",
  },
  {
    id: 2,
    title: "Trust",
    image: trustIcon,
    description:
      "We have built a reputation through meaningful communication and honesty with our clients. We are trusted to fulfill promises and take care of our clients’ concerns.",
    bgColor: "#141414",
  },

  {
    id: 3,
    title: "Variety",
    image: varietyIcon,
    description:
      "We specialize in various projects that offer all types of units such as apartments, penthouses, villas, commercial, administrative, and medical units.",
    bgColor: "#222222",
  },
];

export const footerIcons = [
  { id: 1, icon: FaFacebookSquare },
  { id: 2, icon: FaInstagram },
  { id: 3, icon: FaLinkedin },
  { id: 4, icon: FaTwitter },
];

export const formData = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
  },

  {
    id: 3,
    name: "phone",
    type: "number",
    placeholder: "Your Phone",
  },

  {
    id: 4,
    name: "email",
    type: "email",
    placeholder: "Your Email (optional)",
  },
];
