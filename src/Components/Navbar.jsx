import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="navbar text-purple-700 mx-auto px-24">
        <div className="navbar-start">
          <Link to="/" className="text-xl font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/statistics" className="hover:underline">
              Statistics
            </Link>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/support" className="hover:underline">
              Support
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-circle btn-outline border-black bg-white">
            <i className="fa-solid fa-cart-shopping text-gray-500 text-xl"></i>
          </button>
          <button className="btn btn-circle btn-outline border-black bg-white ml-3">
            <i className="fa-solid fa-heart text-red-600 text-xl"></i>
          </button>
        </div>
      </div>
    );
};

export default Navbar;