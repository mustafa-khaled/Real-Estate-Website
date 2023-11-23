import { clientTestimonialsData } from "../data/data";

function ClientTestimonials() {
  return (
    <div className="bg-secondary text-white py-[100px]">
      <div className="container mx-auto px-[10px] flex  lg:flex-row flex-col lg:gap-0 gap-[20px]">
        {clientTestimonialsData.map((el) => {
          return (
            <div
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
    </div>
  );
}

export default ClientTestimonials;
