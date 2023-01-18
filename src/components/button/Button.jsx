const Button = ({ text }) => {
  return (
    <>
      <button className="bg-transparent hover:bg-black hover:text-white border-2 border-black transition-all duration-300 px-8 py-2 rounded uppercase text-lg font-semibold tracking-widest">
        {text}
      </button>
    </>
  );
};

export default Button;
