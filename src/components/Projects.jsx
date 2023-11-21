import { Link } from "react-router-dom";
import { projectsData } from "../data/data";
import Button from "./Button";

function Projects() {
  return (
    <div className="container mx-auto px-[10px] font-bold">
      <h3 className="text-center uppercase">
        Discover a Broad Range Of Units That Will Suit Your Needs
      </h3>

      <div className="flex items-start gap-[20px] flex-wrap mt-[20px] lg:w-[90%] w-full mx-auto">
        {projectsData.map((p) => {
          return (
            <div
              key={p.id}
              className="bg-[#262626] hover:bg-[#333333] md:w-[calc(50%-20px)] w-full">
              <img
                src={p.image}
                alt={p.description}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-[20px] ">
                <h4>{p.title}</h4>
                <p className="my-[20px] text-gray">{p.description}</p>
                <Link to={"/projects"}>
                  <Button>See More!</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
