import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="m-4 p-4">
      <h1>404 PAGE NOT FOUND!!!!</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to={"/"}>
        <button className="border border-solid border-black bg-red-200">
          Go back to home page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
