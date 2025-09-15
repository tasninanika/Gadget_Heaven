import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-purple-600 text-white relative pb-48 -mt-26 rounded-4xl">
      {/* Navbar */}
      <div className="navbar text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <Link to="/" className="text-xl font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <Link to="/" className="hover:underline font-bold">
              Home
            </Link>
            <Link to="/statistics" className="hover:underline font-bold">
              Statistics
            </Link>
            <Link to="/dashboard" className="hover:underline font-bold">
              Dashboard
            </Link>
            <Link to="/support" className="hover:underline font-bold">
              Support
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-circle btn-outline border-black  bg-white">
            <i className="fa-solid fa-cart-shopping text-gray-500 text-xl"></i>
          </button>
          <button className="btn btn-circle btn-outline border-black bg-white ml-3">
            <i className="fa-solid fa-heart text-red-600 text-xl"></i>
          </button>
        </div>
      </div>

      {/* Banner Text */}
      <div className="text-center max-w-screen-lg mx-auto mt-8 pb-8 ">
        <h1 className="text-4xl font-bold">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="py-6 max-w-2xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart <br /> devices to the coolest accessories, we have
          it all!
        </p>
        <button className="btn bg-white text-purple-600 font-bold shadow-md my-2 rounded-full px-6 py-4 ">
          Shop Now
        </button>
      </div>

      {/* Floating Banner Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 max-w-4xl border-2 border-white rounded-4xl">
        <img
          className="w-[1500px] h-[420px]  rounded-4xl border-18 bg-white/10 backdrop-blur-lg  border-white/10 "
          src={bannerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
