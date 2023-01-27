const Form = () => {
  return (
    <form className="flex flex-col gap-8 w-[50%] mx-auto py-4 md:py-14">
      <input
        className="bg-white p-2 tracking-wider"
        type="text"
        placeholder="First Name"
      />
      <input
        className="bg-white p-2 tracking-wider"
        type="text"
        placeholder="Last Name"
      />
      <input
        className="bg-white p-2 tracking-wider"
        type="text"
        placeholder="Email"
      />
      <textarea
        className="bg-white p-2 h-40 tracking-wider"
        placeholder="Message"
      ></textarea>
      <button className="bg-yellow-600 hover:bg-yellow-500 p-4 rounded-md tracking-wider">
        Send
      </button>
    </form>
  );
};

export default Form;
