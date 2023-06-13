import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex list-none ">
      <NavLink to="/">
        <li>Home</li>
      </NavLink>

      <NavLink to="/about">
        <li>About</li>
      </NavLink>

      <NavLink to="/products">
        <li>Products</li>
      </NavLink>

      <NavLink to="/contact">
        <li>Contact</li>
      </NavLink>

      <NavLink to="/cart">
        <li>{<BsCart3 />}</li>
        <span>10</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
