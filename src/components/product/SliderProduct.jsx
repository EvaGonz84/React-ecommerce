import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useState } from "react";





const SliderProduct = ({images, smallImages}) => {
  const [index, setIndex] = useState(0);

  {
    /*Function to rewind the images.
  If the state is equal to 0, it returns to the last element of the array
 */
  }
  const handleClickPrev = () => {
    index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
  };
  {
    /*Function to advance images.
If the state is equal to the index of the last element, it returns to the first element of the array*/
  }
  const handleClickNext = () => {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  return (
    <>
      <article className="grid md:grid-cols-4 md:gap-8">
        <div className="col-span-4 relative">
          <img
            src={images[index]}
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
        {smallImages.map((item, i) => {
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
