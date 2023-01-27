import Button from "../button/Button";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const TextProductHome = ({ text }) => {
  return (
    <>
      <article className="flex flex-col justify-center items-center text-center tracking-wider leading-normal text-xl md:text-2xl gap-8 py-12">
        <p>{text}</p>
        <Link to='/contact'>
        <Button text="Contact"></Button>
        </Link>
        <FaRegHeart style={{ fontSize: "80px", fill: "#E6B325" }} />
      </article>
    </>
  );
};

export default TextProductHome;
