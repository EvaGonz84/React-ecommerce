import imgProduct1 from "../../assets/images/bread-10.jpg";
import imgProduct2 from "../../assets/images/bread-11.jpg";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import TextProductHome from "./TextProductHome";

const ProductHome = () => {
  return (
    <>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <TextProductHome text="Get ready to experience the freshest, tastiest sourdough bread you've ever had!Our handcrafted loaves are made with the finest ingredients and slow-fermented for maximum flavor.If you want to know more, please contact us." />
        <article
          id="info-product"
          className="flex flex-col md:flex-row justify-center items-center text-center gap-10 pb-10"
        >
          <div className="aspect-[16/9] md:w-1/2">
            <img src={imgProduct1} alt="bread-image" />
          </div>
          <div className="flex flex-col justify-center items-center gap-8 md:w-1/2 md:items-start">
            <p className="text-xl text-center tracking-wider leading-normal md:text-2xl md:text-start">
            With its unique taste and texture, it's a delicious treat for breakfast, lunch or dinner and perfect for those who want to eat healthy! 
            </p>
            <Link to="/product">
              <Button text="Product" />
            </Link>
          </div>
        </article>
        <article className="flex flex-col md:flex-row-reverse justify-center items-center text-center gap-10 pb-10">
          <div className="aspect-[16/9] md:w-1/2">
            <img src={imgProduct2} alt="bread-image" />
          </div>
          <div className="flex flex-col justify-center items-center gap-8 md:items-start md:w-1/2">
            <p className="text-xl text-center tracking-wider leading-normal md:text-2xl md:text-start">
              Enjoy the unique texture and freshness of our artisanal sourdough bread, you won't find anything else like it!
            </p>
            <Link to="/product">
              <Button text="Product" />
            </Link>
          </div>
        </article>
        <TextProductHome
          text="Our artisanal sourdough bread is made from all-natural, organic ingredients.
          If you want to know more about our ingredients, please contact us."
        />
      </section>
    </>
  );
};

export default ProductHome;
