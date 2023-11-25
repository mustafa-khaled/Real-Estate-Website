import { Link } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="min-h-[100vh] flex items-center justify-center text-white text-center">
      <div>
        <h2
          className="md:text-9xl text-5xl"
          style={{
            color: "rgba(255, 255, 255, 0)",
            WebkitTextStrokeWidth: "1.5px",
            WebkitTextStrokeColor: "white",
            opacity: "0.15",
          }}>
          404
        </h2>

        <p className="my-[20px] text-gray">Page not found</p>
        <Link to={"/"} replace>
          <Button>Go to home page!</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
