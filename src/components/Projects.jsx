import { Link } from "react-router-dom";
import { projectsData } from "../data/data";
import Button from "./Button";
import Container from "./Container";

function Projects() {
  return (
    <div className="bg-lightGray text-white py-[80px]">
      <Container>
        <div className="font-bold">
          <h3 className="text-center uppercase font-bold sm:text-xl text-lg">
            Discover a Broad Range Of Units That Will Suit Your Needs
          </h3>

          <div className="flex items-start gap-[20px] flex-wrap mt-[40px] mx-auto">
            {projectsData.map((p) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  key={p.id}
                  className="bg-[#262626] hover:bg-[#333333] md:w-[calc(50%-20px)] w-full md:min-h-[500px] min-h-[400px]">
                  <img
                    src={p.image}
                    alt={p.description}
                    className="w-full sm:h-[300px] h-[250px] object-cover"
                  />
                  <div className="p-[20px] ">
                    <h4 className="uppercase text-xl font-bold">{p.title}</h4>
                    <p className="my-[20px] text-gray md:text-base text-sm">
                      {p.description}
                    </p>
                    <Link to={p.to}>
                      <Button>See More!</Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
