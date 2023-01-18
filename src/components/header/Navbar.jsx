import { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
  {
    /*initial state with classes for md & mobile devices*/
  }
  const [navClass, setNavClass] = useState(
    "hidden font-bold flex-col md:mr-auto md:flex md:flex-row md:gap-4 w-4/5 md:static"
  );

  {
    /*this function changes the classes & the menu appears when the button is clicked*/
  }

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 h-full p-8 font-bold bg-white flex flex-col md:mr-auto md:flex md:flex-row md:gap-4 w-4/5 md:static z-10"
    );
  };
  {
    /*this function returns the initial state */
  }
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold flex-col md:mr-auto md:flex md:flex-row md:gap-4 w-4/5 md:static"
    );
  };
  return (
    <>
      <header className="container flex items-center mx-auto gap-10 p-2 text-2xl bg-grey">
        <button onClick={handleOpenMenu} className="md:hidden">
          <FaBars />
        </button>
        <Link to="/" className="mr-auto md:mr-0" href="#" alt="company-logo">
          LOGO
        </Link>
        <nav className={navClass}>
          <button onClick={handleCloseMenu} className="mb-16 md:hidden">
            <FaTimes />
          </button>
          <NavLink closeMenu={handleCloseMenu} textHome="Home" />
          <NavLink closeMenu={handleCloseMenu} textProduct="Product" />
        </nav>
        <div>
          <button className="pt-2">
            <FaShoppingCart />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
