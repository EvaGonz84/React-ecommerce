import Button from "../button/Button";
import { FaRegHeart } from "react-icons/fa";

const TextProductHome = ({ text }) => {
  return (
    <>
      <article className="flex flex-col justify-center items-center text-center tracking-wider leading-normal text-xl md:text-2xl gap-8 py-12">
        <p>{text}</p>
        <Button text="Contact"></Button>
        <FaRegHeart style={{ fontSize: "80px", fill: "#E6B325" }} />
      </article>
    </>
  );
};

export default TextProductHome;
