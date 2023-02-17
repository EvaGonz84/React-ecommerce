const NotFoundPage = () => {
  return (
    <>
      <section className="container flex flex-col justify-center items-center min-h-[calc(100vh-250px)]">
        <h1 className="text-center text-4xl font-bold tracking-wider">
          404 Not found
        </h1>
        <p className="text-xl font-semibold text-center">Oops!The page you are looking for doesn't exist</p>
      </section>
    </>
  );
};

export default NotFoundPage;
