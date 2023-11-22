import { MdLocalPhone } from "react-icons/md";
import Button from "../Button";

function RequestCallback() {
  return (
    <div
      className="py-[80px] text-white"
      style={{
        backgroundImage: "linear-gradient(45deg, #141414, #222222)",
      }}>
      <div
        className="container mx-auto px-[10px] flex items-center justify-between gap-[20px]
      md:flex-row flex-col
      ">
        <div className="md:w-[50%] w-full flex items-center gap-[20px] md:flex-row flex-col md:text-left text-center">
          <div className="bg-primary rounded-md">
            <MdLocalPhone className="text-5xl text-[#141414]" />
          </div>
          <div>
            <h2 className="text-2xl uppercase font-bold mb-[10px]">
              Request a Callback
            </h2>
            <p className="text-gray">
              Submit your contact information and any questions you have in mind
              and we will happily assist you.
            </p>
          </div>
        </div>

        <div>
          <Button>Request A Callback</Button>
        </div>
      </div>
    </div>
  );
}

export default RequestCallback;
