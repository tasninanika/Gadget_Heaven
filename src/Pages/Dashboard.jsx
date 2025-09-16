import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllToCart, getAllWishlist } from "../utils";
import Success from "../../src/assets/Group.png";
import { Helmet } from "react-helmet-async";
import { FaSortAmountDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Dashboard = () => {
  const [gadgets, setGadgets] = useState([]); // Holds all cart items
  const [isCart, setIsCart] = useState(true); // true -> Cart, false -> Wishlist
  const [wishlistItems, setWishlistItems] = useState([]); // Holds wishlist items
  const [showModal, setShowModal] = useState(false); // Modal state
  const [finalTotalPrice, setFinalTotalPrice] = useState(0);

  const navigate = useNavigate();

  // Load cart data from local storage
  useEffect(() => {
    const ToCart = getAllToCart();
    if (ToCart) setGadgets(ToCart);
  }, []);

  // Load wishlist data
  useEffect(() => {
    if (!isCart) {
      const Wishlist = getAllWishlist();
      setWishlistItems(Wishlist);
    }
  }, [isCart]);

  // Handle Delete Function for Cart
  const handleDelete = (id) => {
    const updatedGadgets = gadgets.filter((item) => item.product_id !== id);
    setGadgets(updatedGadgets);
    localStorage.setItem("ToCart", JSON.stringify(updatedGadgets));
  };

  // Handle Delete Function for Wishlist
  const handleDeleteWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.product_id !== id
    );
    setWishlistItems(updatedWishlist);
    localStorage.setItem("Wishlist", JSON.stringify(updatedWishlist));
  };

  // Sort Cart by Price (Descending)
  const sortCartByPrice = () => {
    const sortedCart = [...gadgets].sort((a, b) => b.price - a.price);
    setGadgets(sortedCart);
  };

  // Calculate Total Price
  const totalPrice = gadgets
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  // Handle Purchase
  const handlePurchase = () => {
    setFinalTotalPrice(totalPrice); // Store total before clearing
    setShowModal(true);
    setGadgets([]);
    localStorage.setItem("ToCart", JSON.stringify([]));
  };

  // Close modal & navigate to home
  const handleClose = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-purple-600 text-white text-center py-6 shadow-md">
        <Helmet>
          <title>Dashboard || Gadget Heaven</title>
        </Helmet>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        {/* Toggle Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setIsCart(true)}
            className={`px-6 py-2 rounded-full transition ${
              isCart
                ? "px-12 bg-white text-purple-600 font-bold"
                : "px-12 border border-white text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setIsCart(false)}
            className={`px-6 py-2 rounded-full transition ${
              !isCart
                ? "px-10 bg-white text-purple-600 font-bold"
                : "px-10 border border-white text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto mt-6 p-6">
        {/* Title & Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{isCart ? "Cart" : "Wishlist"}</h2>

          {/* Actions */}
          <div className="flex gap-4 items-center">
            {isCart && (
              <>
                <span className="text-xl font-bold">
                  Total Cost: ${totalPrice}
                </span>

                {/* Sort by Price Button */}
                <button
                  onClick={sortCartByPrice}
                  className="relative px-4 py-2 rounded-full overflow-hidden group"
                >
                  {/* Gradient Border */}
                  <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-b from-purple-700 to-purple-400">
                    <span className="h-full w-full rounded-full bg-white block"></span>
                  </span>

                  {/* Text + Icon */}
                  <span className="relative flex items-center gap-2 font-semibold bg-clip-text text-purple-600">
                    {" "}
                    Sort by Price
                    <FaSortAmountDown className="text-purple-400" />
                  </span>
                </button>

                {/* Purchase Button */}
                <button
                  onClick={handlePurchase}
                  disabled={gadgets.length === 0}
                  className={`px-4 py-2 rounded-full text-white font-semibold ${
                    gadgets.length === 0
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-gradient-to-b from-purple-700 to-purple-400 hover:from-purple-600 hover:to-purple-800"
                  }`}
                >
                  Purchase
                </button>
              </>
            )}
          </div>
        </div>

        {/* Product List */}
        {(isCart ? gadgets : wishlistItems).length > 0 ? (
          <div className="flex flex-col gap-4">
            {(isCart ? gadgets : wishlistItems).map((item) => (
              <div
                key={item.product_id}
                className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-6"
              >
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className="w-24 h-24 object-cover rounded-2xl"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">
                    {item.product_title}
                  </h3>
                  <p className="text-sm opacity-80">{item.description}</p>
                  <p className="font-semibold mt-2 opacity-85">
                    Price: ${item.price}
                  </p>
                </div>
                <button
                  onClick={() =>
                    isCart
                      ? handleDelete(item.product_id)
                      : handleDeleteWishlist(item.product_id)
                  }
                  className="text-red-600 text-lg hover:bg-red-100 p-2 rounded-full border border-red-400"
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No items in {isCart ? "Cart" : "Wishlist"}.
          </p>
        )}
      </div>

      {/* Purchase Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-black/50 ">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <img src={Success} alt="Success" className="w-12 mx-auto mb-3" />
            <h2 className="text-lg font-bold">Payment Successfully</h2>
            <p>Thanks for purchasing.</p>
            <p className="font-bold">Total: {finalTotalPrice}</p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2 bg-gray-200 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
