import imgProduct from "../assets/images/bread-5.jpg";
import imgProduct1 from "../assets/images/bread-1.jpg";
import imgProduct2 from "../assets/images/bread-2.jpg";
import imgProduct3 from "../assets/images/bread-3.jpg";
import imgProduct4 from "../assets/images/bread-4.jpg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const SliderProduct = () => {
  return (
    <>
      <article className="grid md:grid-cols-4 md:gap-8">
        <div className="col-span-4 relative">
          <img src={imgProduct} alt="bread-image" className="aspect-[16/12]" />
          <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <FaAngleLeft />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <FaAngleRight />
            </button>
          </div>
        </div>
        <img src={imgProduct1} alt="bread-image" className="hidden md:block" />
        <img src={imgProduct2} alt="bread-image" className="hidden md:block" />
        <img src={imgProduct3} alt="bread-image" className="hidden md:block" />
        <img src={imgProduct4} alt="bread-image" className="hidden md:block" />
      </article>
    </>
  );
};

export default SliderProduct;
