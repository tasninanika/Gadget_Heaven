import { Helmet } from "react-helmet-async";

const Statistics = () => {
    return (
      <div className="bg-purple-600 h-42 text-white text-center -mt-8 py-6 rounded-lg shadow-md">
        <Helmet>
          <title>Statistics|| Gadget Heaven</title>
        </Helmet>
        <h1 className="text-3xl font-bold">Statistics</h1>
        <p className="mt-2">
          Explore the latest gadgets that will take your experience to the next
          level.
        </p>
      </div>
    );
};

export default Statistics;