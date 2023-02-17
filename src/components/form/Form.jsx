import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-[85%] md:w-[50%] mx-auto py-4 md:py-14"
    >
      <input
        className={
          errors.firstName
            ? "bg-white p-2 tracking-wider border border-red-600 focus:outline-red-600"
            : "bg-white p-2 tracking-wider"
        }
        type="text"
        placeholder="First Name"
        {...register("firstName", {
          required: {
            value: true,
            message: "⚠ First name is required",
          },
          minLength: {
            value: 2,
            message: "⚠ Minimum 2 letters",
          },
        })}
      />
      {errors.firstName && (
        <div className="flex mt-[-15px]">
          <span className="text-red-600 font-bold">
            {errors.firstName.message}
          </span>
        </div>
      )}

      <input
        className={
          errors.lastName
            ? "bg-white p-2 tracking-wider border border-red-600 focus:outline-red-600"
            : "bg-white p-2 tracking-wider"
        }
        type="text"
        placeholder="Last Name"
        {...register("lastName", {
          required: {
            value: true,
            message: "⚠ Last name is required",
          },
          minLength: {
            value: 2,
            message: "⚠ Minimum 2 letters",
          },
        })}
      />
      {errors.lastName && (
        <div className="flex mt-[-15px]">
          <span className=" text-red-600 font-bold">
            {errors.lastName.message}
          </span>
        </div>
      )}
      <input
        className={
          errors.email
            ? "bg-white p-2 tracking-wider border border-red-600 focus:outline-red-600"
            : "bg-white p-2 tracking-wider"
        }
        type="text"
        placeholder="Email"
        {...register("email", {
          required: {
            value: true,
            message: "⚠ An email is required",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "⚠ The email is not correct",
          },
        })}
      />
      {errors.email && (
        <div className="flex mt-[-15px]">
          <span className=" text-red-600 font-bold">
            {errors.email.message}
          </span>
        </div>
      )}

      <textarea
        className={
          errors.message
            ? "bg-white p-2 tracking-wider border border-red-600 focus:outline-red-600"
            : "bg-white p-2 tracking-wider"
        }
        placeholder="Message"
        {...register("message", {
          required: {
            value: true,
            message: "⚠ A message is required",
          },
        })}
      ></textarea>
      {errors.message && (
        <div className="flex mt-[-15px]">
          <span className=" text-red-600 font-bold">
            {errors.message.message}
          </span>
        </div>
      )}

      <button
        type="submit"
        className="bg-yellow-600 hover:bg-yellow-500 p-4 rounded-md tracking-wider"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
