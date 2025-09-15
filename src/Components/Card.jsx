import { Link } from "react-router-dom";

const Card = ({ gadget }) => {
  const { product_id, price, product_image, product_title } = gadget || {}; // Include product_id

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      {/* Image Section */}
      <div className="w-full h-40 bg-gray-200 rounded-lg flex justify-center items-center">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 items-start text-left">
        <h2 className="text-lg font-semibold">{product_title}</h2>
        <p className="text-gray-600 text-lg">Price: {price}</p>

        {/* Button Section */}
        <div className="mt-4">
          <Link to={`/gadget/${product_id}`}>
            <button className="px-4 py-2 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
