import { useState } from "react";
import { projectsData } from "../../data/data";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

import Button from "../Button";
import { Link } from "react-router-dom";

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
      <div className="absolute left-0 top-0 w-full h-full bg-[#00000080]"></div>
      <section className="h-[calc(100vh-80px)] ">
        <div className="container mx-auto px-[10px]">
          <div className="relative h-[100vh] w-full">
            {/* Content */}
            <div
              className="text-center h-full flex items-center justify-center flex-col
               w-[80%] mx-auto p-[20px] uppercase relative md:gap-[20px] gap-[10px]">
              <p className="sm:text-base text-xs">
                {projectsData[imageIndex].description}
              </p>
              <h2 className="md:text-7xl sm:text-4xl text-lg  font-bold">
                {projectsData[imageIndex].title}
              </h2>
              <div>
                <Link to={"/projects"}>
                  <Button>See Projects</Button>
                </Link>
              </div>
            </div>

            {/* Next and prev buttons */}

            <button
              className="absolute sm:left-[10px] left-0 top-[50%] translate-y-[-50%] hover:text-gray p-[10px]
               sm:border-l border-[#ccc] hover:translate-x-[-10px]"
              style={{ transition: "all 100ms ease-in-out" }}
              onClick={showPrevImage}>
              <MdArrowBackIosNew className="text-2xl" />
            </button>

            <button
              className="absolute sm:right-[10px] right-0 top-[50%] translate-y-[-50%] hover:text-gray p-[10px]
              sm:border-r border-gray hover:translate-x-[10px]"
              style={{ transition: "all 100ms ease-in-out" }}
              onClick={showNextImage}>
              <MdArrowForwardIos className="text-2xl" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
