import { useState } from "react";
import { FaBars, FaTrashAlt, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import smallImage from "../../assets/images/bread-1.jpg";

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
          <section className="absolute top-[70px] left-0 z-10 w-full md:left-[95%] md:max-w-2xl md:-translate-x-full">
            <div className="mx-8 rounded-md bg-white md:mx-8">
              <h4 className="px-4 py-6 text-lg font-semibold">Cart</h4>
              <hr />
              <article className="grid grid-cols-[1fr_4fr_1fr] items-center gap-8 px-6 py-8 text-lg">
                <img
                  src={smallImage}
                  className="rounded-md"
                  alt="bread-image"
                ></img>
                <div>
                  <p>Lorem ipsum dolor sit amet</p>
                  <div>
                    <span>$3x4</span>
                    <span className="font-semibold"> $12</span>
                  </div>
                </div>
                <button className="ml-auto">
                  <FaTrashAlt className="hover:fill-yellow-600" />
                </button>
              </article>

              <div className="px-6 pb-8">
                <button className="w-full rounded-md bg-yellow-600 p-2 font-semibold transition-all hover:bg-yellow-500 text-lg">
                  Checkout
                </button>
              </div>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Navbar;
