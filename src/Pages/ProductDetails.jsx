import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { addToCart, addToWishlist, getAllWishlist } from "../utils";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const data = useLoaderData();
  const [gadget, setGadget] = useState({});
  const [wishlistItems, setWishlistItems] = useState([]);
  const { product_id } = useParams();

  useEffect(() => {
    const singleData = data.find((item) => item.product_id === product_id);
    setGadget(singleData || {});
  }, [data, product_id]);

  // handle add to cart btn
  const handleAddToCart = (gadget) => {
    addToCart(gadget);
  };
  // handle wishlist btn
  const handleWishlist = (gadget) => {
    addToWishlist(gadget);
  };
  // Load wishlist data when component mounts
  useEffect(() => {
    const Wishlist = getAllWishlist();
    setWishlistItems(Wishlist);
  }, []);

  return (
    <div className="bg-purple-600 h-[350px] text-white relative -mt-8">
      <Helmet>
        <title>Product Details || Gadget Heaven</title>
      </Helmet>
      {/* Banner Text */}
      <div className="text-center max-w-screen-lg mx-auto p-8">
        <h1 className="text-4xl font-bold ">Product Details</h1>
        <p className="py-6 max-w-2xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Card */}
      <div className=" -mt-6 max-w-6xl max-h-12xl mx-auto bg-white rounded-lg shadow-lg p-6 flex gap-6 border border-gray-200">
        {/* Left: Image Section */}
        <div className="w-1/3  rounded-lg flex items-center justify-center">
          <img
            src={gadget.product_image || "placeholder.jpg"}
            alt={gadget.product_title}
            className=" object-cover rounded-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-2/3 flex flex-col">
          <h2 className="text-2xl font-semibold text-black">
            {gadget.product_title || "Product Name"}
          </h2>
          <p className="text-xl font-semibold text-gray-700 mt-1">
            Price:{" "}
            <span className="text-purple-600">${gadget.price || "N/A"}</span>
          </p>
          {/* Stock Status */}
          <span className="w-[110px] mt-2 text-center bg-green-50 border border-green-500 text-green-400 px-3 py-1  rounded-full text-sm font-medium">
            {gadget.inStock ? "In Stock" : "Out of Stock"}
          </span>
          {/* Description */}
          <p className="text-gray-600 mt-3">
            {gadget.description || "No description available."}
          </p>
          {/* Specification */}
          <div className="mt-3">
            <h3 className="font-semibold text-black">Specification:</h3>
            <ul className="list-decimal list-inside text-gray-700 mt-1">
              {gadget.specification ? (
                gadget.specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))
              ) : (
                <li>No specifications available.</li>
              )}
            </ul>
          </div>
          {/* Rating Section */}
          <div className="flex items-center mt-3">
            <span className="font-semibold text-black">Rating⭐</span>
          </div>
          <div className=" flex items-center">
            <StarRatings
              rating={parseFloat(gadget.rating) || 0}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="24px"
              starSpacing="2px"
            />
            <span className="ml-2 text-gray-500 text-sm">
              {gadget.rating || "0.0"}
            </span>
          </div>

          {/* Buttons Section */}
          <div className="flex items-center mt-4 gap-3">
            <button
              onClick={() => handleAddToCart(gadget)}
              className="bg-purple-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Add To Cart <i className="fa-solid fa-cart-shopping bg-gray"></i>
            </button>
            <button
              onClick={() => handleWishlist(gadget)}
              disabled={wishlistItems.some(
                (item) => item.product_id === gadget.product_id
              )}
              className={`p-2 border border-gray-400 rounded-full px-4 ${
                wishlistItems.some(
                  (item) => item.product_id === gadget.product_id
                )
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <i className="fa-regular text-black fa-heart text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
