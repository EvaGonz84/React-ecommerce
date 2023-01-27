import { Link } from "react-router-dom";

const NavLink = ({ textHome, textProduct, textContact, closeMenu }) => {
  return (
    <>
      {/*the peer class is for the line to appear on hover */}
      <Link onClick={closeMenu} to="/" className="relative py-4">
        <span className="peer hover:text-yellow-600">{textHome}</span>
        <span className="absolute bottom-2 left-0 block h-1 w-full scale-x-0 transition-all duration-300 peer-hover:scale-x-100 peer-hover:bg-yellow-600"></span>
      </Link>

      <Link onClick={closeMenu} to="/product" className="relative py-4">
        <span className="peer hover:text-yellow-600">{textProduct}</span>
        <span className="absolute bottom-2 left-0 block h-1 w-full scale-x-0 transition-all duration-300 peer-hover:scale-x-100 peer-hover:bg-yellow-600"></span>
      </Link>

      <Link onClick={closeMenu} to="/contact" className="relative py-4">
        <span className="peer hover:text-yellow-600">{textContact}</span>
        <span className="absolute bottom-2 left-0 block h-1 w-full scale-x-0 transition-all duration-300 peer-hover:scale-x-100 peer-hover:bg-yellow-600"></span>
      </Link>
    </>
  );
};

export default NavLink;
