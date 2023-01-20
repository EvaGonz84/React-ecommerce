import { NavLink } from "react-router-dom";
import Button from "../components/button/Button";
import ProductHome from "../components/product/ProductHome";
import { Link } from "react-scroll";
import { FaChevronCircleDown } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <main className="h-[710px] flex flex-col justify-center items-center text-center gap-16 img-home bg-no-repeat bg-cover">
        <h1 className="text-5xl w-[90%] md:text-6xl md:w-3/4 leading-normal tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="flex flex-col gap-4 mb-10 md:gap-8 md:flex-row">
          <NavLink to="/product">
            <Button text="Product"></Button>
          </NavLink>
          <Button text="Contact"></Button>
        </div>
        <Link
          to="info-product"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-64}
          duration={1200}
        >
          <FaChevronCircleDown className="scroll-arrow" />
        </Link>
      </main>
      <ProductHome />
    </>
  );
};

export default HomePage;
