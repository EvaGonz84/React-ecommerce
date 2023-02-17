import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import Button from "../components/button/Button";
import { Link } from "react-scroll";
import { FaChevronCircleDown } from "react-icons/fa";
const ProductHome = lazy(() => import("../components/product/ProductHome"));
const HomePage = () => {
  return (
    <>
      <main className="h-[710px] flex flex-col justify-center items-center text-center gap-8 md:gap-16 img-home bg-no-repeat bg-cover">
        <h1 className="text-4xl w-[90%] md:text-6xl md:w-3/4 leading-normal tracking-wider">
        Delicious sourdough bread
        <p className="text-xl md:text-4xl mt-1">Taste the difference!</p>
        </h1>
        <div className="flex flex-col gap-4 mb-10 md:gap-8 md:flex-row">
          <NavLink to="/product">
            <Button text="Product"></Button>
          </NavLink>
          <NavLink to="/contact">
            <Button text="Contact"></Button>
          </NavLink>
        </div>
        <Link
          to="info-product"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-45}
          duration={1200}
        >
          <FaChevronCircleDown className="scroll-arrow" />
        </Link>
      </main>
      <Suspense fallback={<h1>Loading</h1>}>
        <ProductHome />
      </Suspense>
    </>
  );
};

export default HomePage;
