import { contactInfoData } from "../../data/data";
import Container from "../Container";

function ContactInfo() {
  return (
    <Container>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-[10px] gap-[20px]">
        {contactInfoData.map((el) => {
          return (
            <div key={el.id} className="flex items-center gap-[10px] ">
              <img
                src={el.image}
                alt={el.title}
                className="rounded-full md:w-[60px] w-[40px]"
              />
              <p className="text-gray sm:text-sm text-xs hover:text-primary">
                {el.title}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default ContactInfo;
