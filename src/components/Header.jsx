import { NavLink } from "react-router-dom";
import { headerData } from "../data/data";
import logo from "/logo.png";

function Header() {
  return (
    <header className="h-[80px] flex items-center relative border-b border-gray">
      <div className="container  mx-auto px-[10px] flex items-center justify-between">
        <div>
          <img src={logo} alt="new capital logo" className="w-[60px]" />
        </div>
        <ul className="header-links flex items-center gap-[40px] uppercase">
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
      </div>
    </header>
  );
}

export default Header;
