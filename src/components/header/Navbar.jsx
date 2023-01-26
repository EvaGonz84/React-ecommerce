import { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import CartDetails from "./CartDetails";

const Navbar = () => {
  {
    /*initial state with classes for md & mobile devices*/
  }
  const [navClass, setNavClass] = useState(
    "hidden font-bold flex-col md:mr-auto md:flex md:flex-row md:gap-4 w-4/5 md:static"
  );

  const [openCartDetails, setOpenCartDetails] = useState(false);

  {
    /*this function changes the classes & the menu appears when the button is clicked*/
  }

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 h-full p-8 font-bold bg-white flex flex-col md:mr-auto md:flex md:flex-row md:gap-4 w-4/5 md:static z-20"
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
      <header className="container flex items-center mx-auto gap-10 px-6 py-4 md:px-2 text-2xl bg-grey">
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
          <button
            onClick={() => setOpenCartDetails(!openCartDetails)}
            className="pt-2"
          >
            <FaShoppingCart className="hover:fill-yellow-600" />
          </button>
          {/*the state changes on the onclick and the component appears */}
          {openCartDetails && <CartDetails />}
        </div>
      </header>
    </>
  );
};

export default Navbar;
