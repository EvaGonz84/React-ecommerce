import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import ProductHome from "../components/product/ProductHome";

const HomePage = () => {
  return (
    <>
      <main className="h-[710px] flex flex-col justify-center items-center text-center gap-16 bg-bread-home bg-no-repeat bg-cover">
        <h1 className="text-4xl w-[90%] md:text-6xl md:w-3/4 leading-normal tracking-wider">
          Te ofrecemos la mejor calidad de un pan en un solo click
        </h1>
        <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
          <Link to="/product">
            <Button text="Ver producto"></Button>
          </Link>
          <Button text="Contáctanos"></Button>
        </div>
      </main>
      <ProductHome />
    </>
  );
};

export default HomePage;
