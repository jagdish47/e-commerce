import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex">
      <NavLink to="/">
        <img
          className="w-28"
          src="https://logowik.com/content/uploads/images/microsoft-store8986.logowik.com.webp"
          alt="logo-here"
        />
      </NavLink>

      <Navbar />
    </div>
  );
};

export default Header;
