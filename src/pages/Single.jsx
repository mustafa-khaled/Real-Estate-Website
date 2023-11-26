import { Link, useParams } from "react-router-dom";
import {
  administrativeData,
  apartmentsData,
  commercialData,
  hotelApartmentsData,
  medicalData,
  newCairoData,
  pharmaciesData,
  villaData,
} from "../data/data";
import HeroSection from "../components/heroSection/HeroSection";
import Container from "../components/Container";
import Button from "../components/Button";

import villa from "../Assets/villa.jpg";
import apartment from "../Assets/Apartment.jpg";
import hotelApartment from "../Assets/hotel-apartment.jpg";
import administrative from "../Assets/administrative.jpg";
import commercial from "../Assets/commercial-1.jpg";
import pharmacies from "../Assets/woman-working-pharmacy-wearing-coat.jpg";
import newCairo from "../Assets/new-cairo-city.jpg";

function Single() {
  const { id } = useParams();
  let data, image;

  switch (id) {
    case "villa":
      data = villaData;
      image = villa;
      break;
    case "apartment":
      data = apartmentsData;
      image = apartment;
      break;
    case "hotelApartment":
      data = hotelApartmentsData;
      image = hotelApartment;
      break;
    case "commercial":
      data = commercialData;
      image = commercial;
      break;
    case "administrative":
      data = administrativeData;
      image = administrative;
      break;
    case "medical":
      data = medicalData;
      image = commercial;
      break;
    case "pharmacies":
      data = pharmaciesData;
      image = pharmacies;
      break;
    case "newCairo":
      data = newCairoData;
      image = newCairo;
      break;
    default:
      data = null;
      image = "";
      break;
  }

  return (
    <div>
      <HeroSection page={`Projects > ${id}`} image={image} />
      <Container>
        {data ? (
          <div
            className="relative top-[-100px] text-white grid sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[20px]
          grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            {data.map((el) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  key={el.id}
                  className="relative mx-auto bg-[#262626] transition-all">
                  <div
                    className="absolute top-[20px] left-[50%] translate-x-[-50%] bg-[#262626] flex items-center 
                  w-[75%] sm:text-sm text-xs">
                    <p className="bg-primary p-[5px] w-[50%] text-center">
                      unit Price
                    </p>
                    <p className=" p-[5px] w-[50%] text-center"> 1000.12000</p>
                  </div>

                  <img
                    src={el.image}
                    alt={el.title}
                    className="w-[300px] h-[330px] object-cover"
                  />
                  <div className="p-[20px] ">
                    <h2 className="sm:text-xl font-bold py-[10px]">
                      {el.title}
                    </h2>

                    <div className="py-[10px] text-xs flex items-center gap-[10px] justify-between border-t border-gray">
                      <p>{el.discount} Down Payment</p>
                      <p>{el.Installment} Years Installment</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-white p-[20px] text-center flex items-center justify-center flex-col gap-[20px]">
            <h2 className="text-2xl uppercase font-bold">Category No Found</h2>

            <Link to={"/"} replace>
              <Button>Go To Home!</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Single;
