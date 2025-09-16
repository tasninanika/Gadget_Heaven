import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import errorAnimation from "../assets/error.json";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen -mt-32">
      <Helmet>
        <title>404 || Gadget Heaven</title>
      </Helmet>

      <div className="w-96 md:w-[800px]">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      <h1 className="text-3xl font-bold -mt-48 text-gray-800">
        Page Not Found
      </h1>
      <p className="text-gray-600 mt-2 text-center">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default ErrorPage;
