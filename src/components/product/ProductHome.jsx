import imgProduct1 from "../../assets/images/bread-10.jpg";
import imgProduct2 from "../../assets/images/bread-11.jpg";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import TextProductHome from "./TextProductHome";

const ProductHome = () => {
  return (
    <>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <TextProductHome
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero porro
          velit, iste veniam praesentium voluptates? Minima fugit explicabo
          voluptas nesciunt ut quo consectetur beatae accusantium, tempora
          laboriosam consequatur."
        />
        <article id='info-product' className="flex flex-col md:flex-row justify-center items-center text-center gap-10 mb-20">
          <div className="aspect-[16/9] md:w-1/2">
            <img src={imgProduct1} alt="bread-image" />
          </div>
          <div className="flex flex-col justify-center items-center gap-8  md:w-1/2 md:items-start">
            <p className="text-2xl text-center  tracking-wider leading-normal md:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus deleniti beatae quos officia eos.
            </p>
            <Link to="/product">
              <Button text="Ver producto" />
            </Link>
          </div>
        </article>
        <article className="flex flex-col md:flex-row-reverse justify-center items-center text-center gap-6">
          <div className="aspect-[16/9] md:w-1/2">
            <img src={imgProduct2} alt="bread-image" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:items-start md:w-1/2">
            <p className="text-2xl text-center  tracking-wider trleading-normal md:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus deleniti beatae quos officia eos.
            </p>
            <Button text="Contáctanos" />
          </div>
        </article>
        <TextProductHome text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
      </section>
    </>
  );
};

export default ProductHome;
