import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerData } from "../data/data";
import { MdOutlineDehaze } from "react-icons/md";
import logo from "/logo.png";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleHeader = () => {
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Check if the user has scrolled past a certain threshold (e.g., 100px)
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-[80px] text-white w-full fixed z-50 flex items-center border-b border-gray ${
        isScrolled || isActive ? "bg-secondary" : "md:bg-transparent"
      }`}>
      <div className="container relative mx-auto px-[20px] flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="new capital logo" className="w-[60px]" />
          </Link>
        </div>
        <ul
          className={`header-links flex items-center justify-center md:flex-row flex-col gap-[40px] uppercase bg-secondary
         md:bg-transparent md:static fixed top-[80px] md:h-auto h-[calc(100vh-80px)] md:w-auto ${
           isActive ? "w-full right-0" : "right-[-400px]"
         } z-50`}>
          {headerData.map((l) => {
            return (
              <li key={l.id}>
                <NavLink to={l.to} className="relative">
                  {l.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="md:hidden block">
          <MdOutlineDehaze
            className="text-xl cursor-pointer"
            onClick={handleToggleHeader}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;