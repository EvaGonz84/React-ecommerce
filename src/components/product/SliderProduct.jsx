import imgProduct1 from "../../assets/images/bread-5.jpg";
import imgProduct2 from "../../assets/images/bread-6.jpg";
import imgProduct3 from "../../assets/images/bread-7.jpg";
import imgProduct4 from "../../assets/images/bread-8.jpg";
import imgProductSmall1 from "../../assets/images/bread-1.jpg";
import imgProductSmall2 from "../../assets/images/bread-2.jpg";
import imgProductSmall3 from "../../assets/images/bread-3.jpg";
import imgProductSmall4 from "../../assets/images/bread-4.jpg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useState } from "react";

const arrayImgs = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const arrayImgsSmall = [
  imgProductSmall1,
  imgProductSmall2,
  imgProductSmall3,
  imgProductSmall4,
];
const SliderProduct = () => {
  const [index, setIndex] = useState(0);

  {
    /*Function to rewind the images.
  If the state is equal to 0, it returns to the last element of the array
 */
  }
  const handleClickPrev = () => {
    index === 0 ? setIndex(arrayImgs.length - 1) : setIndex(index - 1);
  };
  {
    /*Function to advance images.
If the state is equal to the index of the last element, it returns to the first element of the array*/
  }
  const handleClickNext = () => {
    index === arrayImgs.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  return (
    <>
      <article className="grid md:grid-cols-4 md:gap-8">
        <div className="col-span-4 relative">
          <img
            src={arrayImgs[index]}
            alt="bread-image"
            className="aspect-[16/12] w-full object-cover md:aspect-[16/16] md:rounded-md xl:aspect-[16/14] xl:max-h-[500px]"
          />
          <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4">
            <button
              onClick={handleClickPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={handleClickNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        {/*Array that renders small images */}
        {arrayImgsSmall.map((item, i) => {
          return (
            <img
              onClick={() => setIndex(i)}
              key={i}
              src={item}
              alt="bread-image"
              /*when state and index match the image becomes opaque */
              className={
                index === i
                  ? "focus: hidden cursor-pointer opacity-60 md:block md:rounded-md"
                  : "focus: hidden cursor-pointer hover:opacity-60 md:block md:rounded-md"
              }
            />
          );
        })}
      </article>
    </>
  );
};

export default SliderProduct;
