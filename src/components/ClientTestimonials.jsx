import { clientTestimonialsData } from "../data/data";
import Container from "./Container";

function ClientTestimonials() {
  return (
    <div className="bg-secondary text-white py-[100px]">
      <Container>
        <div className="flex lg:flex-row flex-col lg:gap-[5px] gap-[20px]">
          {clientTestimonialsData.map((el) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                key={el.id}
                className="w-full flex items-center lg:flex-row flex-col lg:text-left text-center ">
                <div
                  className={`lg:pr-[20px] lg:border-r  border-gray hover:border-primary `}
                  style={{ transition: "all 100ms ease-in-out" }}>
                  <h2 className="text-4xl">{el.number}</h2>
                  <p className="uppercase text-primary text-base py-[5px] lg:py-0">
                    {el.title}
                  </p>
                </div>
                {/* Adding some space to the middle one  */}
                <div
                  className={`lg:pl-[20px] text-sm text-gray ${
                    el.id === 2 ? "lg:pr-[20px]" : ""
                  }`}>
                  {el.description}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default ClientTestimonials;
