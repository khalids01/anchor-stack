import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="flex justify-center items-center flex-col h-full w-full">
      <h1
        className="text-6xl text-dark text-center mb-6"
        style={{ fontWeight: 700 }}
      >
        404
      </h1>
      <Link to="/" className="text-teal-500 px-6 py-3 border rounded-xl">
        Go back
      </Link>
    </section>
  );
};
export default PageNotFound;
