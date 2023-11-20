import { useState } from "react";
import { projectsData } from "../../data/data";
import Header from "../Header";
import Overlay from "./Overlay";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

function HeroSection() {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === projectsData.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return projectsData.length - 1;
      return index - 1;
    });
  };

  return (
    <div
      className="bg-cover min-h-screen text-white relative"
      style={{
        backgroundImage: `url(${projectsData[imageIndex].image})`,
        backgroundPosition: "60%",
      }}>
      <Overlay />
      <Header />
      <section className="h-[calc(100vh-80px)]">
        <div className="container mx-auto px-[10px] relative">
          <div className="relative h-[85vh] w-full">
            {/* Content */}
            <div
              className="text-center h-full flex items-center justify-center flex-col
               w-[80%] mx-auto p-[20px] uppercase">
              <p>{projectsData[imageIndex].description}</p>
              <h2 className="sm:text-5xl text-2xl font-bold mt-[10px]">
                {projectsData[imageIndex].title}
              </h2>
            </div>

            {/* Next and prev buttons */}
            <button
              onClick={showPrevImage}
              style={{ transition: "backgroundColor 100ms ease-in-out" }}
              className="text-gray-400 hover:text-gray-100 absolute bottom-0 left-0 top-0 block
        cursor-pointer rounded-xl p-[1rem] text-4xl transition duration-100
      ease-in-out ">
              <MdArrowBackIosNew className="text-2xl" />
            </button>

            <button
              onClick={showNextImage}
              style={{ transition: "backgroundColor 100ms ease-in-out" }}
              className="text-gray-400 hover:text-gray-100 absolute bottom-0 right-0 top-0 block cursor-pointer
      rounded-xl p-[1rem] text-4xl transition duration-100
      ease-in-out ">
              <MdArrowForwardIos className="text-2xl" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
