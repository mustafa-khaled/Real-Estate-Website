import { useState } from "react";
import { formData } from "../data/data";
import Container from "./Container";
import Button from "./Button";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  error: "",
  submit: "",
};

function ContactForm() {
  const [values, setValues] = useState(initialState);
  const { firstName, lastName, phone, error, submit } = values;

  // Function to handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone) {
      setValues({ ...values, error: "Please fill all required fields." });
      return;
    } else {
      setValues({
        ...initialState,
        submit: "Your Request successfully sent.",
      });
      setTimeout(() => {
        setValues({ ...initialState });
      }, 5000);
    }
  };

  return (
    <div className="relative top-[-100px]">
      <Container>
        <div className="bg-lightGray sm:p-[40px] p-[20px]">
          <div>
            <h1 className="sm:text-4xl text-2xl uppercase font-bold">
              Request A Callback
            </h1>
            <p className="text-gray mt-[10px] sm:text-base text-sm">
              Submit your contact information and any questions you have in mind
              and we will happily assist you.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              className="mt-[20px] grid sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
             grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
            gap-[20px]">
              {formData.map((el) => (
                <div key={el.id}>
                  <input
                    className="border-none w-full outline-none p-[10px] bg-[#262626] placeholder:text-gray"
                    type={el.type}
                    name={el.name}
                    placeholder={el.placeholder}
                    value={values[el.name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>

            <div className="my-[20px]">
              <textarea
                className="border-none sm:w-[50%] w-full outline-none p-[10px] bg-[#262626] placeholder:text-gray resize-none h-[200px]"
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleInputChange}
              />
            </div>

            <Button>Submit</Button>

            {error && <p className="mt-[20px] text-red-400">{error}</p>}
            {submit && <p className="mt-[20px] text-primary">{submit}</p>}
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ContactForm;
