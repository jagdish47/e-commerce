import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "../images/shopping-logo.png";

const Header = () => {
  return (
    <div className="h-24 w-full flex items-center justify-between bg-[#F6F8FA]">
      <NavLink to="/">
        <img className="w-20 ml-10" src={Logo} alt="logo-here" />
      </NavLink>
      <Navbar />
    </div>
  );
};

export default Header;
