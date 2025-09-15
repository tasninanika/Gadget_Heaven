import { Helmet } from "react-helmet-async";
import page404 from "../../src/assets/404_page-not-found.png"
const ErrorPage = () => {
    return (
      <div>
        <Helmet>
          <title>ErrorPage || Gadget Heaven</title>
        </Helmet>
        <img
          src={page404}
          alt="page not found"
          className="w-[1500px] mx-auto"
        />
      </div>
    );
};

export default ErrorPage;