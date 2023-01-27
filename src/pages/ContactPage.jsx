import Form from "../components/form/Form";

const ContactPage = () => {
  return (
    <>
      <header>
        <section className="flex flex-col justify-center items-center text-center img-contact bg-no-repeat bg-cover">
          <article className="w-[85%] md:w-[65%] mx-auto py-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-center text-3xl md:text-6xl tracking-wider md:py-10">
                Contact us
              </h2>
              <p className="text-xl text-center tracking-wider leading-normal md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <hr className="border-2 border-yellow-600 w-[20%] mx-auto" />
            </div>
          </article>
          <Form />
        </section>
      </header>
    </>
  );
};

export default ContactPage;
