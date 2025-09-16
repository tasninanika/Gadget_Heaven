import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import errorAnimation from "../assets/error.json";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Helmet>
        <title>404 || Gadget Heaven</title>
      </Helmet>
      <div className="w-80 md:w-[800px]">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
    </div>
  );
};

export default ErrorPage;
