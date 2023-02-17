import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  {
    /*data to update the date automatically */
  }
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="flex flex-col justify-center items-center bg-yellow-600 tracking-wider leading-normal text-xl font-semibold gap-4 p-10">
        <div>
          <p className="text-center">{`Copyright © company ${year}`}</p>
        </div>
        {/*Social media links*/}
        <div className="flex gap-4 cursor-pointer">
          <FaInstagram />
          <FaFacebook />
        </div>
      </footer>
    </>
  );
};

export default Footer;
